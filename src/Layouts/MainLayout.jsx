import { useEffect, useState } from "react";
import { NavLink, Outlet, useNavigate, useLocation } from "react-router-dom";
import logo1 from "../assets/Logo-1.png";
import logo2 from "../assets/Logo-2.png";
import { FaArrowLeft, FaChevronDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import { FaFileInvoice } from "react-icons/fa";
import { IoReceiptOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { FaSquarePollVertical } from "react-icons/fa6";
import { FiSettings } from "react-icons/fi";
import { MdOutlineSecurity } from "react-icons/md";
import { FaRegBell } from "react-icons/fa";

const MainLayout = () => {
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const [openSubMenu, setOpenSubMenu] = useState("");

  const toggleSubMenu = (label) => {
    setOpenSubMenu((prev) => (prev === label ? "" : label));
  };

  const navItems = [
    {
      label: "Dashboard",
      link: "/dashboard",
      icon: <IoHomeOutline />,
    },
    {
      label: "Invoices",
      link: "#",
      icon: <FaFileInvoice />,
      subMenu: [
        { label: "Invoice List", link: "/invoices-list" },
        { label: "Approve Invoice", link: "/invoices-approve" },
        { label: "Submit Invoice", link: "/invoices-submit" },
        { label: "Receive Invoice", link: "/invoices-receive" },
        { label: "Invoice Status Update", link: "/invoices-status-update" },
        { label: "Bulk Invoice Create", link: "/invoices-bulk-create" },
        { label: "Invoice Format", link: "/invoices-format" },
      ],
    },
    {
      label: "Receivable",
      link: "#",
      icon: <IoReceiptOutline />,
      subMenu: [
        { label: "Payment Received", link: "/receivable-payment-received" },
      ],
    },
    {
      label: "Customer",
      link: "#",
      icon: <CiUser />,
      subMenu: [
        { label: "Customer List", link: "/customer-list" },
        { label: "Product Mapping", link: "/customer-product-mapping" },
      ],
    },
    {
      label: "Reports",
      link: "#",
      icon: <FaSquarePollVertical />,
      subMenu: [
        { label: "Invoice Statistics", link: "/reports-invoice-statistics" },
        { label: "Product Sales", link: "/reports-product-sales" },
        {
          label: "Invoice Statistics Summary",
          link: "/reports-invoice-summary",
        },
        { label: "Customer List", link: "/reports-customer-list" },
      ],
    },
    {
      label: "Setup",
      link: "#",
      icon: <FiSettings />,
      subMenu: [
        { label: "Bank Account", link: "/setup-bank-account" },
        { label: "Designation", link: "/setup-designation" },
        { label: "Receive Mode", link: "/setup-receive-mode" },
        { label: "Product", link: "/setup-product" },
        { label: "Product Type", link: "/setup-product-type" },
        { label: "Exchange Rate", link: "/setup-exchange-rate" },
      ],
    },
    {
      label: "Security",
      link: "#",
      icon: <MdOutlineSecurity />,
      subMenu: [
        { label: "User Create", link: "/security-user-create" },
        { label: "Module", link: "/security-module" },
        { label: "User Role", link: "/security-user-role" },
        { label: "Assign Privilege", link: "/security-assign-privilege" },
        { label: "Role Management", link: "/security-role-management" },
      ],
    },
  ];

  // Only navigate to dashboard if the user is on the root path or no other path
  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/dashboard");
    }
  }, [navigate, location]);

  return (
    <div className="bg-[#f1f4f9]">
      <div className="flex bg-[#f1f4f9]">
        <div className="w-72 h-screen pb-10 fixed bg-white border-r">
          {/* Logos and arrow */}
          <div className=" px-4 py-5 flex items-center justify-between text-black border-b mx-2">
            <div className="flex items-center">
              <img src={logo1} alt="Logo 1" className="w-10 mr-2" />
              <img src={logo2} alt="Logo 2" className="w-10 mr-2" />
            </div>
            <FaArrowLeft />
          </div>

          {/* Sidebar menu */}
          <div className="text-black pt-2">
            {navItems.map((item, index) => (
              <div key={index} className="py-2">
                <div
                  className="flex justify-between items-center px-5 cursor-pointer py-2"
                  onClick={() => toggleSubMenu(item.label)}
                >
                  <NavLink to={`${item.link}`}>
                    <div className="flex items-center text-xl">
                      {item.icon}
                      <div className="text-lg font-semibold ml-2">
                        {item.label}
                      </div>
                    </div>
                  </NavLink>
                  {item.subMenu && (
                    <div className="bg-gray-200 text-lg p-1 rounded-full">
                      {openSubMenu === item.label ? (
                        <FaChevronDown />
                      ) : (
                        <FaAngleRight />
                      )}
                    </div>
                  )}
                </div>

                {/* Submenu */}
                {openSubMenu === item.label && item.subMenu && (
                  <div className="pt-5">
                    {item.subMenu.map((subItem, subIndex) => (
                      <div
                        key={subIndex}
                        className="px-6 py-2 flex items-center"
                      >
                        {/* Checkbox for active route */}
                        <input
                          type="radio"
                           name="radio-1"
                          className="radio rounded-full mr-2 w-5 h-5"
                          checked={location.pathname === subItem.link}
                          readOnly
                        />
                        <p className="text-lg font-semibold">
                          <NavLink to={subItem.link}>{subItem.label}</NavLink>
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Dashboard content */}
        <div className="flex-1 ml-72 overflow-y-auto min-h-screen bg-[#f1f4f9]">
          <div className="py-5 px-5 bg-white text-black flex justify-end">
            <label className="swap swap-rotate bg-gray-200 p-2 rounded-full">
              {/* this hidden checkbox controls the state */}
              <input
                type="checkbox"
                className="theme-controller"
                value="synthwave"
              />

              {/* sun icon */}
              <svg
                className="swap-off h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-on h-7 w-7 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
            <div className="indicator ml-5">
              <span className="indicator-item badge badge-secondary"></span>
              <div className=" grid bg-gray-200 p-2 rounded-full place-items-center">
                <FaRegBell className="text-[28px]" />
              </div>
            </div>
            <div className="flex items-center ml-5">
              <div className="avatar">
                <div className="w-8 h-8 rounded-full">
                  <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                </div>
              </div>
              <div className="flex items-center ml-2">
                <p>SuperAdmin</p>
                <FaAngleRight className="text-lg ml-2"></FaAngleRight>
              </div>
            </div>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;

