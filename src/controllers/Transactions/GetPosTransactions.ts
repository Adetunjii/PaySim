import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { ParkwayNotification } from "../../entity/ParkwayNotification";

export async function getPosTransactions(request: Request, response: Response) {
  const posTransactionRepo = getRepository(ParkwayNotification);

  const date = request.params.date;

  if (!date) {
    response.status(400).send("Invalid date");
  }

  const transactions = await posTransactionRepo.query(`
  SELECT TERMINALID, AMOUNT, DATECREATED, SETTLEMENTSTATUS, SETTLEMENTREFERENCENO, SETTLEMENTDATE, 'PARKWAY' [PROCESSOR]
  FROM PARKWAYNOTIFICATION
  WHERE DATECREATED >= '${date}'
  
  UNION ALL
  
  SELECT TERMINALID, AMOUNT, DATECREATED, SETTLEMENTSTATUS, SETTLEMENTREFERENCENO, SETTLEMENTDATE, 'RUBIES' [PROCESSOR]
  FROM RUBIESNOTIFICATION 
  WHERE DATECREATED >= '${date}'
  
  ORDER BY DATECREATED DESC
    `);

  response.status(200).send({
    status: true,
    message: "Successfully fetched....",
    data: transactions,
  });
}
