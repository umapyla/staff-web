export interface TxDetails {
     id: number;
     Date: string;
     descripton: string;
     Amount: number;
     Balance: string;

}

export interface IShowDetails {

    AccountNumber: string;
    TransactionType: string;
    TransactionDescription: string;
    TransactionAmount: string;
    TransactionDate: string;
    ReferenceNumber: string;
    ErrorCode: string;
}
