import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Page/Dashboard/Dashboard";
import InvoicesList from "../Page/Invoice/InvoicesList/InvoicesList";
import InvoicesApprove from "../Page/Invoice/InvoicesApprove/InvoicesApprove";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/Dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/invoices-list",
        element: <InvoicesList></InvoicesList>
      },
      {
        path: "/invoices-approve",
        element: <InvoicesApprove></InvoicesApprove>
      },
    ],
  },
]);
