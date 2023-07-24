
export class User {
    
    constructor(
        //Prática 01 - Adicionando os atributos
        private id: string,
		private name: string,
		private email: string,
		private password: string,
        private createdAt: string
    ){}

    /**
     * getID - pegar id do user
     */
    public getId():string {
        return this.id
    }

    /**
     * putID - alterar id do user
     */
    public setId(value: string){
        this.id = value
    }


    public getName(): string {
        return this.name
    }
    public setName(value: string) {
        this.name = value
    }


    
    public getEmail(): string {
        return this.email
    }
    public setEmail(value: string) {
        this.email = value
    }


    
    public getPassword(): string {
        return this.password
    }
    public setPassword(value: string) {
        this.password = value
    }


    public getCreatedAt(): string {
        return this.createdAt
    }
    public setCreatedAt(value: string) {
        this.createdAt = value
    }
    

}