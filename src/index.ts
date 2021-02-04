import "reflect-metadata";
import {createConnection, getManager, getRepository} from "typeorm";
import * as express from 'express';
import {Request, Response, Application, NextFunction} from 'express';
import * as cors from 'cors'
import { AppRoutes } from "./routes";
import { Customer } from "./entity/Customer";
import { TransactionLog } from "./entity/Transaction";


createConnection().then(async connection => {

    console.log("DB connected successfully....")


    //create an express instance
    const app: Application = express();


    //middlewares
    app.use(express.json());
    app.use(cors({origin: true}));


    //routes

    AppRoutes.forEach(route => {
        app[route.method](route.path, async(request: Request, response: Response, next: NextFunction) => {
            route.action(request, response).catch((error) => next(error))
            
        })
    })

    const PORT = process.env.PORT || 8080;

    //start server
    app.listen(PORT, () => console.log(`⚡[Server]: is listening on port ${PORT}`))



}).catch(error => console.log(error));
