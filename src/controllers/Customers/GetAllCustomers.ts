import {Request, Response} from 'express'
import { getRepository } from 'typeorm'
import { Customer } from '../../entity/Customer'

export async function getAllCustomers(request: Request, response: Response) {
    

    const customerRepo = getRepository(Customer);

    const customers = await customerRepo
                                .createQueryBuilder()
                                .select(["walletAccountName", "phoneNo", "email", "walletAccountNumber", "balance", "dateCreated"])
                                .where("TYPE IN (1,2)")
                                .orderBy("walletAccountName")
                                .getRawMany();

    response.status(200).send({
        status: true,
        message: 'Successfully fetched....',
        data: customers
    })

}