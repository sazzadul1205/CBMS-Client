import { useState } from "react";
import { CiMenuKebab } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AddNewCustomer from "./AddNewCustomer/AddNewCustomer";

// Mock Data
const customerData = [
  {
    code: "UBPLC",
    name: "Uttara Bank PLC",
    address: "90, Motijheel- C/A, Dhaka-1000",
    PersonalInformation: [
      {
        Name: "John Doe",
        Email: "john.doe@uttarabank.com",
        Designation: "Branch Manager",
        Cell1: "+880 1234 567890",
        Cell2: "+880 1234 567891",
      },
      {
        Name: "Jane Smith",
        Email: "jane.smith@uttarabank.com",
        Designation: "Assistant Manager",
        Cell1: "+880 1234 567892",
        Cell2: "+880 1234 567893",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Branch Operations Update",
        NoteDetails:
          "Ensure all branch operations comply with the new regulations starting next month.",
        Position: "Top",
        Sequence: "1",
        TemplateName: "OperationsTemplate",
      },
      {
        NoteName: "Customer Feedback Review",
        NoteDetails:
          "Review customer feedback from the last quarter and plan improvements.",
        Position: "Bottom",
        Sequence: "2",
        TemplateName: "FeedbackTemplate",
      },
    ],
  },
  {
    code: "ABCCL",
    name: "ABC Corporation Limited",
    address: "45, Green Road, Dhaka-1212",
    PersonalInformation: [
      {
        Name: "Michael Johnson",
        Email: "michael.johnson@abccorp.com",
        Designation: "CEO",
        Cell1: "+880 2345 678901",
        Cell2: "+880 2345 678902",
      },
      {
        Name: "Emily Davis",
        Email: "emily.davis@abccorp.com",
        Designation: "Chief Financial Officer",
        Cell1: "+880 2345 678903",
        Cell2: "+880 2345 678904",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Financial Review Meeting",
        NoteDetails:
          "Prepare for the upcoming financial review meeting on July 10th.",
        Position: "Center",
        Sequence: "1",
        TemplateName: "FinanceMeetingTemplate",
      },
      {
        NoteName: "Budget Approval",
        NoteDetails:
          "Submit the revised budget proposal by the end of this week.",
        Position: "Top",
        Sequence: "2",
        TemplateName: "BudgetTemplate",
      },
    ],
  },
  {
    code: "XYZLT",
    name: "XYZ Ltd.",
    address: "88, Business District, Dhaka-1100",
    PersonalInformation: [
      {
        Name: "Sarah Wilson",
        Email: "sarah.wilson@xyzltd.com",
        Designation: "Marketing Director",
        Cell1: "+880 3456 789012",
        Cell2: "+880 3456 789013",
      },
      {
        Name: "David Brown",
        Email: "david.brown@xyzltd.com",
        Designation: "Sales Manager",
        Cell1: "+880 3456 789014",
        Cell2: "+880 3456 789015",
      },
    ],
    NoteInformation: [
      {
        NoteName: "New Marketing Campaign",
        NoteDetails:
          "Launch the new marketing campaign for the upcoming product line.",
        Position: "Bottom",
        Sequence: "1",
        TemplateName: "MarketingCampaignTemplate",
      },
      {
        NoteName: "Sales Targets Review",
        NoteDetails: "Review the sales targets and update strategies for Q4.",
        Position: "Center",
        Sequence: "2",
        TemplateName: "SalesReviewTemplate",
      },
    ],
  },
  {
    code: "LMNIT",
    name: "LMN Industries",
    address: "22, Industrial Area, Dhaka-1200",
    PersonalInformation: [
      {
        Name: "Robert Lee",
        Email: "robert.lee@lmnindustries.com",
        Designation: "Production Head",
        Cell1: "+880 4567 890123",
        Cell2: "+880 4567 890124",
      },
      {
        Name: "Linda Clark",
        Email: "linda.clark@lmnindustries.com",
        Designation: "Operations Manager",
        Cell1: "+880 4567 890125",
        Cell2: "+880 4567 890126",
      },
      {
        Name: "Tom Harris",
        Email: "tom.harris@lmnindustries.com",
        Designation: "Quality Control Specialist",
        Cell1: "+880 4567 890127",
        Cell2: "+880 4567 890128",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Production Line Maintenance",
        NoteDetails:
          "Scheduled maintenance for the production line on August 5th.",
        Position: "Top",
        Sequence: "1",
        TemplateName: "MaintenanceTemplate",
      },
      {
        NoteName: "Supplier Meetings",
        NoteDetails:
          "Meet with suppliers to negotiate new contracts for the next quarter.",
        Position: "Bottom",
        Sequence: "2",
        TemplateName: "SupplierTemplate",
      },
    ],
  },
  {
    code: "RSTCO",
    name: "RST Company",
    address: "77, Tech Park, Dhaka-1300",
    PersonalInformation: [
      {
        Name: "Jessica Adams",
        Email: "jessica.adams@rstcompany.com",
        Designation: "HR Manager",
        Cell1: "+880 5678 901234",
        Cell2: "+880 5678 901235",
      },
      {
        Name: "Paul Martinez",
        Email: "paul.martinez@rstcompany.com",
        Designation: "IT Director",
        Cell1: "+880 5678 901236",
        Cell2: "+880 5678 901237",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Employee Training",
        NoteDetails:
          "Schedule and organize employee training sessions for new software.",
        Position: "Center",
        Sequence: "1",
        TemplateName: "TrainingTemplate",
      },
      {
        NoteName: "IT System Upgrade",
        NoteDetails:
          "Upgrade IT systems and software by the end of this month.",
        Position: "Top",
        Sequence: "2",
        TemplateName: "ITUpgradeTemplate",
      },
    ],
  },
  {
    code: "PQRHL",
    name: "PQR Holdings Ltd.",
    address: "33, Lake Road, Dhaka-1400",
    PersonalInformation: [
      {
        Name: "Alice Green",
        Email: "alice.green@pqrholdings.com",
        Designation: "Chief Operating Officer",
        Cell1: "+880 6789 012345",
        Cell2: "+880 6789 012346",
      },
      {
        Name: "Bob White",
        Email: "bob.white@pqrholdings.com",
        Designation: "Chief Marketing Officer",
        Cell1: "+880 6789 012347",
        Cell2: "+880 6789 012348",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Operational Efficiency Review",
        NoteDetails:
          "Review the operational efficiency and suggest improvements.",
        Position: "Top",
        Sequence: "1",
        TemplateName: "EfficiencyTemplate",
      },
      {
        NoteName: "Marketing Strategy Update",
        NoteDetails:
          "Update the marketing strategy for the upcoming product launch.",
        Position: "Bottom",
        Sequence: "2",
        TemplateName: "MarketingStrategyTemplate",
      },
    ],
  },
  {
    code: "STUVW",
    name: "STU Widgets Inc.",
    address: "99, Tech Valley, Dhaka-1500",
    PersonalInformation: [
      {
        Name: "Laura Scott",
        Email: "laura.scott@stuwidgets.com",
        Designation: "Production Manager",
        Cell1: "+880 7890 123456",
        Cell2: "+880 7890 123457",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Product Development Meeting",
        NoteDetails:
          "Prepare for the product development meeting scheduled for September 12th.",
        Position: "Center",
        Sequence: "1",
        TemplateName: "ProductDevTemplate",
      },
    ],
  },
  {
    code: "GHIJK",
    name: "GHI Tech Solutions",
    address: "11, Innovation Park, Dhaka-1600",
    PersonalInformation: [
      {
        Name: "Eve Turner",
        Email: "eve.turner@ghitech.com",
        Designation: "Technical Lead",
        Cell1: "+880 8901 234567",
        Cell2: "+880 8901 234568",
      },
      {
        Name: "Frank Lewis",
        Email: "frank.lewis@ghitech.com",
        Designation: "Software Engineer",
        Cell1: "+880 8901 234569",
        Cell2: "+880 8901 234570",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Project Deadline",
        NoteDetails:
          "Ensure the project deadline for the new software is met by the end of the month.",
        Position: "Top",
        Sequence: "1",
        TemplateName: "ProjectDeadlineTemplate",
      },
      {
        NoteName: "Client Feedback",
        NoteDetails: "Compile feedback from clients and prepare a report.",
        Position: "Bottom",
        Sequence: "2",
        TemplateName: "ClientFeedbackTemplate",
      },
    ],
  },
  {
    code: "MNOQP",
    name: "MNO Pharmaceuticals",
    address: "56, Health Street, Dhaka-1700",
    PersonalInformation: [
      {
        Name: "Greg Harris",
        Email: "greg.harris@mnopharma.com",
        Designation: "R&D Head",
        Cell1: "+880 9012 345678",
        Cell2: "+880 9012 345679",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Research Progress",
        NoteDetails: "Review the progress of ongoing research projects.",
        Position: "Center",
        Sequence: "1",
        TemplateName: "ResearchProgressTemplate",
      },
    ],
  },
  {
    code: "JKLIM",
    name: "JKL International",
    address: "89, Global Plaza, Dhaka-1800",
    PersonalInformation: [
      {
        Name: "Nina Patel",
        Email: "nina.patel@jklinternational.com",
        Designation: "Regional Manager",
        Cell1: "+880 0123 456789",
        Cell2: "+880 0123 456790",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Regional Sales Targets",
        NoteDetails: "Set and review sales targets for the regional team.",
        Position: "Top",
        Sequence: "1",
        TemplateName: "SalesTargetsTemplate",
      },
      {
        NoteName: "Market Analysis",
        NoteDetails: "Analyze current market trends and prepare a report.",
        Position: "Bottom",
        Sequence: "2",
        TemplateName: "MarketAnalysisTemplate",
      },
    ],
  },
  {
    code: "UVWXZ",
    name: "UVW Technologies",
    address: "12, Techno Hub, Dhaka-1900",
    PersonalInformation: [
      {
        Name: "Oliver Scott",
        Email: "oliver.scott@uvwtech.com",
        Designation: "Product Manager",
        Cell1: "+880 1234 567891",
        Cell2: "+880 1234 567892",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Product Launch",
        NoteDetails:
          "Coordinate the product launch event scheduled for October 20th.",
        Position: "Center",
        Sequence: "1",
        TemplateName: "ProductLaunchTemplate",
      },
    ],
  },
  {
    code: "ABDEF",
    name: "ABC Engineering Ltd.",
    address: "78, Engineering Lane, Dhaka-2000",
    PersonalInformation: [
      {
        Name: "Megan Lee",
        Email: "megan.lee@abcengineering.com",
        Designation: "Senior Engineer",
        Cell1: "+880 2345 678910",
        Cell2: "+880 2345 678911",
      },
      {
        Name: "James Wilson",
        Email: "james.wilson@abcengineering.com",
        Designation: "Project Coordinator",
        Cell1: "+880 2345 678912",
        Cell2: "+880 2345 678913",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Project Deadline",
        NoteDetails:
          "Ensure all engineering projects meet the deadlines set for this month.",
        Position: "Top",
        Sequence: "1",
        TemplateName: "EngineeringDeadlineTemplate",
      },
      {
        NoteName: "Client Meeting",
        NoteDetails:
          "Prepare for the client meeting on the 15th to discuss project updates.",
        Position: "Bottom",
        Sequence: "2",
        TemplateName: "ClientMeetingTemplate",
      },
    ],
  },
  {
    code: "CDEFG",
    name: "CDE Enterprises",
    address: "44, Trade Center, Dhaka-2100",
    PersonalInformation: [
      {
        Name: "Natalie Brown",
        Email: "natalie.brown@cdeenterprises.com",
        Designation: "Sales Director",
        Cell1: "+880 3456 789017",
        Cell2: "+880 3456 789018",
      },
      {
        Name: "Mark Davis",
        Email: "mark.davis@cdeenterprises.com",
        Designation: "Marketing Specialist",
        Cell1: "+880 3456 789019",
        Cell2: "+880 3456 789020",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Sales Report Review",
        NoteDetails:
          "Review the sales report and prepare for the monthly sales meeting.",
        Position: "Center",
        Sequence: "1",
        TemplateName: "SalesReportTemplate",
      },
    ],
  },
  {
    code: "FGHIJ",
    name: "FGH Industries",
    address: "77, Production Road, Dhaka-2200",
    PersonalInformation: [
      {
        Name: "Oscar Martinez",
        Email: "oscar.martinez@fghindustries.com",
        Designation: "Manufacturing Head",
        Cell1: "+880 4567 890129",
        Cell2: "+880 4567 890130",
      },
      {
        Name: "Sophia Taylor",
        Email: "sophia.taylor@fghindustries.com",
        Designation: "Logistics Manager",
        Cell1: "+880 4567 890131",
        Cell2: "+880 4567 890132",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Manufacturing Update",
        NoteDetails: "Update on the manufacturing progress and issues.",
        Position: "Top",
        Sequence: "1",
        TemplateName: "ManufacturingUpdateTemplate",
      },
    ],
  },
  {
    code: "HIJKL",
    name: "HIJ Services Ltd.",
    address: "65, Service Road, Dhaka-2300",
    PersonalInformation: [
      {
        Name: "Tina Williams",
        Email: "tina.williams@hijservices.com",
        Designation: "Customer Service Manager",
        Cell1: "+880 5678 901238",
        Cell2: "+880 5678 901239",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Customer Service Training",
        NoteDetails: "Organize customer service training for new hires.",
        Position: "Center",
        Sequence: "1",
        TemplateName: "ServiceTrainingTemplate",
      },
    ],
  },
  {
    code: "JKLMN",
    name: "JKLM Holdings",
    address: "34, Investment Park, Dhaka-2400",
    PersonalInformation: [
      {
        Name: "Hannah Lewis",
        Email: "hannah.lewis@jklmholdings.com",
        Designation: "Investment Manager",
        Cell1: "+880 6789 012350",
        Cell2: "+880 6789 012351",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Investment Strategy",
        NoteDetails:
          "Review and update the investment strategy for the upcoming fiscal year.",
        Position: "Top",
        Sequence: "1",
        TemplateName: "InvestmentStrategyTemplate",
      },
    ],
  },
  {
    code: "NOPQR",
    name: "NOP Retailers",
    address: "21, Commerce Street, Dhaka-2500",
    PersonalInformation: [
      {
        Name: "Ethan Adams",
        Email: "ethan.adams@nopretailers.com",
        Designation: "Retail Manager",
        Cell1: "+880 7890 123458",
        Cell2: "+880 7890 123459",
      },
      {
        Name: "Olivia Walker",
        Email: "olivia.walker@nopretailers.com",
        Designation: "Customer Experience Lead",
        Cell1: "+880 7890 123460",
        Cell2: "+880 7890 123461",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Retail Performance Review",
        NoteDetails: "Conduct a performance review of all retail outlets.",
        Position: "Center",
        Sequence: "1",
        TemplateName: "RetailPerformanceTemplate",
      },
      {
        NoteName: "Customer Experience Improvement",
        NoteDetails: "Develop strategies to enhance customer experience.",
        Position: "Bottom",
        Sequence: "2",
        TemplateName: "CustomerExperienceTemplate",
      },
    ],
  },
  {
    code: "QRSTU",
    name: "QRST Construction Ltd.",
    address: "90, Building Avenue, Dhaka-2600",
    PersonalInformation: [
      {
        Name: "Patrick Harris",
        Email: "patrick.harris@qrstconstruction.com",
        Designation: "Project Manager",
        Cell1: "+880 8901 234567",
        Cell2: "+880 8901 234568",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Safety Compliance",
        NoteDetails:
          "Ensure all construction sites comply with safety regulations.",
        Position: "Bottom",
        Sequence: "2",
        TemplateName: "SafetyComplianceTemplate",
      },
    ],
  },
  {
    code: "UVWXY",
    name: "UVW Manufacturing",
    address: "47, Production Street, Dhaka-2700",
    PersonalInformation: [
      {
        Name: "Isabella Turner",
        Email: "isabella.turner@uvwmanufacturing.com",
        Designation: "Operations Manager",
        Cell1: "+880 9012 345670",
        Cell2: "+880 9012 345671",
      },
      {
        Name: "Liam Brown",
        Email: "liam.brown@uvwmanufacturing.com",
        Designation: "Quality Control Specialist",
        Cell1: "+880 9012 345672",
        Cell2: "+880 9012 345673",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Production Efficiency",
        NoteDetails: "Review and enhance production efficiency metrics.",
        Position: "Center",
        Sequence: "1",
        TemplateName: "ProductionEfficiencyTemplate",
      },
      {
        NoteName: "Quality Review",
        NoteDetails: "Conduct a review of the quality control processes.",
        Position: "Bottom",
        Sequence: "2",
        TemplateName: "QualityReviewTemplate",
      },
    ],
  },
  {
    code: "XYZAB",
    name: "XYZ Solutions",
    address: "53, Innovation Hub, Dhaka-2800",
    PersonalInformation: [
      {
        Name: "Daniel Scott",
        Email: "daniel.scott@xyzsolutions.com",
        Designation: "Consulting Director",
        Cell1: "+880 0123 456791",
        Cell2: "+880 0123 456792",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Consulting Projects",
        NoteDetails: "Review and prioritize ongoing consulting projects.",
        Position: "Top",
        Sequence: "1",
        TemplateName: "ConsultingProjectsTemplate",
      },
    ],
  },
  {
    code: "CDEFG",
    name: "CDE Enterprises",
    address: "44, Trade Center, Dhaka-2900",
    PersonalInformation: [
      {
        Name: "Natalie Brown",
        Email: "natalie.brown@cdeenterprises.com",
        Designation: "Sales Director",
        Cell1: "+880 3456 789021",
        Cell2: "+880 3456 789022",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Sales Report Review",
        NoteDetails: "Prepare and review the monthly sales report.",
        Position: "Center",
        Sequence: "1",
        TemplateName: "SalesReportTemplate",
      },
      {
        NoteName: "New Campaign Strategy",
        NoteDetails: "Develop strategy for the upcoming marketing campaign.",
        Position: "Bottom",
        Sequence: "2",
        TemplateName: "CampaignStrategyTemplate",
      },
    ],
  },
  {
    code: "HIJKL",
    name: "HIJ Services Ltd.",
    address: "65, Service Road, Dhaka-3000",
    PersonalInformation: [
      {
        Name: "Tina Williams",
        Email: "tina.williams@hijservices.com",
        Designation: "Customer Service Manager",
        Cell1: "+880 5678 901242",
        Cell2: "+880 5678 901243",
      },
      {
        Name: "Luke Anderson",
        Email: "luke.anderson@hijservices.com",
        Designation: "Support Specialist",
        Cell1: "+880 5678 901244",
        Cell2: "+880 5678 901245",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Customer Service Improvement",
        NoteDetails: "Implement new strategies for improving customer service.",
        Position: "Center",
        Sequence: "1",
        TemplateName: "ServiceImprovementTemplate",
      },
      {
        NoteName: "System Upgrade",
        NoteDetails: "Upgrade the system to enhance support capabilities.",
        Position: "Bottom",
        Sequence: "2",
        TemplateName: "SupportUpgradeTemplate",
      },
    ],
  },
  {
    code: "JKLMN",
    name: "JKLM Holdings",
    address: "34, Investment Park, Dhaka-3100",
    PersonalInformation: [
      {
        Name: "Hannah Lewis",
        Email: "hannah.lewis@jklmholdings.com",
        Designation: "Investment Manager",
        Cell1: "+880 6789 012352",
        Cell2: "+880 6789 012353",
      },
      {
        Name: "Aaron Mitchell",
        Email: "aaron.mitchell@jklmholdings.com",
        Designation: "Financial Analyst",
        Cell1: "+880 6789 012354",
        Cell2: "+880 6789 012355",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Investment Opportunities",
        NoteDetails:
          "Explore new investment opportunities for the upcoming quarter.",
        Position: "Top",
        Sequence: "1",
        TemplateName: "InvestmentOpportunitiesTemplate",
      },
      {
        NoteName: "Financial Review",
        NoteDetails: "Conduct a financial review and prepare a summary report.",
        Position: "Bottom",
        Sequence: "2",
        TemplateName: "FinancialReviewTemplate",
      },
    ],
  },
  {
    code: "NOPQR",
    name: "NOP Retailers",
    address: "21, Commerce Street, Dhaka-3200",
    PersonalInformation: [
      {
        Name: "Ethan Adams",
        Email: "ethan.adams@nopretailers.com",
        Designation: "Retail Manager",
        Cell1: "+880 7890 123462",
        Cell2: "+880 7890 123463",
      },
    ],
    NoteInformation: [
      {
        NoteName: "Experience Enhancement",
        NoteDetails:
          "Develop initiatives to enhance overall customer experience.",
        Position: "Bottom",
        Sequence: "2",
        TemplateName: "ExperienceEnhancementTemplate",
      },
    ],
  },
];

const itemsPerPage = 10;

const CustomerList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(customerData.length / itemsPerPage);

  // Handle page change
  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle Go to page input change
  const [goToPage, setGoToPage] = useState("");
  const handleGoToPageChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      setGoToPage("");
    } else {
      const page = Number(value);
      if (page >= 1 && page <= totalPages) {
        setGoToPage(page);
      }
    }
  };

  // Go to the page when user presses enter or leaves the input box
  const goToPageSubmit = () => {
    if (goToPage >= 1 && goToPage <= totalPages) {
      setCurrentPage(goToPage);
    }
  };

  // Calculate the customer data for the current page
  const currentData = customerData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Create pagination numbers
  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

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
              <a className="text-blue-500">Customer</a>
            </li>
            <li>Customer-List</li>
          </ul>
        </div>
        <button
          className="btn ml-2 text-white"
          onClick={() =>
            document.getElementById("Add_New_Customer").showModal()
          }
        >
          + Create Customer
        </button>
      </div>

      {/* List */}
      <div className="bg-white py-5">
        {/* Search Box */}
        <div className="py-2 px-5 justify-end flex">
          <input
            type="text"
            placeholder="Search ..."
            className="input input-bordered bg-white w-52"
          />
        </div>
        {/* Table */}
        <div className="px-5">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="bg-gray-400 text-black">
                  <th>Code</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Map through the current page's data */}
                {currentData.map((customer, index) => (
                  <tr key={index}>
                    <th>{customer.code}</th>
                    <td>{customer.name}</td>
                    <td>{customer.address}</td>
                    <td>
                      <CiMenuKebab />
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

      <dialog id="Add_New_Customer" className="modal">
        <AddNewCustomer />
      </dialog>
    </div>
  );
};

export default CustomerList;
