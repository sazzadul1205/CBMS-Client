import { useState } from "react";
import Swal from "sweetalert2";
import {
  FaChevronLeft,
  FaChevronRight,
  FaClipboardList,
} from "react-icons/fa6";
import { IoEyeOutline, IoHomeOutline } from "react-icons/io5";
import invoiceData from "../../../data/Data.json";
import ViewApprovedInvoice from "./ViewApprovedInvoice/ViewApprovedInvoice";

const ITEMS_PER_PAGE = 10;

const InvoicesApprove = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [template, setTemplate] = useState(""); // Track template selection
  const [selectedInvoice, setSelectedInvoice] = useState(null);

  // Filtered invoices based on status, search term, and template
  const filteredInvoices = invoiceData
    .filter((invoice) => invoice.status === "Pending")
    .filter((invoice) =>
      invoice.customerName.toLowerCase().includes(searchTerm.toLowerCase())
    )

  // Calculate paginated data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = filteredInvoices.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Calculate total pages
  const totalPages = Math.ceil(filteredInvoices.length / ITEMS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setGoToPage(page); // Update "Go to" page number
    }
  };

  // Handle "Go to" input change
  const handleGoToPageChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value > 0 && value <= totalPages) {
      setGoToPage(value);
      handlePageChange(value);
    }
  };

  // SweetAlert confirm function for approval
  const handleApprove = (invoiceId) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to approve invoice #${invoiceId}?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, approve it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Approved!",
          `Invoice #${invoiceId} has been approved.`,
          "success"
        );
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "The invoice approval was cancelled.", "error");
      }
    });
  };

  // Open Modal function
  const openModal = (invoice) => {
    setSelectedInvoice(invoice);
    const modal = document.getElementById("View_Invoice");
    if (modal) modal.showModal();
  };

  // Calculate total amount in BDT and VAT
  const calculateAmount = (invoice) => {
    const exchangeRate = 117.0; // Exchange rate
    const totalAmountInUSD = invoice.sale.reduce(
      (total, sale) => total + sale.AmountInUSD,
      0
    );
    const totalAmountInBDT = totalAmountInUSD * exchangeRate;
    const vat = totalAmountInBDT * 0.05; // VAT at 5%
    const netTotalInBDT = totalAmountInBDT + vat;
    return { totalAmountInBDT, vat, netTotalInBDT };
  };

  return (
    <div className="text-black mx-4">
      {/* Breadcrumbs and Button */}
      <div className="flex justify-between items-center py-4">
        <div className="breadcrumbs text-sm">
          <ul>
            <li>
              <IoHomeOutline className="text-blue-500" />
            </li>
            <li>
              <a className="text-blue-500">Invoice</a>
            </li>
            <li>Approve-Invoice</li>
          </ul>
        </div>
      </div>

      {/* Template */}
      <div className="my-5">
        <p className="pb-2">
          Template Name <span className="text-red-500">*</span>
        </p>
        <div>
          <select
            className="select select-bordered w-2/3 bg-white"
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
          >
            <option value="">Select ...</option>
            <option>Management Fees</option>
            <option>Transaction Charges</option>
            <option>Service Fees</option>
            <option>Consultation Charges</option>
            <option>Advisory Fees</option>
          </select>
          <button className="btn ml-2 text-white">Show</button>
        </div>
      </div>

      {/* List Section */}
      <div className="bg-white p-5">
        <div className="py-2 px-5 justify-end flex">
          <input
            type="text"
            placeholder="Search ..."
            className="input input-bordered bg-white w-52"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="bg-gray-300 text-black">
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox bg-white" />
                  </label>
                </th>
                <th>Invoice Date</th>
                <th>Customer Name</th>
                <th>Template Name</th>
                <th>Total Amount (BDT)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {paginatedData.length === 0 ? (
                <tr>
                  <td colSpan="6" className="text-center">
                    No invoices found
                  </td>
                </tr>
              ) : (
                paginatedData.map((invoice) => {
                  const { netTotalInBDT } = calculateAmount(invoice);
                  return (
                    <tr key={invoice.id}>
                      <th>
                        <label>
                          <input type="checkbox" className="checkbox" />
                        </label>
                      </th>
                      <td>{invoice.date}</td>
                      <td>{invoice.customerName}</td>
                      <td>{invoice.templateName}</td>
                      <td>{netTotalInBDT.toFixed(2)}</td>
                      <td className="flex gap-2">
                        <button
                          className="flex gap-2 py-2 px-5 border-2 text-gray-500 border-gray-500 text-[15px] items-center hover:bg-gray-500 hover:text-white"
                          onClick={() => openModal(invoice)}
                        >
                          <IoEyeOutline /> View
                        </button>
                        <button
                          className="flex gap-2 py-2 px-5 bg-blue-500 text-[15px] items-center text-white hover:bg-blue-700"
                          onClick={() => handleApprove(invoice.id)}
                        >
                          <FaClipboardList /> Approve
                        </button>
                      </td>
                      {/* Modal */}
                      <dialog id="View_Invoice" className="modal">
                        {selectedInvoice && (
                          <ViewApprovedInvoice invoice={selectedInvoice} />
                        )}
                      </dialog>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>

          
          <div className="flex justify-between items-center">
            {/* Go To section */}
            <div className="flex items-center">
              <p>Go</p>
              <input
                type="number"
                value={goToPage}
                onChange={handleGoToPageChange}
                min={1}
                max={totalPages}
                className="input input-bordered w-14 max-w-xs bg-white ml-2"
              />
              <p className="ml-4">
                Page {currentPage} of {totalPages}
              </p>
            </div>
            {/* Pagination section */}
            <div className="py-4 px-5 flex gap-2 items-center">
              <button
                className="bg-gray-100 px-2 py-2 text-lg"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
              >
                <FaChevronLeft />
              </button>
              {pageNumbers
                .slice(
                  Math.max(currentPage - 2, 0),
                  Math.min(currentPage + 1, totalPages)
                )
                .map((page) => (
                  <button
                    key={page}
                    className={`btn ${
                      page === currentPage ? "btn-primary" : "btn-outline"
                    }`}
                    onClick={() => handlePageChange(page)}
                  >
                    {page}
                  </button>
                ))}
              <button
                className="bg-gray-100 px-2 py-2 text-lg"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
              >
                <FaChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoicesApprove;
