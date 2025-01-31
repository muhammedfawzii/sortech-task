export interface Data {
    id: string;
    phoneNumber: string;
    userName: string;
    country: string;
    currentBalance: number;
    previousBalance: number;
    totalBalance: number;
    usedBalanceForTotalNumber:number,
    subscriptionCount: number;
    createdBy: string;
    createdAt: Date;
}

export interface TableRow {
    amount: number;
    internalRef: string;
    externalRef: string;
    responsiblePerson: string;
    executionDate: string;
    creationDate: string;
    company: string;
  }
 
