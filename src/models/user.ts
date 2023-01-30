export class User {
    constructor(
        private id: string,
        private name: string,
        private email: string,
        private password: string,
        private createdAt: string,
    ) { }


    public getCreatedAt(): string {
        return this.createdAt;
    }
    public setCreatedAt(value: string): void {
        this.createdAt = value;
    }
    public getPassword(): string {
        return this.password;
    }
    public setPassword(value: string): void {
        this.password = value;
    }
    public getEmail(): string {
        return this.email;
    }
    public setEmail(value: string): void {
        this.email = value;
    }
    public getName(): string {
        return this.name;
    }
    public setName(value: string): void {
        this.name = value;
    }
    public getId(): string {
        return this.id;
    }
    public setId(value: string): void {
        this.id = value;
    }
}

const user = new User(
    "u003",
    "Lucas",
    "lucas@email.com",
    "123132",
    "2023-01-29"
)