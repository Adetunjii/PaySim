import { Column, Entity, PrimaryColumn } from "typeorm";
import {BaseEntity} from './BaseEntity'

@Entity('CUSTOMER_WALLET')
export class Customer extends BaseEntity{
 
    @Column()
    companyID: number;

    @Column()
    customerID: number;

    @Column()
    userCreated: number;

    @Column()
    walletAccountName: string;

    @Column()
    walletAccountNumber: string;

    @Column()
    email: string;

    @Column()
    phoneNo: string;

    @Column()
    balance: number;

    @Column()
    type: number;

    @Column()
    pin: string;

    @Column()
    canTransact: number;

    @Column()
    dailyLimit: number;

}