import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { TransactionLog } from "../../entity/Transaction";

export async function getAwaitingReversalLogs(
  request: Request,
  response: Response
) {
  const transactionRepo = getRepository(TransactionLog);

  const transactions = await transactionRepo.query(`
        SELECT * FROM TRANSACTIONLOG
        WHERE OUTSTATUS = '-1'
        AND REVERSALTRANID = 0
        AND trancode <> 'Fees|VAT'
        ORDER BY DATECREATED DESC 
    `);

  response.status(200).send({
    status: true,
    message: "Successfully fetched...",
    data: transactions,
  });
}
