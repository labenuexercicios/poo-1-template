class User{
    //caracteristicas, informações --> ATRIBUTOS
    // private id: string
    // private name: string
    // private email: string
    // private password: string 

    //ações, funções --> METODOS
    //Para ficar menos verboso vc pode declarar as informações dentro do constructor e não precisa declarar o this.
    constructor(
        private id: string, 
        private name: string, 
        private email: string, 
        private password: string,
        private createdAt: string)
    {
        // this.id = id
        // this.name = name
        // this.email = email
        // this.password = password
    }

    //outros metodos - pode ter mais de um, mas o 'construtor'é obrigadtorio
    //CriarConta()
    //MudarConta()

    public getId(): string{
        return this.id
    }

    public setId(newId: string): void{
        this.id = newId
    }

    public getName(){
        return this.name
    }

    public setName(newName: string): void{
        this.id = newName
    }

    public getEmail(){
        return this.email
    }

    public setEmail(newEmail: string): void{
        this.id = newEmail
    }

    public getPassword(){
        return this.email
    }

    public setPassword(newEmail: string): void{
        this.id = newEmail
    }

    public getCreateAt(){
        return this.createdAt
    }

    public setCreateAt(newCreateAt: string): void{
        this.createdAt = newCreateAt
    }

}

//INSTANCIAR - quanto vamos criar (no caso desse exmplo Usuário)

const user1 = new User("001", "Murillo", "murilo@email.com", "1234", "2023-01-30 10:00")

const user2 = new User("002", "Tais", "tais@email.com", "123456", "2023-01-30 10:00")

// console.log(user1.id) //001
// console.log(user1.getId()) //001
