import { IoHomeOutline } from "react-icons/io5";
import Select from "react-select";

const InvoiceStatusUpdate = () => {
  const customerOptions = [
    { value: "customer1", label: "Customer 1" },
    { value: "customer2", label: "Customer 2" },
    { value: "customer3", label: "Customer 3" },
  ];

  const handleSelectChange = (field, selectedOption) => {
    const value = selectedOption ? selectedOption.label : "";
    console.log(`${field}: ${value}`); 
  };

  return (
    <div className="text-black mx-4">
      {/* Breadcrumbs and Button */}
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
              <span>Invoice-Status</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white m-5 p-4 rounded-lg shadow-md">
        {/* Search Section */}
        <div className="flex gap-5 pb-5 border-b-2 border-gray-300">
          {/* Customer Name */}
          <div className="w-[450px]">
            <p className="pb-2">
              Customer Name <span className="text-red-500">*</span>
            </p>
            <Select
              options={customerOptions}
              placeholder="Select Customer"
              onChange={(selectedOption) =>
                handleSelectChange("customerName", selectedOption)
              }
              className="w-full"
            />
          </div>

          {/* Invoice ID */}
          <div className="w-[450px]">
            <p className="pb-2">
              Invoice ID <span className="text-red-500">*</span>
            </p>
            <Select
              options={customerOptions}
              placeholder="Select Invoice ID"
              onChange={(selectedOption) =>
                handleSelectChange("invoiceID", selectedOption)
              }
              className="w-full"
            />
          </div>

          {/* Button */}
          <div className="mt-7">
            <button className="px-5 py-2 bg-black hover:bg-gray-600 text-white font-semibold rounded-md">
              Search
            </button>
          </div>
        </div>

        {/* invoice Data */}
        <div className="grid grid-cols-3 pt-10 mx-5 pb-5 text-gray-800 border-b-2 border-gray-300">
          {/* Invoice Code */}
          <div className="items-center grid grid-cols-2 pb-5">
            <p className="text-lg font-semibold mr-10">Invoice Code</p>
            <span>: 2408UBPLC9</span>
          </div>

          {/* Invoice Date */}
          <div className="items-center grid grid-cols-2 pb-5">
            <p className="text-lg font-semibold mr-10">Invoice Date</p>
            <span>: 28-08-2024</span>
          </div>

          {/* Name */}
          <div className="items-center grid grid-cols-2 pb-5">
            <p className="text-lg font-semibold mr-10">Name</p>
            <span>: Uttara Bank PLC.</span>
          </div>

          {/* Invoice Total */}
          <div className="items-center grid grid-cols-2 pb-5">
            <p className="text-lg font-semibold mr-10">Invoice Total</p>
            <span>: 147,525.00</span>
          </div>

          {/* Last Status */}
          <div className="items-center grid grid-cols-2 pb-5">
            <p className="text-lg font-semibold mr-10">Last Status</p>
            <span>: Approved</span>
          </div>
        </div>

        {/* Table */}
        <div>
          <div className="overflow-x-auto py-5">
            <table className="table w-[800px] mx-auto border-2 border-white">
              {/* head */}
              <thead className="bg-gray-300 text-black ">
                <tr>
                  <th className="border-2 border-white">Date</th>
                  <th className="border-2 border-white">Status</th>
                  <th className="border-2 border-white">Remark</th>
                  <th className="border-2 border-white">Action</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr className="border-none">
                  <th className="border-2 border-gray-100">28-08-2024</th>
                  <td className="border-2 border-gray-100">Approved</td>
                  <td className="border-2 border-gray-100">
                    <input
                      type="text"
                      placeholder="Type here"
                      className="input w-full max-w-xs bg-white border border-gray-200 h-10 rounded-none"
                    />
                  </td>
                  <td className="border-2 border-gray-100">
                    <button className="bg-blue-500 hover:bg-blue-400 text-white p-2">
                      Update
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceStatusUpdate;
