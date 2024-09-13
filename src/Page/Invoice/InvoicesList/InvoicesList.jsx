import { IoHomeOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ViewInvoice from "./ViewInvoice/ViewInvoice";
import AddNewInvoice from "./AddNewInvoice/AddNewInvoice";
import InvoiceData from "../../../data/Data.json";

const ITEMS_PER_PAGE = 10;

const InvoicesList = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState(1);
  const dropdownRef = useRef(null);
  const buttonRef = useRef(null);

  // Function to toggle dropdown visibility
  const toggleDropdown = (id) => {
    setDropdownVisible(dropdownVisible === id ? null : id);
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target) &&
      !buttonRef.current.contains(event.target)
    ) {
      setDropdownVisible(null);
    }
  };

  // Add event listener for clicks outside
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Calculate paginated data
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const paginatedData = InvoiceData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Calculate page numbers
  const totalPages = Math.ceil(InvoiceData.length / ITEMS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      setGoToPage(page);
    }
  };

  // Handle "Go to" input change
  const handleGoToPageChange = (event) => {
    const value = parseInt(event.target.value, 10);
    if (!isNaN(value) && value >= 1 && value <= totalPages) {
      setGoToPage(value);
    }
  };

  // Open Modal function
  const openModal = () => {
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
            <li>Invoice-List</li>
          </ul>
        </div>
        <button
          className="btn ml-2 text-white"
          onClick={() => document.getElementById("Add_New_Invoice").showModal()}
        >
          + Create Invoice
        </button>
      </div>

      {/* Template */}
      <div className="my-5">
        <p className="pb-2">
          Template Name <span className="text-red-500 ">*</span>
        </p>
        <div>
          <select className="select select-bordered w-2/3 bg-white">
            <option disabled selected>
              Select ...
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <button className="btn ml-2 text-white">Show</button>
        </div>
      </div>

      {/* List */}
      <div className="bg-white py-5">
        <div className="py-2 px-5 justify-end flex">
          <input
            type="text"
            placeholder="Search ..."
            className="input input-bordered bg-white w-52"
          />
        </div>
        <div className="px-5">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-gray-200 text-black">
                  <th>Invoice ID</th>
                  <th>Invoice Date</th>
                  <th>Customer Name</th>
                  <th>Total Amount (BDT)</th>
                  <th>Create Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* Content */}
              <tbody>
                {paginatedData.map((invoice) => {
                  const { netTotalInBDT } =
                    calculateAmount(invoice);

                  return (
                    <tr key={invoice.id}>
                      <th>{invoice.id}</th>
                      <td>{invoice.date}</td>
                      <td>{invoice.customerName}</td>
                      <td>{netTotalInBDT.toFixed(2)}</td>
                      <td>
                        <span
                          className={`font-semibold px-8 py-1 rounded-full ${
                            invoice.createType === "Bulk"
                              ? "text-green-500 bg-green-200"
                              : "text-blue-500 bg-blue-200"
                          }`}
                        >
                          {invoice.createType}
                        </span>
                      </td>
                      <td>
                        <span
                          className={`font-semibold px-5 py-1 rounded-full ${
                            invoice.status === "Approved"
                              ? "text-green-500 bg-green-200"
                              : "text-yellow-500 bg-yellow-200"
                          }`}
                        >
                          {invoice.status}
                        </span>
                      </td>
                      <td className="relative">
                        <div className="relative inline-block">
                          <CiMenuKebab
                            ref={buttonRef}
                            tabIndex={0}
                            role="button"
                            className="cursor-pointer"
                            onClick={() => toggleDropdown(invoice.id)}
                          />
                          {/* Dropdown menu */}
                          {dropdownVisible === invoice.id && (
                            <ul
                              ref={dropdownRef}
                              tabIndex={0}
                              className="absolute dropdown-content top-full right-0 mt-2 w-32 bg-white shadow-lg border rounded-md z-50"
                            >
                              <li
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                                onClick={openModal}
                              >
                                View
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Update
                              </li>
                              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                Delete
                              </li>
                            </ul>
                          )}
                        </div>
                        {/* Modal */}
                        <dialog id="View_Invoice" className="modal">
                          <ViewInvoice
                            key={invoice.id}
                            invoice={invoice}
                          ></ViewInvoice>
                        </dialog>
                      </td>
                    </tr>
                  );
                })}
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
      <dialog id="Add_New_Invoice" className="modal">
        <AddNewInvoice />
      </dialog>
    </div>
  );
};

export default InvoicesList;
