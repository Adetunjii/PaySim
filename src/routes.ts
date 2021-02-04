import { getAllCustomers } from "./controllers/Customers/GetAllCustomers";
import { getPosTransactions } from "./controllers/Transactions/GetPosTransactions";
import { getAllTransactions } from "./controllers/Transactions/GetAllTransactions";
import { getPaysimTransactions } from "./controllers/Transactions/GetPaysimTransactions";
import { getAwaitingReversalLogs } from "./controllers/Transactions/GetAwaitingReversalLogs";

export const AppRoutes = [
  {
    path: "/getTransactions/:walletAccountNo",
    method: "get",
    action: getAllTransactions,
  },

  {
    path: "/getPosTransactions/:date",
    method: "get",
    action: getPosTransactions,
  },
  {
    path: "/getPaysimTransactions/:date",
    method: "get",
    action: getPaysimTransactions,
  },
  {
    path: "/getAwaitingReversalLogs",
    method: "get",
    action: getAwaitingReversalLogs,
  },
  {
    path: "/getAllCustomers",
    method: "get",
    action: getAllCustomers,
  },
];
