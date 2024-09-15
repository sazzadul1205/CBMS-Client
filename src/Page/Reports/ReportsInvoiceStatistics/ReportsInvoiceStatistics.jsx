import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Select from "react-select";

const ReportsInvoiceStatistics = () => {
  const yearOptions = [
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
  ];

  // State for filter inputs
  const [fromDate, setFromDate] = useState(null);
  const [toDate, setToDate] = useState(null);
  const [customer, setCustomer] = useState(null);
  const [status, setStatus] = useState(null);

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState(1);
  const totalPages = 5; // Example: Adjust according to fetched data

  // Example invoice data
  const fetchInvoices = [
    {
      id: 1,
      invoiceId: "2401ABCD1",
      invoiceDate: "01-08-2024",
      customer: "ABC Corp",
      status: "Pending",
      totalAmount: 10000,
      receivedAmount: 5000,
      due: 5000,
    },
    {
      id: 2,
      invoiceId: "2402EFGH2",
      invoiceDate: "02-08-2024",
      customer: "XYZ Ltd",
      status: "Approved",
      totalAmount: 20000,
      receivedAmount: 20000,
      due: 0,
    },
    {
      id: 3,
      invoiceId: "2403IJKL3",
      invoiceDate: "03-08-2024",
      customer: "LMN Inc",
      status: "Pending",
      totalAmount: 15000,
      receivedAmount: 8000,
      due: 7000,
    },
    {
      id: 4,
      invoiceId: "2404MNOP4",
      invoiceDate: "04-08-2024",
      customer: "OPQ Corp",
      status: "Rejected",
      totalAmount: 5000,
      receivedAmount: 0,
      due: 5000,
    },
    {
      id: 5,
      invoiceId: "2405QRST5",
      invoiceDate: "05-08-2024",
      customer: "RST Ltd",
      status: "Pending",
      totalAmount: 12000,
      receivedAmount: 7000,
      due: 5000,
    },
    {
      id: 6,
      invoiceId: "2406UVWX6",
      invoiceDate: "06-08-2024",
      customer: "UVW Corp",
      status: "Approved",
      totalAmount: 17000,
      receivedAmount: 17000,
      due: 0,
    },
    {
      id: 7,
      invoiceId: "2407YZAB7",
      invoiceDate: "07-08-2024",
      customer: "XYZ Global",
      status: "Approved",
      totalAmount: 13000,
      receivedAmount: 13000,
      due: 0,
    },
    {
      id: 8,
      invoiceId: "2408CDEF8",
      invoiceDate: "08-08-2024",
      customer: "DEF Group",
      status: "Pending",
      totalAmount: 9000,
      receivedAmount: 6000,
      due: 3000,
    },
    {
      id: 9,
      invoiceId: "2409GHIJ9",
      invoiceDate: "09-08-2024",
      customer: "GHI Ltd",
      status: "Rejected",
      totalAmount: 11000,
      receivedAmount: 0,
      due: 11000,
    },
    {
      id: 10,
      invoiceId: "2410KLMN10",
      invoiceDate: "10-08-2024",
      customer: "KLM Corp",
      status: "Approved",
      totalAmount: 16000,
      receivedAmount: 16000,
      due: 0,
    },
    {
      id: 11,
      invoiceId: "2411OPQR11",
      invoiceDate: "11-08-2024",
      customer: "OPQ Ltd",
      status: "Pending",
      totalAmount: 10000,
      receivedAmount: 5000,
      due: 5000,
    },
    {
      id: 12,
      invoiceId: "2412STUV12",
      invoiceDate: "12-08-2024",
      customer: "STU Corp",
      status: "Approved",
      totalAmount: 21000,
      receivedAmount: 21000,
      due: 0,
    },
    {
      id: 13,
      invoiceId: "2413WXYZ13",
      invoiceDate: "13-08-2024",
      customer: "WXY Group",
      status: "Pending",
      totalAmount: 18000,
      receivedAmount: 8000,
      due: 10000,
    },
    {
      id: 14,
      invoiceId: "2414ABCD14",
      invoiceDate: "14-08-2024",
      customer: "ABC Global",
      status: "Approved",
      totalAmount: 14000,
      receivedAmount: 14000,
      due: 0,
    },
    {
      id: 15,
      invoiceId: "2415EFGH15",
      invoiceDate: "15-08-2024",
      customer: "EFG Inc",
      status: "Pending",
      totalAmount: 15000,
      receivedAmount: 5000,
      due: 10000,
    },
    {
      id: 16,
      invoiceId: "2416IJKL16",
      invoiceDate: "16-08-2024",
      customer: "JKL Ltd",
      status: "Approved",
      totalAmount: 19000,
      receivedAmount: 19000,
      due: 0,
    },
    {
      id: 17,
      invoiceId: "2417MNOP17",
      invoiceDate: "17-08-2024",
      customer: "MNO Corp",
      status: "Pending",
      totalAmount: 11000,
      receivedAmount: 4000,
      due: 7000,
    },
    {
      id: 18,
      invoiceId: "2418QRST18",
      invoiceDate: "18-08-2024",
      customer: "RST Group",
      status: "Approved",
      totalAmount: 17000,
      receivedAmount: 17000,
      due: 0,
    },
    {
      id: 19,
      invoiceId: "2419UVWX19",
      invoiceDate: "19-08-2024",
      customer: "UVW Ltd",
      status: "Pending",
      totalAmount: 13000,
      receivedAmount: 7000,
      due: 6000,
    },
    {
      id: 20,
      invoiceId: "2420YZAB20",
      invoiceDate: "20-08-2024",
      customer: "YZ Group",
      status: "Pending",
      totalAmount: 12000,
      receivedAmount: 5000,
      due: 7000,
    },
    {
      id: 21,
      invoiceId: "2421ABCD21",
      invoiceDate: "21-08-2024",
      customer: "XYZ Corp",
      status: "Approved",
      totalAmount: 14000,
      receivedAmount: 14000,
      due: 0,
    },
    {
      id: 22,
      invoiceId: "2422EFGH22",
      invoiceDate: "22-08-2024",
      customer: "LMN Ltd",
      status: "Pending",
      totalAmount: 9500,
      receivedAmount: 4500,
      due: 5000,
    },
    {
      id: 23,
      invoiceId: "2423IJKL23",
      invoiceDate: "23-08-2024",
      customer: "OPQ Group",
      status: "Rejected",
      totalAmount: 8000,
      receivedAmount: 0,
      due: 8000,
    },
    {
      id: 24,
      invoiceId: "2424MNOP24",
      invoiceDate: "24-08-2024",
      customer: "ABC Ltd",
      status: "Approved",
      totalAmount: 22000,
      receivedAmount: 22000,
      due: 0,
    },
    {
      id: 25,
      invoiceId: "2425QRST25",
      invoiceDate: "25-08-2024",
      customer: "EFG Corp",
      status: "Pending",
      totalAmount: 11000,
      receivedAmount: 6000,
      due: 5000,
    },
    {
      id: 26,
      invoiceId: "2426UVWX26",
      invoiceDate: "26-08-2024",
      customer: "UVW Ltd",
      status: "Approved",
      totalAmount: 13000,
      receivedAmount: 13000,
      due: 0,
    },
    {
      id: 27,
      invoiceId: "2427YZAB27",
      invoiceDate: "27-08-2024",
      customer: "XYZ Inc",
      status: "Pending",
      totalAmount: 16000,
      receivedAmount: 7000,
      due: 9000,
    },
    {
      id: 28,
      invoiceId: "2428CDEF28",
      invoiceDate: "28-08-2024",
      customer: "RST Corp",
      status: "Rejected",
      totalAmount: 10500,
      receivedAmount: 0,
      due: 10500,
    },
    {
      id: 29,
      invoiceId: "2429GHIJ29",
      invoiceDate: "29-08-2024",
      customer: "JKL Ltd",
      status: "Approved",
      totalAmount: 15000,
      receivedAmount: 15000,
      due: 0,
    },
    {
      id: 30,
      invoiceId: "2430KLMN30",
      invoiceDate: "30-08-2024",
      customer: "MNO Inc",
      status: "Pending",
      totalAmount: 17000,
      receivedAmount: 8000,
      due: 9000,
    },
    {
      id: 31,
      invoiceId: "2431OPQR31",
      invoiceDate: "31-08-2024",
      customer: "STU Group",
      status: "Approved",
      totalAmount: 20000,
      receivedAmount: 20000,
      due: 0,
    },
    {
      id: 32,
      invoiceId: "2432STUV32",
      invoiceDate: "01-09-2024",
      customer: "XYZ Corp",
      status: "Pending",
      totalAmount: 12500,
      receivedAmount: 3000,
      due: 9500,
    },
    {
      id: 33,
      invoiceId: "2433WXYZ33",
      invoiceDate: "02-09-2024",
      customer: "LMN Ltd",
      status: "Approved",
      totalAmount: 14000,
      receivedAmount: 14000,
      due: 0,
    },
    {
      id: 34,
      invoiceId: "2434ABCD34",
      invoiceDate: "03-09-2024",
      customer: "DEF Corp",
      status: "Rejected",
      totalAmount: 8500,
      receivedAmount: 0,
      due: 8500,
    },
    {
      id: 35,
      invoiceId: "2435EFGH35",
      invoiceDate: "04-09-2024",
      customer: "OPQ Ltd",
      status: "Pending",
      totalAmount: 11500,
      receivedAmount: 5000,
      due: 6500,
    },
    {
      id: 36,
      invoiceId: "2436IJKL36",
      invoiceDate: "05-09-2024",
      customer: "UVW Group",
      status: "Approved",
      totalAmount: 16000,
      receivedAmount: 16000,
      due: 0,
    },
    {
      id: 37,
      invoiceId: "2437MNOP37",
      invoiceDate: "06-09-2024",
      customer: "GHI Ltd",
      status: "Pending",
      totalAmount: 13500,
      receivedAmount: 4000,
      due: 9500,
    },
    {
      id: 38,
      invoiceId: "2438QRST38",
      invoiceDate: "07-09-2024",
      customer: "STU Corp",
      status: "Approved",
      totalAmount: 19000,
      receivedAmount: 19000,
      due: 0,
    },
    {
      id: 39,
      invoiceId: "2439UVWX39",
      invoiceDate: "08-09-2024",
      customer: "XYZ Global",
      status: "Rejected",
      totalAmount: 12000,
      receivedAmount: 0,
      due: 12000,
    },
    {
      id: 40,
      invoiceId: "2440YZAB40",
      invoiceDate: "09-09-2024",
      customer: "ABC Group",
      status: "Pending",
      totalAmount: 11000,
      receivedAmount: 3000,
      due: 8000,
    },
    {
      id: 41,
      invoiceId: "2441ABCD41",
      invoiceDate: "10-09-2024",
      customer: "XYZ Ltd",
      status: "Approved",
      totalAmount: 15500,
      receivedAmount: 15500,
      due: 0,
    },
    {
      id: 42,
      invoiceId: "2442EFGH42",
      invoiceDate: "11-09-2024",
      customer: "LMN Inc",
      status: "Pending",
      totalAmount: 14000,
      receivedAmount: 6000,
      due: 8000,
    },
    {
      id: 43,
      invoiceId: "2443IJKL43",
      invoiceDate: "12-09-2024",
      customer: "OPQ Ltd",
      status: "Rejected",
      totalAmount: 7500,
      receivedAmount: 0,
      due: 7500,
    },
    {
      id: 44,
      invoiceId: "2444MNOP44",
      invoiceDate: "13-09-2024",
      customer: "ABC Ltd",
      status: "Approved",
      totalAmount: 19000,
      receivedAmount: 19000,
      due: 0,
    },
    {
      id: 45,
      invoiceId: "2445QRST45",
      invoiceDate: "14-09-2024",
      customer: "UVW Corp",
      status: "Pending",
      totalAmount: 12500,
      receivedAmount: 5000,
      due: 7500,
    },
    {
      id: 46,
      invoiceId: "2446UVWX46",
      invoiceDate: "15-09-2024",
      customer: "DEF Ltd",
      status: "Approved",
      totalAmount: 17000,
      receivedAmount: 17000,
      due: 0,
    },
    {
      id: 47,
      invoiceId: "2447YZAB47",
      invoiceDate: "16-09-2024",
      customer: "JKL Inc",
      status: "Pending",
      totalAmount: 14000,
      receivedAmount: 4000,
      due: 10000,
    },
    {
      id: 48,
      invoiceId: "2448ABCD48",
      invoiceDate: "17-09-2024",
      customer: "RST Group",
      status: "Rejected",
      totalAmount: 9500,
      receivedAmount: 0,
      due: 9500,
    },
    {
      id: 49,
      invoiceId: "2449EFGH49",
      invoiceDate: "18-09-2024",
      customer: "XYZ Corp",
      status: "Approved",
      totalAmount: 21000,
      receivedAmount: 21000,
      due: 0,
    },
    {
      id: 50,
      invoiceId: "2450IJKL50",
      invoiceDate: "19-09-2024",
      customer: "GHI Ltd",
      status: "Pending",
      totalAmount: 16000,
      receivedAmount: 7000,
      due: 9000,
    },
  ];

  // Filtered invoices based on the selected filters
  const filteredInvoices = fetchInvoices.filter((invoice) => {
    return (
      (!fromDate || invoice.invoiceDate >= fromDate.value) &&
      (!toDate || invoice.invoiceDate <= toDate.value) &&
      (!customer || invoice.customer === customer.value) &&
      (!status || invoice.status === status.value)
    );
  });

  // Pagination logic
  const itemsPerPage = 10;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentInvoices = filteredInvoices.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleGoToPageChange = (e) => {
    const value = Math.max(1, Math.min(totalPages, Number(e.target.value)));
    setGoToPage(value);
  };

  const goToPageSubmit = () => {
    handlePageChange(goToPage);
  };

  return (
    <div className="text-black mx-4">
      {/* Breadcrumbs and Button */}
      <div className="flex justify-between items-center py-4">
        <div className="breadcrumbs text-sm">
          <ul className="flex space-x-2">
            <li>
              <IoHomeOutline className="text-blue-500" />
            </li>
            <li>
              <a href="#" className="text-blue-500">
                Reports
              </a>
            </li>
            <li>Invoice-Statistics</li>
          </ul>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white py-5 px-5">
        {/* Search */}
        <div>
          <div className="grid grid-cols-2 gap-4">
            {/* From Date */}
            <div className="pb-4">
              <p className="pb-2">
                From Date <span className="text-red-500">*</span>
              </p>
              <Select
                options={yearOptions}
                placeholder="Select From Date"
                className="w-full h-9"
                onChange={setFromDate}
                value={fromDate}
              />
            </div>

            {/* To Date */}
            <div className="pb-4">
              <p className="pb-2">
                To Date <span className="text-red-500">*</span>
              </p>
              <Select
                options={yearOptions}
                placeholder="Select To Date"
                className="w-full h-9"
                onChange={setToDate}
                value={toDate}
              />
            </div>

            {/* Customer */}
            <div className="pb-4">
              <p className="pb-2">
                Customer <span className="text-red-500">*</span>
              </p>
              <Select
                options={yearOptions}
                placeholder="Select Customer"
                className="w-full h-9"
                onChange={setCustomer}
                value={customer}
              />
            </div>

            {/* Invoice Status */}
            <div className="pb-4">
              <p className="pb-2">
                Invoice Status <span className="text-red-500">*</span>
              </p>
              <Select
                options={yearOptions}
                placeholder="Select Invoice Status"
                className="w-full h-9"
                onChange={setStatus}
                value={status}
              />
            </div>
          </div>
          {/* Search Button */}
          <div className="flex justify-center">
            <button className="bg-black hover:bg-gray-700 text-white font-semibold px-5 py-2">
              Search
            </button>
          </div>
        </div>

        {/* Lists */}
        <div className="pt-5">
          {/* Search Box */}
          <div className="py-2 px-5 flex justify-end">
            <button className="border-2 border-blue-500 text-blue-500 font-semibold px-5 py-4 rounded-lg hover:bg-blue-500 hover:text-white">
              Download Report
            </button>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-gray-300 text-black">
                  <th>Invoice ID</th>
                  <th>Invoice Date</th>
                  <th>Customer Name</th>
                  <th>Last Status</th>
                  <th>Total Amount</th>
                  <th>Received Amount</th>
                  <th>Total Due</th>
                </tr>
              </thead>
              <tbody>
                {currentInvoices.length > 0 ? (
                  currentInvoices.map((invoice) => (
                    <tr key={invoice.id}>
                      <th>{invoice.invoiceId}</th>
                      <td>{invoice.invoiceDate}</td>
                      <td>{invoice.customer}</td>
                      <td>{invoice.status}</td>
                      <td>{invoice.totalAmount}</td>
                      <td>{invoice.receivedAmount}</td>
                      <td>{invoice.due}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7">No invoices found</td>
                  </tr>
                )}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4">
              {/* Go To section */}
              <div className="flex items-center">
                <p>Go</p>
                <input
                  type="number"
                  value={goToPage}
                  onChange={handleGoToPageChange}
                  min={1}
                  max={totalPages}
                  onBlur={goToPageSubmit}
                  onKeyPress={(e) => e.key === "Enter" && goToPageSubmit()}
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
                {Array.from({ length: totalPages }, (_, i) => i + 1)
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
    </div>
  );
};

export default ReportsInvoiceStatistics;
