import express, { Request, Response } from "express";
import cors from "cors";
import { TAccountDB, TAccountDBPost, TUserDB, TUserDBPost } from "./types";
import { db } from "./database/knex";
import { Video } from "./models/Video";

const app = express();

app.use(cors());
app.use(express.json());

app.listen(3003, () => {
  console.log(`Servidor rodando na porta ${3003}`);
});

app.get("/ping", async (req: Request, res: Response) => {
  try {
    res.status(200).send({ message: "Pong!!" });
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

const video1 = new Video("v001", "Video 1", 200, "17/04/2023");
console.log(video1);
console.log("get title", video1.getTitle());
///

app.get("/videos", async (req: Request, res: Response) => {
  try {
    const q = req.query.q;
    let videosDB;
    if (q) {
      const result = await db("videos").where("name", "LIKE", `%${q}%`);
      videosDB = result;
    } else {
      const result = await db("videos");
      videosDB = result;
    }

    const videos: Video[] = videosDB.map(
      (videoDB) =>
        new Video(
          videoDB.id,
          videoDB.title,
          videoDB.duration,
          videoDB.upload_at
        )
    );
    res.status(200).send(videos);
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.post("/videos", async (req: Request, res: Response) => {
  try {
    const { id, title, duration } = req.body;

    if (typeof id !== "string") {
      res.status(400);
      throw new Error("'id' deve ser string");
    }

    if (typeof title !== "string") {
      res.status(400);
      throw new Error("'title' deve ser string");
    }

    if (typeof duration !== "number") {
      res.status(400);
      throw new Error("'duration' deve ser number");
    }

    const [videosDBExists] = await db("videos").where({ id });
    if (videosDBExists) {
      res.status(400);
      throw new Error("'id' já existe.");
    }

    const newVideo = new Video(id, title, duration, new Date().toISOString());

    const newVideoDB = {
      id: newVideo.getId(),
      title: newVideo.getTitle(),
      duration: newVideo.getDuration(),
      upload_at: newVideo.getUploadAt(),
    };

    await db("videos").insert(newVideoDB);
    const [videosDB] = await db("videos").where({ id });
    res.status(201).send(newVideo);
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.put("/videos/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    const newId = req.body.id;
    const newTitle = req.body.title;
    const newDuration = req.body.duration;

    const [videoDB] = await db("videos").where({ id });

    const [videosDBExists] = await db("videos").where({ id });
    if (!videosDBExists) {
      res.status(400);
      throw new Error("'id' não existe.");
    }

    const newVideo = new Video(
      newId,
      newTitle,
      newDuration,
      new Date().toISOString()
    );

    const newVideoDB = {
      id: newId || videoDB.id,
      title: newTitle || videoDB.title,
      duration: newDuration || videoDB.duration,
    };

    await db("videos").update(newVideoDB).where({ id });
    res.status(200).send("video atualizado com sucesso.").send(newVideo);
  } catch (error) {
    console.log(error);

    if (req.statusCode === 200) {
      res.status(500);
    }

    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro inesperado");
    }
  }
});

app.delete("/videos/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const [existingVideos] = await db("videos").where({id});
    if (!existingVideos) {
      res.status(404);
      throw new Error("Video não encontrado."); 
    }
    await db("videos").delete().where("id",id);
    res.status(200).send("video excluido com sucesso.")

  } catch (error) {
    console.log(error);

    if (res.statusCode === 200) {
      res.status(500);
    }
    if (error instanceof Error) {
      res.send(error.message);
    } else {
      res.send("Erro Inesperado.");
    }
  }
});
