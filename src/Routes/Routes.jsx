import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Page/Dashboard/Dashboard";
import InvoicesList from "../Page/Invoice/InvoicesList/InvoicesList";
import InvoicesApprove from "../Page/Invoice/InvoicesApprove/InvoicesApprove";
import InvoiceStatusUpdate from "../Page/Invoice/InvoiceStatusUpdate/InvoiceStatusUpdate";
import BulkInvoiceCreate from "../Page/Invoice/BulkInvoiceCreate/BulkInvoiceCreate";
import PageNotFound from "../Page/PageNotFound/PageNotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <PageNotFound></PageNotFound>,
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
      {
        path: "/invoices-status-update",
        element: <InvoiceStatusUpdate></InvoiceStatusUpdate>
      },
      {
        path: "/invoices-bulk-create",
        element: <BulkInvoiceCreate></BulkInvoiceCreate>
      },
    ],
  },
]);
