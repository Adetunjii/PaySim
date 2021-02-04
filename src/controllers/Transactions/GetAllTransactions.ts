import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { TransactionLog } from "../../entity/Transaction";

export async function getAllTransactions(request: Request, response: Response) {
  const walletAccountNumber = request.params.walletAccountNo;

  if (!walletAccountNumber) {
    return response.status(404).send({
      status: false,
      message: "Account doesn't exist",
    });
  }

  const transactionRepo = getRepository(TransactionLog);

  const transactions = await transactionRepo.query(
    `
            SELECT * FROM [TRANSACTIONLOG] 
            WHERE SENDERACCOUNTNUMBER = '${walletAccountNumber.toString()}'
            AND TRANCODE <> 'Fees|VAT' 
           
            UNION ALL
           
            SELECT * 
            FROM [TRANSACTIONLOG]
            WHERE RECEIVERACCOUNTNUMBER = '${walletAccountNumber.toString()}'
            AND TRANCODE <> 'Fees|VAT'

            ORDER BY DATECREATED DESC`
  );

  response.status(200).send({
    status: true,
    message: "Successfully fetched...",
    data: transactions,
  });
}
