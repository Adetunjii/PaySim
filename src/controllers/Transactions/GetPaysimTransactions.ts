import { getRepository } from "typeorm";
import { Request, Response } from "express";
import { TransactionLog } from "../../entity/Transaction";

export async function getPaysimTransactions(
  request: Request,
  response: Response
) {
  const date = request.params.date;
  const transactionRepo = getRepository(TransactionLog);

  const transactions = await transactionRepo.query(`
        SELECT * FROM TRANSACTIONLOG
        WHERE DATECREATED >= '${date}'
        ORDER BY DATECREATED DESC
    `);

  response.status(200).send({
    status: true,
    message: "Successfully fetched...",
    data: transactions,
  });
}
