import { IoHomeOutline } from "react-icons/io5";
import { CiMenuKebab } from "react-icons/ci";
import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import ViewInvoice from "./ViewInvoice/ViewInvoice";
import AddNewInvoice from "./AddNewInvoice/AddNewInvoice";

const invoiceData = [
  {
    id: "2408UBPLC9",
    date: "28-08-24",
    customerName: "Uttara Bank PLC.",
    totalAmount: "147,525.00",
    createType: "Bulk",
    status: "Approved",
    sale: [
      {
        SaleNumber: 1,
        Month: "August, 2024",
        AmountInUSD: 1200.0,
      },
      {
        SaleNumber: 2,
        Month: "August, 2024",
        AmountInUSD: 100.0,
      },
    ],
  },
  {
    id: "2408UBPLC10",
    date: "29-08-24",
    customerName: "Dhaka Bank Ltd.",
    totalAmount: "123,456.00",
    createType: "Single",
    status: "Pending",
    sale: [
      {
        SaleNumber: 1,
        Month: "August, 2024",
        AmountInUSD: 750.0,
      },
    ],
  },
  {
    id: "2408UBPLC11",
    date: "30-08-24",
    customerName: "Standard Chartered",
    totalAmount: "98,765.00",
    createType: "Bulk",
    status: "Approved",
    sale: [
      {
        SaleNumber: 1,
        Month: "August, 2024",
        AmountInUSD: 900.0,
      },
      {
        SaleNumber: 2,
        Month: "August, 2024",
        AmountInUSD: 150.0,
      },
    ],
  },
  {
    id: "2408UBPLC12",
    date: "31-08-24",
    customerName: "City Bank",
    totalAmount: "215,000.00",
    createType: "Single",
    status: "Approved",
    sale: [
      {
        SaleNumber: 1,
        Month: "August, 2024",
        AmountInUSD: 1000.0,
      },
    ],
  },
  {
    id: "2408UBPLC13",
    date: "01-09-24",
    customerName: "Janata Bank",
    totalAmount: "145,200.00",
    createType: "Bulk",
    status: "Pending",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 850.0,
      },
    ],
  },
  {
    id: "2408UBPLC14",
    date: "02-09-24",
    customerName: "Brac Bank",
    totalAmount: "99,999.00",
    createType: "Single",
    status: "Approved",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 1200.0,
      },
    ],
  },
  {
    id: "2408UBPLC15",
    date: "03-09-24",
    customerName: "HSBC",
    totalAmount: "220,345.00",
    createType: "Bulk",
    status: "Approved",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 1700.0,
      },
      {
        SaleNumber: 2,
        Month: "September, 2024",
        AmountInUSD: 600.0,
      },
    ],
  },
  {
    id: "2408UBPLC16",
    date: "04-09-24",
    customerName: "AB Bank",
    totalAmount: "175,500.00",
    createType: "Single",
    status: "Pending",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 1300.0,
      },
    ],
  },
  {
    id: "2408UBPLC17",
    date: "05-09-24",
    customerName: "Dutch-Bangla Bank",
    totalAmount: "130,000.00",
    createType: "Bulk",
    status: "Approved",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 950.0,
      },
    ],
  },
  {
    id: "2408UBPLC18",
    date: "06-09-24",
    customerName: "Mutual Trust Bank",
    totalAmount: "110,250.00",
    createType: "Single",
    status: "Pending",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 1200.0,
      },
    ],
  },
  {
    id: "2408UBPLC19",
    date: "07-09-24",
    customerName: "Prime Bank",
    totalAmount: "160,800.00",
    createType: "Bulk",
    status: "Approved",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 1100.0,
      },
    ],
  },
  {
    id: "2408UBPLC20",
    date: "08-09-24",
    customerName: "Eastern Bank",
    totalAmount: "200,000.00",
    createType: "Single",
    status: "Approved",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 1800.0,
      },
    ],
  },
  {
    id: "2408UBPLC21",
    date: "09-09-24",
    customerName: "National Bank",
    totalAmount: "142,000.00",
    createType: "Bulk",
    status: "Pending",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 1000.0,
      },
    ],
  },
  {
    id: "2408UBPLC22",
    date: "10-09-24",
    customerName: "Social Islami Bank",
    totalAmount: "135,750.00",
    createType: "Single",
    status: "Approved",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 950.0,
      },
    ],
  },
  {
    id: "2408UBPLC23",
    date: "11-09-24",
    customerName: "First Security Islami Bank",
    totalAmount: "110,400.00",
    createType: "Bulk",
    status: "Pending",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 1100.0,
      },
    ],
  },
  {
    id: "2408UBPLC24",
    date: "12-09-24",
    customerName: "Dutch-Bangla Bank",
    totalAmount: "165,600.00",
    createType: "Single",
    status: "Approved",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 1300.0,
      },
    ],
  },
  {
    id: "2408UBPLC25",
    date: "13-09-24",
    customerName: "IFIC Bank",
    totalAmount: "190,500.00",
    createType: "Bulk",
    status: "Pending",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 1600.0,
      },
    ],
  },
  {
    id: "2408UBPLC26",
    date: "14-09-24",
    customerName: "United Commercial Bank",
    totalAmount: "145,000.00",
    createType: "Single",
    status: "Approved",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 1000.0,
      },
    ],
  },
  {
    id: "2408UBPLC27",
    date: "15-09-24",
    customerName: "Mutual Trust Bank",
    totalAmount: "200,000.00",
    createType: "Bulk",
    status: "Pending",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 1500.0,
      },
    ],
  },
  {
    id: "2408UBPLC28",
    date: "16-09-24",
    customerName: "NRB Bank",
    totalAmount: "125,000.00",
    createType: "Single",
    status: "Approved",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 1100.0,
      },
    ],
  },
  {
    id: "2408UBPLC29",
    date: "17-09-24",
    customerName: "City Bank",
    totalAmount: "185,000.00",
    createType: "Bulk",
    status: "Pending",
    sale: [
      {
        SaleNumber: 1,
        Month: "September, 2024",
        AmountInUSD: 1800.0,
      },
    ],
  },
];

const ITEMS_PER_PAGE = 10;

const InvoicesList = () => {
  const [dropdownVisible, setDropdownVisible] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState(1); // Added state for "Go to" input
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
  const paginatedData = invoiceData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  // Calculate page numbers
  const totalPages = Math.ceil(invoiceData.length / ITEMS_PER_PAGE);
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
    if (!isNaN(value) && value >= 1 && value <= totalPages) {
      setGoToPage(value);
    }
  };

  // Open Modal function
  const openModal = () => {
    const modal = document.getElementById("View_Invoice");
    if (modal) modal.showModal();
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
              <a className="text-blue-500">Documents</a>
            </li>
            <li>Add Document</li>
          </ul>
        </div>
        <button
          className="btn ml-2 text-white"
          onClick={() =>
            document.getElementById("Add_New_Invoice").showModal()
          }
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
                  <th>Total Amount</th>
                  <th>Create Type</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* Content */}
              <tbody>
                {paginatedData.map((invoice) => (
                  <tr key={invoice.id}>
                    <th>{invoice.id}</th>
                    <td>{invoice.date}</td>
                    <td>{invoice.customerName}</td>
                    <td>{invoice.totalAmount}</td>
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
                ))}
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
                      className={`bg-gray-100 p-1 px-3 text-lg ${
                        currentPage === page ? "bg-blue-500 text-white" : ""
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

      {/* Modal */}
      <dialog id="Add_New_Invoice" className="modal">
        <AddNewInvoice></AddNewInvoice>
      </dialog>
    </div>
  );
};

export default InvoicesList;
