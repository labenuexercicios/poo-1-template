
export class Account{

    constructor(
        private id: string,
        private ownerId: string,
        private balance: number,
        private createdAt: string
    ){};


    public getId(): string {
        return this.id;
    }
    public setId(value: string) {
        this.id = value;
    };

    
    public getOwnerId(): string {
        return this.ownerId;
    }
    public setOwnerId(value: string) {
        this.ownerId = value;
    };


    public getBalance(): number {
        return this.balance;
    }
    public setBalance(value: number) {
        this.balance = value;
    };


    public getCreatedAt(): string {
        return this.createdAt;
    }
    public setCreatedAt(value: string) {
        this.createdAt = value;
    };
}