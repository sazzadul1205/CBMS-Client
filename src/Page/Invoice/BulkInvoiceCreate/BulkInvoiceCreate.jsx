import { useState, useEffect } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import Select from "react-select";
import Swal from "sweetalert2";

const BulkInvoiceCreate = () => {
  const yearOptions = [
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
  ];

  const monthOptions = [
    { value: "january", label: "January" },
    { value: "february", label: "February" },
    { value: "march", label: "March" },
  ];

  const currencyOptions = [{ value: "bdt", label: "BDT" }];

  const templateOptions = [
    { value: "template1", label: "Template 1" },
    { value: "template2", label: "Template 2" },
    { value: "template3", label: "Template 3" },
  ];

  const [customerData, setCustomerData] = useState([]);

  // API
  const mockCustomerData = [
    {
      customerName: "Bangladesh Commerce Bank Ltd.",
      productName: "SMS Management fee",
      existingType: "NEW",
      quantity: 1,
      unitPrice: 1200.0,
      total: 1200.0,
    },
    {
      customerName: "Sonali Bank",
      productName: "Transaction fee",
      existingType: "EXISTING",
      quantity: 2,
      unitPrice: 500.0,
      total: 1000.0,
    },
    {
      customerName: "Agrani Bank",
      productName: "Service fee",
      existingType: "NEW",
      quantity: 3,
      unitPrice: 700.0,
      total: 2100.0,
    },
    {
      customerName: "Janata Bank",
      productName: "Management fee",
      existingType: "NEW",
      quantity: 1,
      unitPrice: 1500.0,
      total: 1500.0,
    },
    {
      customerName: "Dutch Bangla Bank",
      productName: "Payment fee",
      existingType: "EXISTING",
      quantity: 4,
      unitPrice: 400.0,
      total: 1600.0,
    },
    {
      customerName: "Islami Bank",
      productName: "Processing fee",
      existingType: "NEW",
      quantity: 1,
      unitPrice: 1800.0,
      total: 1800.0,
    },
    {
      customerName: "City Bank",
      productName: "Maintenance fee",
      existingType: "NEW",
      quantity: 2,
      unitPrice: 800.0,
      total: 1600.0,
    },
    {
      customerName: "Prime Bank",
      productName: "Annual fee",
      existingType: "EXISTING",
      quantity: 1,
      unitPrice: 2000.0,
      total: 2000.0,
    },
    {
      customerName: "Pubali Bank",
      productName: "Service charge",
      existingType: "NEW",
      quantity: 3,
      unitPrice: 900.0,
      total: 2700.0,
    },
    {
      customerName: "Meghna Bank",
      productName: "Monthly fee",
      existingType: "EXISTING",
      quantity: 2,
      unitPrice: 1000.0,
      total: 2000.0,
    },
    // Additional 20 entries
    {
      customerName: "South East Bank",
      productName: "Credit card fee",
      existingType: "NEW",
      quantity: 1,
      unitPrice: 2500.0,
      total: 2500.0,
    },
    {
      customerName: "Trust Bank",
      productName: "Overdraft fee",
      existingType: "EXISTING",
      quantity: 2,
      unitPrice: 3000.0,
      total: 6000.0,
    },
    {
      customerName: "One Bank",
      productName: "ATM Withdrawal fee",
      existingType: "NEW",
      quantity: 3,
      unitPrice: 500.0,
      total: 1500.0,
    },
    {
      customerName: "Mutual Trust Bank",
      productName: "Cheque processing fee",
      existingType: "NEW",
      quantity: 1,
      unitPrice: 200.0,
      total: 200.0,
    },
    {
      customerName: "Standard Bank",
      productName: "Loan processing fee",
      existingType: "EXISTING",
      quantity: 1,
      unitPrice: 10000.0,
      total: 10000.0,
    },
    {
      customerName: "United Commercial Bank",
      productName: "Foreign Exchange fee",
      existingType: "NEW",
      quantity: 2,
      unitPrice: 350.0,
      total: 700.0,
    },
    {
      customerName: "Shahjalal Islami Bank",
      productName: "Late payment fee",
      existingType: "EXISTING",
      quantity: 1,
      unitPrice: 400.0,
      total: 400.0,
    },
    {
      customerName: "Al-Arafah Bank",
      productName: "Wire transfer fee",
      existingType: "NEW",
      quantity: 3,
      unitPrice: 1000.0,
      total: 3000.0,
    },
    {
      customerName: "AB Bank",
      productName: "Account Maintenance fee",
      existingType: "NEW",
      quantity: 1,
      unitPrice: 800.0,
      total: 800.0,
    },
    {
      customerName: "Modhumoti Bank",
      productName: "Deposit fee",
      existingType: "EXISTING",
      quantity: 4,
      unitPrice: 600.0,
      total: 2400.0,
    },
    {
      customerName: "Exim Bank",
      productName: "Transaction charge",
      existingType: "NEW",
      quantity: 1,
      unitPrice: 450.0,
      total: 450.0,
    },
    {
      customerName: "Jamuna Bank",
      productName: "Online banking fee",
      existingType: "NEW",
      quantity: 2,
      unitPrice: 1200.0,
      total: 2400.0,
    },
    {
      customerName: "Mercantile Bank",
      productName: "Mobile banking fee",
      existingType: "EXISTING",
      quantity: 1,
      unitPrice: 550.0,
      total: 550.0,
    },
    {
      customerName: "NRB Commercial Bank",
      productName: "Bill payment fee",
      existingType: "EXISTING",
      quantity: 2,
      unitPrice: 650.0,
      total: 1300.0,
    },
    {
      customerName: "First Security Islami Bank",
      productName: "Cash deposit fee",
      existingType: "NEW",
      quantity: 1,
      unitPrice: 250.0,
      total: 250.0,
    },
    {
      customerName: "Midland Bank",
      productName: "International transfer fee",
      existingType: "NEW",
      quantity: 1,
      unitPrice: 900.0,
      total: 900.0,
    },
    {
      customerName: "National Bank",
      productName: "Mortgage fee",
      existingType: "EXISTING",
      quantity: 1,
      unitPrice: 5000.0,
      total: 5000.0,
    },
    {
      customerName: "Bangladesh Krishi Bank",
      productName: "Savings account fee",
      existingType: "NEW",
      quantity: 3,
      unitPrice: 100.0,
      total: 300.0,
    },
    {
      customerName: "IFIC Bank",
      productName: "Credit review fee",
      existingType: "EXISTING",
      quantity: 2,
      unitPrice: 700.0,
      total: 1400.0,
    },
    {
      customerName: "BASIC Bank",
      productName: "Investment fee",
      existingType: "NEW",
      quantity: 4,
      unitPrice: 1200.0,
      total: 4800.0,
    },
    {
      customerName: "Rupali Bank",
      productName: "Loan closure fee",
      existingType: "NEW",
      quantity: 1,
      unitPrice: 300.0,
      total: 300.0,
    },
  ];

  useEffect(() => {
    // Simulate fetching data from JSON
    setCustomerData(mockCustomerData);
  }, []);

  const handleSelectChange = (field, selectedOption) => {
    const value = selectedOption ? selectedOption.label : "";
    console.log(`${field}: ${value}`);
  };

  // SweetAlert confirm function for deletion
  const handleDelete = (index) => {
    Swal.fire({
      title: "Are you sure?",
      text: `Do you want to delete this customer?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        const updatedCustomerData = customerData.filter(
          (_, customerIndex) => customerIndex !== index
        );
        setCustomerData(updatedCustomerData);
        Swal.fire("Deleted!", "The customer has been deleted.", "success");
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelled", "The customer was not deleted.", "error");
      }
    });
  };

  return (
    <div className="text-black mx-4">
      {/* Breadcrumbs */}
      <div className="flex justify-between items-center py-4">
        <div className="breadcrumbs text-sm">
          <ul className="flex space-x-2">
            <li className="flex items-center">
              <IoHomeOutline className="text-blue-500 mr-2" />
              <span className="text-blue-500">Home</span>
            </li>
            <li className="flex items-center">
              <span className="text-blue-500">Invoice</span>
            </li>
            <li className="flex items-center">
              <span>Bulk Invoices Create</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white mx-5 my-5 p-5 rounded-lg shadow">
        {/* Form Section */}
        <div className="grid grid-cols-2 gap-4">
          {/* Year */}
          <div>
            <p className="pb-2">
              Year <span className="text-red-500">*</span>
            </p>
            <Select
              options={yearOptions}
              placeholder="Select Year"
              onChange={(selectedOption) =>
                handleSelectChange("year", selectedOption)
              }
              className="w-full"
            />
          </div>

          {/* Month */}
          <div>
            <p className="pb-2">
              Month <span className="text-red-500">*</span>
            </p>
            <Select
              options={monthOptions}
              placeholder="Select Month"
              onChange={(selectedOption) =>
                handleSelectChange("month", selectedOption)
              }
              className="w-full"
            />
          </div>

          {/* Currency */}
          <div>
            <p className="pb-2">
              Currency <span className="text-red-500">*</span>
            </p>
            <Select
              options={currencyOptions}
              placeholder="BDT"
              defaultValue={currencyOptions[0]}
              isDisabled={true}
              className="w-full text-gray-400"
            />
          </div>

          {/* Template Name */}
          <div>
            <p className="pb-2">
              Template Name <span className="text-red-500">*</span>
            </p>
            <Select
              options={templateOptions}
              placeholder="Select Template"
              onChange={(selectedOption) =>
                handleSelectChange("templateName", selectedOption)
              }
              className="w-full"
            />
          </div>

          {/* Create Date */}
          <div>
            <p className="pb-2">
              Create Date <span className="text-red-500">*</span>
            </p>
            <input
              type="date"
              className="input input-bordered w-full bg-white border border-gray-200 h-10"
            />
          </div>

          {/* Button */}
          <div className="flex gap-2">
            <div className="form-control mt-8 ">
              <label className="label cursor-pointer">
                <input type="checkbox" className="checkbox mr-2" />
                <span className="label-text text-black">VAT Includes</span>
              </label>
            </div>
            <div>
              <button className="bg-black text-white py-2 px-5 hover:bg-gray-600 mt-8 rounded-md">
                Show
              </button>
            </div>
          </div>
        </div>

        {/* Customer information */}
        <div className="pt-4">
          {/* Top Section */}
          <p className="font-semibold text-xl pb-4">Customer Information</p>
          {/* Table */}
          <div className="border rounded-md py-2">
            <div className="overflow-x-auto p-5">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-black border-none">
                    <th>Customer Name</th>
                    <th>Product Name</th>
                    <th>Existing Type</th>
                    <th>Quantity/Bulk</th>
                    <th>Unit Price</th>
                    <th>Total Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Mapping through customer data */}
                  {customerData.map((customer, index) => (
                    <tr className="border-none" key={index}>
                      <th className="p-[2px]">
                        <p className="border border-gray-500 py-[4px] pl-2 bg-gradient-to-r from-slate-100 to-white font-normal">
                          {customer.customerName}
                        </p>
                      </th>
                      <td className="p-[2px]">
                        <p className="border border-gray-500 py-[4px] pl-2 bg-gradient-to-r from-slate-100 to-white">
                          {customer.productName}
                        </p>
                      </td>
                      <td className="p-[2px]">
                        <p className="border border-gray-500 py-[4px] pl-2 bg-gradient-to-r from-slate-100 to-white">
                          {customer.existingType}
                        </p>
                      </td>
                      <td className="p-[2px]">
                        <p className="border border-gray-500 py-[4px] pl-2 bg-gradient-to-r from-slate-100 to-white">
                          {customer.quantity}
                        </p>
                      </td>
                      <td className="p-[2px]">
                        <p className="border border-gray-500 py-[4px] pl-2 bg-gradient-to-r from-slate-100 to-white">
                          {customer.unitPrice}
                        </p>
                      </td>
                      <td className="p-[2px]">
                        <p className="border border-gray-500 py-[4px] pl-2 bg-gradient-to-r from-slate-100 to-white">
                          {customer.total}
                        </p>
                      </td>
                      <td className="p-[2px]">
                        <button
                          className="bg-red-500 hover:bg-red-400 text-white p-2"
                          onClick={() => handleDelete(index)}
                        >
                          <FaRegTrashAlt className="cursor-pointer" />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BulkInvoiceCreate;
