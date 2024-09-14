import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AddNewProductMapping from "./AddNewProductMapping/AddNewProductMapping";

const CustomerProductMapping = () => {
  // Sample data array
  const data = [
    {
      templateName: "PCI DSS Security Compliance Fee",
      productName:
        "Card Industry Data Security Standard (PCI DSS) Certificate Compliance/Sharing Fee For The Year 2023",
      customerName: "Dhaka Bank PLC",
    },
    {
      templateName: "ISO 27001 Certification",
      productName:
        "ISO 27001 Information Security Management System (ISMS) Certification Fee",
      customerName: "Standard Chartered Bank",
    },
    {
      templateName: "GDPR Compliance Audit",
      productName:
        "General Data Protection Regulation (GDPR) Compliance Audit Fee",
      customerName: "HSBC",
    },
    {
      templateName: "SOC 2 Type II Report",
      productName: "SOC 2 Type II Report for Cloud Services",
      customerName: "Barclays",
    },
    {
      templateName: "HIPAA Compliance",
      productName:
        "Health Insurance Portability and Accountability Act (HIPAA) Compliance Fee",
      customerName: "Citi Bank",
    },
    {
      templateName: "FISMA Compliance",
      productName:
        "Federal Information Security Management Act (FISMA) Compliance Fee",
      customerName: "Wells Fargo",
    },
    {
      templateName: "PCI DSS Risk Assessment",
      productName: "PCI DSS Risk Assessment and Gap Analysis Fee",
      customerName: "JP Morgan Chase",
    },
    {
      templateName: "ISO 9001 Certification",
      productName: "ISO 9001 Quality Management System Certification Fee",
      customerName: "Goldman Sachs",
    },
    {
      templateName: "Cybersecurity Assessment",
      productName: "Comprehensive Cybersecurity Assessment Fee",
      customerName: "UBS",
    },
    {
      templateName: "Data Protection Impact Assessment",
      productName: "Data Protection Impact Assessment (DPIA) Fee",
      customerName: "Morgan Stanley",
    },
    {
      templateName: "NIST Compliance",
      productName:
        "National Institute of Standards and Technology (NIST) Compliance Fee",
      customerName: "Deutsche Bank",
    },
    {
      templateName: "ITIL Certification",
      productName: "IT Infrastructure Library (ITIL) Certification Fee",
      customerName: "Credit Suisse",
    },
    {
      templateName: "ISO 22301 Certification",
      productName: "ISO 22301 Business Continuity Management Certification Fee",
      customerName: "American Express",
    },
    {
      templateName: "SOC 1 Report",
      productName: "SOC 1 Type I and Type II Report for Financial Services",
      customerName: "Citibank",
    },
    {
      templateName: "FATCA Compliance",
      productName: "Foreign Account Tax Compliance Act (FATCA) Compliance Fee",
      customerName: "Barclays",
    },
    {
      templateName: "ISO 14001 Certification",
      productName: "ISO 14001 Environmental Management Certification Fee",
      customerName: "HSBC",
    },
    {
      templateName: "CMMC Certification",
      productName: "Cybersecurity Maturity Model Certification (CMMC) Fee",
      customerName: "Lockheed Martin",
    },
    {
      templateName: "GxP Compliance",
      productName: "Good Practice (GxP) Compliance Fee for Pharmaceuticals",
      customerName: "Pfizer",
    },
    {
      templateName: "ISO 50001 Certification",
      productName: "ISO 50001 Energy Management System Certification Fee",
      customerName: "General Electric",
    },
    {
      templateName: "BRC Certification",
      productName: "BRC Global Standard Certification Fee",
      customerName: "Nestle",
    },
    {
      templateName: "PCI DSS Penetration Test",
      productName: "PCI DSS Penetration Testing Fee",
      customerName: "Visa",
    },
    {
      templateName: "HIPAA Risk Assessment",
      productName: "HIPAA Risk Assessment and Compliance Fee",
      customerName: "UnitedHealthcare",
    },
    {
      templateName: "SOC 3 Report",
      productName: "SOC 3 Trust Services Report",
      customerName: "Deloitte",
    },
    {
      templateName: "ISO 27018 Certification",
      productName: "ISO 27018 Privacy Protection Certification Fee",
      customerName: "Amazon Web Services",
    },
    {
      templateName: "NIST SP 800-53 Compliance",
      productName: "NIST SP 800-53 Compliance Fee for Federal Agencies",
      customerName: "NASA",
    },
    {
      templateName: "ISO 28000 Certification",
      productName: "ISO 28000 Supply Chain Security Certification Fee",
      customerName: "FedEx",
    },
    {
      templateName: "CE Marking",
      productName: "CE Marking for Product Compliance in Europe",
      customerName: "Philips",
    },
    {
      templateName: "ISO 17025 Certification",
      productName: "ISO 17025 Laboratory Accreditation Certification Fee",
      customerName: "SGS",
    },
    {
      templateName: "GDPR Data Protection Officer",
      productName: "GDPR Data Protection Officer (DPO) Services Fee",
      customerName: "Sodexo",
    },
    {
      templateName: "SOX Compliance",
      productName: "Sarbanes-Oxley (SOX) Compliance Fee",
      customerName: "KPMG",
    },
    {
      templateName: "ISO 45001 Certification",
      productName: "ISO 45001 Occupational Health and Safety Certification Fee",
      customerName: "Bosch",
    },
    {
      templateName: "ISO 31000 Risk Management",
      productName: "ISO 31000 Risk Management Certification Fee",
      customerName: "Johnson & Johnson",
    },
    {
      templateName: "SAFe Certification",
      productName: "SAFe Agile Framework Certification Fee",
      customerName: "IBM",
    },
    {
      templateName: "ISO 9001 Quality Management",
      productName: "ISO 9001 Quality Management System Certification Fee",
      customerName: "Intel",
    },
    {
      templateName: "ISO 13485 Certification",
      productName: "ISO 13485 Medical Devices Certification Fee",
      customerName: "Medtronic",
    },
    {
      templateName: "ITGC Compliance",
      productName: "IT General Controls (ITGC) Compliance Fee",
      customerName: "Oracle",
    },
    {
      templateName: "SANS Security Training",
      productName: "SANS Security Training and Certification Fee",
      customerName: "Cisco",
    },
    {
      templateName: "FISMA Risk Management",
      productName: "FISMA Risk Management and Compliance Fee",
      customerName: "IBM",
    },
    {
      templateName: "ISO 27001 Internal Audit",
      productName: "ISO 27001 Internal Audit Services Fee",
      customerName: "Siemens",
    },
    {
      templateName: "ISO 37001 Anti-Bribery",
      productName: "ISO 37001 Anti-Bribery Management System Certification Fee",
      customerName: "Accenture",
    },
    {
      templateName: "CISO Services",
      productName: "Chief Information Security Officer (CISO) Services Fee",
      customerName: "EY",
    },
    {
      templateName: "ITIL Service Management",
      productName: "ITIL Service Management Certification Fee",
      customerName: "ServiceNow",
    },
    {
      templateName: "ISO 22316 Certification",
      productName: "ISO 22316 Organizational Resilience Certification Fee",
      customerName: "Schneider Electric",
    },
    {
      templateName: "VAPT Services",
      productName:
        "Vulnerability Assessment and Penetration Testing (VAPT) Services Fee",
      customerName: "Atos",
    },
    {
      templateName: "SOX IT Controls",
      productName: "SOX IT Controls Certification Fee",
      customerName: "Deloitte",
    },
    {
      templateName: "ISO 37001 Anti-Bribery",
      productName: "ISO 37001 Anti-Bribery Certification Fee",
      customerName: "Ernst & Young",
    },
    {
      templateName: "Cloud Security Assessment",
      productName: "Cloud Security Assessment Fee",
      customerName: "Google Cloud",
    },
    {
      templateName: "ISO 27001 Gap Analysis",
      productName: "ISO 27001 Gap Analysis Services Fee",
      customerName: "Microsoft",
    },
    {
      templateName: "ISO 28000 Supply Chain",
      productName: "ISO 28000 Supply Chain Security Certification Fee",
      customerName: "UPS",
    },
    {
      templateName: "ISO 50001 Energy Management",
      productName: "ISO 50001 Energy Management Certification Fee",
      customerName: "Sony",
    },
    {
      templateName: "ISO 45001 Occupational Health",
      productName: "ISO 45001 Occupational Health and Safety Certification Fee",
      customerName: "3M",
    },
  ];

  const itemsPerPage = 10

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const [goToPage, setGoToPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Calculate visible data for the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
      setGoToPage(pageNumber);
    }
  };

  const handleGoToPageChange = (e) => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      setGoToPage(value);
    }
  };

  const goToPageSubmit = () => {
    handlePageChange(goToPage);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

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
              <a className="text-blue-500">Customer</a>
            </li>
            <li>Product-Mapping</li>
          </ul>
        </div>
        <button
          className="btn ml-2 text-white bg-black hover:bg-gray-800"
          onClick={() =>
            document.getElementById("Add_New_Mapping_Product").showModal()
          }
        >
          + Mapping Product
        </button>
      </div>

      {/* List */}
      <div className="bg-white py-5">
        {/* Search Box */}
        <div className="py-2 px-5 flex justify-end">
          <input
            type="text"
            placeholder="Search ..."
            className="input input-bordered bg-white w-52"
          />
        </div>
        {/* Table */}
        <div className="px-5">
          <div className="overflow-x-auto">
            <table className="table w-full">
              {/* Table Head */}
              <thead>
                <tr className="bg-gray-300 text-black">
                  <th>Template Name</th>
                  <th>Product Name</th>
                  <th>Customer Name</th>
                  <th>Action</th>
                </tr>
              </thead>
              {/* Table Body */}
              <tbody>
                {currentItems.map((item, index) => (
                  <tr key={index} className="border-b border-gray-300">
                    <td>{item.templateName}</td>
                    <td>{item.productName}</td>
                    <td>{item.customerName}</td>
                    <td>
                      <CiMenuKebab />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
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

      {/* Modal */}
      <dialog id="Add_New_Mapping_Product" className="modal">
        <AddNewProductMapping />
      </dialog>
    </div>
  );
};

export default CustomerProductMapping;
