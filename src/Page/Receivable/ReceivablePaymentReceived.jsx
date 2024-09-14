import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { IoHomeOutline } from "react-icons/io5";
import Select from "react-select";
import swal from "sweetalert2";

const ReceivablePaymentReceived = () => {
  const CustomerNameOptions = [
    { value: "John Doe", label: "John Doe" },
    { value: "Jane Smith", label: "Jane Smith" },
    { value: "Bob Johnson", label: "Bob Johnson" },
  ];

  const yearOptions = [
    { value: "2021", label: "2021" },
    { value: "2022", label: "2022" },
    { value: "2023", label: "2023" },
  ];

  const [entries, setEntries] = useState([
    {
      id: Date.now(),
      receiveDate: null,
      receiveAmount: "",
      paymentMode: null,
      creditBank: null,
      accountNo: null,
      remark: "",
    },
  ]);

  const handleSelectChange = (field, selectedOption, id) => {
    const value = selectedOption ? selectedOption.label : "";
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const handleInputChange = (field, value, id) => {
    setEntries((prevEntries) =>
      prevEntries.map((entry) =>
        entry.id === id ? { ...entry, [field]: value } : entry
      )
    );
  };

  const addNewEntry = () => {
    setEntries((prevEntries) => [
      ...prevEntries,
      {
        id: Date.now(),
        receiveDate: null,
        receiveAmount: "",
        paymentMode: null,
        creditBank: null,
        accountNo: null,
        remark: "",
      },
    ]);
  };

  const removeEntry = (id) => {
    setEntries((prevEntries) => prevEntries.filter((entry) => entry.id !== id));
  };

  const handleSave = () => {
    swal({
      title: "Saved!",
      text: "Receivable payment received data has been saved successfully.",
      icon: "success",
      button: "OK",
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
              <span className="text-blue-500">Receivable</span>
            </li>
            <li className="flex items-center">
              <span>Payment-Received</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-white mx-5 my-5 p-5 rounded-lg shadow">
        {/* Form Section */}
        <div>
          {/* Customer Name */}
          <div>
            <p className="pb-2">
              Customer Name <span className="text-red-500">*</span>
            </p>
            <Select
              options={CustomerNameOptions}
              placeholder="Select Customer Name"
              onChange={(selectedOption) =>
                handleSelectChange("customerName", selectedOption)
              }
              className="w-1/2"
            />
          </div>
        </div>

        {/* Tag */}
        <div className="pt-4">
          <div className="badge badge-primary bg-green-500 text-white text-xl py-4 px-5 border-none">
            2408BAF1
          </div>
        </div>

        {/* Amount */}
        <div className="py-4">
          <div className="flex gap-5 text-xl font-semibold text-gray-500">
            <p>Net Amount: 262,500.00</p>
            <p>Due Amount: 262,500.00</p>
          </div>
        </div>

        {/* Receivable Information */}
        <div className="pt-2">
          <p className="text-xl font-medium">Receivable Information</p>

          <div className="p-4 border border-gray-400 my-2">
            {entries.map((entry) => (
              <div key={entry.id} className="flex gap-4">
                {/* Receive Date */}
                <div className="pb-4">
                  <p className="pb-2">
                    Receive Date <span className="text-red-500">*</span>
                  </p>
                  <Select
                    options={yearOptions}
                    placeholder="Select Receive Date"
                    onChange={(selectedOption) =>
                      handleSelectChange(
                        "receiveDate",
                        selectedOption,
                        entry.id
                      )
                    }
                    className="w-[215px] h-9"
                  />
                </div>

                {/* Receive Amount */}
                <div className="pb-4">
                  <p className="pb-2">
                    Receive Amount <span className="text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-[215px] max-w-xs bg-white border border-gray-300 rounded-md h-[38px]"
                    value={entry.receiveAmount}
                    onChange={(e) =>
                      handleInputChange(
                        "receiveAmount",
                        e.target.value,
                        entry.id
                      )
                    }
                  />
                </div>

                {/* Payment Mode */}
                <div className="pb-4">
                  <p className="pb-2">
                    Payment Mode <span className="text-red-500">*</span>
                  </p>
                  <Select
                    options={yearOptions}
                    placeholder="Select Payment Mode"
                    onChange={(selectedOption) =>
                      handleSelectChange(
                        "paymentMode",
                        selectedOption,
                        entry.id
                      )
                    }
                    className="w-[215px] h-9"
                  />
                </div>

                {/* Credit Bank */}
                <div className="pb-4">
                  <p className="pb-2">
                    Credit Bank <span className="text-red-500">*</span>
                  </p>
                  <Select
                    options={yearOptions}
                    placeholder="Select Credit Bank"
                    onChange={(selectedOption) =>
                      handleSelectChange("creditBank", selectedOption, entry.id)
                    }
                    className="w-[215px] h-9"
                  />
                </div>

                {/* Account No */}
                <div className="pb-4">
                  <p className="pb-2">
                    Account No <span className="text-red-500">*</span>
                  </p>
                  <Select
                    options={yearOptions}
                    placeholder="Select Account No"
                    onChange={(selectedOption) =>
                      handleSelectChange("accountNo", selectedOption, entry.id)
                    }
                    className="w-[215px] h-9"
                  />
                </div>

                {/* Remark */}
                <div className="pb-4">
                  <p className="pb-2">
                    Remark <span className="text-red-500">*</span>
                  </p>
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered w-[215px] max-w-xs bg-white border border-gray-300 rounded-md h-[38px]"
                    value={entry.remark}
                    onChange={(e) =>
                      handleInputChange("remark", e.target.value, entry.id)
                    }
                  />
                </div>

                {/* Delete Button */}
                <div className="mt-7">
                  <button
                    className="bg-red-500 hover:bg-red-400 text-white p-2"
                    onClick={() => removeEntry(entry.id)}
                  >
                    <FaRegTrashAlt className="cursor-pointer" />
                  </button>
                </div>
              </div>
            ))}
            {/* Add New */}
            <div className="flex justify-end">
              <button
                className="text-gray-500 font-semibold border-2 border-gray-500 p-3 hover:bg-gray-500 hover:text-white"
                onClick={addNewEntry}
              >
                + Add New
              </button>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="flex justify-center pt-3">
          <button
            className="bg-black hover:bg-gray-500 text-white text-lg font-semibold py-1 px-8 rounded-lg"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReceivablePaymentReceived;
