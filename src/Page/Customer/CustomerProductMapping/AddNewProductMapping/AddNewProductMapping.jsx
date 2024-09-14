import { useState } from "react";
import Select from "react-select";

const AddNewProductMapping = () => {
  // Define options for Select components
  const customerOptions = [
    { value: "customer1", label: "Customer 1" },
    { value: "customer2", label: "Customer 2" },
    { value: "customer3", label: "Customer 3" },
  ];

  // Define state for Select components
  const [selectedBillingHead, setSelectedBillingHead] = useState(null);
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [selectedCustomer, setSelectedCustomer] = useState(null);

  // Handlers for Select changes
  const handleBillingHeadChange = (selectedOption) => {
    setSelectedBillingHead(selectedOption);
  };

  const handleTemplateChange = (selectedOption) => {
    setSelectedTemplate(selectedOption);
  };

  const handleCustomerChange = (selectedOption) => {
    setSelectedCustomer(selectedOption);
  };

  // Handler for Save button click
  const handleSave = () => {
    // Implement save functionality here
    console.log("Saving data:", {
      billingHead: selectedBillingHead,
      template: selectedTemplate,
      customer: selectedCustomer,
      name,
    });

    // Close the modal
    document.getElementById("Add_New_Mapping_Product").close();
  };

  return (
    <div className="modal-box bg-white rounded-none max-w-[500px] p-0">
      {/* Top section */}
      <div className="flex justify-between bg-black font-semibold text-white px-5 py-5 text-xl">
        <p>Create Product Mapping</p>
        <button
          className="text-white"
          onClick={() =>
            document.getElementById("Add_New_Mapping_Product").close()
          }
        >
          x
        </button>
      </div>

      {/* Form Section */}
      <div className="px-5 py-5">
        {/* Billing Head Name */}
        <div className="mb-4">
          <p className="pb-2">
            Billing Head Name <span className="text-red-500">*</span>
          </p>
          <Select
            options={customerOptions}
            placeholder="Select Billing Head"
            value={selectedBillingHead}
            onChange={handleBillingHeadChange}
            className="w-full"
          />
        </div>

        {/* Template Name */}
        <div className="mb-4">
          <p className="pb-2">
            Template Name <span className="text-red-500">*</span>
          </p>
          <Select
            options={customerOptions}
            placeholder="Select Template"
            value={selectedTemplate}
            onChange={handleTemplateChange}
            className="w-full"
          />
        </div>

        {/* Customer Name */}
        <div className="mb-4">
          <p className="pb-2">
            Customer Name <span className="text-red-500">*</span>
          </p>
          <Select
            options={customerOptions}
            placeholder="Select Customer"
            value={selectedCustomer}
            onChange={handleCustomerChange}
            className="w-full"
          />
        </div>
      </div>

      {/* Save Button */}
      <div className="flex justify-center my-4">
        <button
          className="py-3 px-7 bg-black hover:bg-gray-700 text-white font-semibold"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNewProductMapping;
