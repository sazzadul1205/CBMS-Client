import { useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Select from "react-select";

const AddNewCustomer = () => {
  const customerOptions = [
    { value: "customer1", label: "Customer 1" },
    { value: "customer2", label: "Customer 2" },
    { value: "customer3", label: "Customer 3" },
  ];

  // State to hold dynamic contact personal information fields
  const [contactInfo, setContactInfo] = useState([
    { name: null, email: null, designation: null, cell1: "", cell2: "" },
  ]);

  // State to hold dynamic note information fields
  const [noteInfo, setNoteInfo] = useState([
    {
      noteName: null,
      noteDetails: "",
      position: null,
      sequence: "",
      templateName: null,
    },
  ]);

  // Handle changes in contact personal information fields
  const handleContactChange = (index, field, value) => {
    const updatedContactInfo = [...contactInfo];
    updatedContactInfo[index][field] = value;
    setContactInfo(updatedContactInfo);
  };

  // Handle changes in note information fields
  const handleNoteChange = (index, field, value) => {
    const updatedNoteInfo = [...noteInfo];
    updatedNoteInfo[index][field] = value;
    setNoteInfo(updatedNoteInfo);
  };

  // Add a new contact personal information field
  const addNewContactInfo = () => {
    setContactInfo([
      ...contactInfo,
      { name: null, email: null, designation: null, cell1: "", cell2: "" },
    ]);
  };

  // Add a new note information field
  const addNewNoteInfo = () => {
    setNoteInfo([
      ...noteInfo,
      {
        noteName: null,
        noteDetails: "",
        position: null,
        sequence: "",
        templateName: null,
      },
    ]);
  };

  // Remove contact personal information field
  const removeContactInfo = (index) => {
    const updatedContactInfo = contactInfo.filter((_, i) => i !== index);
    setContactInfo(updatedContactInfo);
  };

  // Remove note information field
  const removeNoteInfo = (index) => {
    const updatedNoteInfo = noteInfo.filter((_, i) => i !== index);
    setNoteInfo(updatedNoteInfo);
  };

  return (
    <div className="modal-box bg-white rounded-none max-w-[1200px] p-0">
      {/* Top section */}
      <div className="flex justify-between bg-black font-semibold text-white px-5 py-5 text-2xl">
        <p>Create Customer</p>
        <button
          className="text-white"
          onClick={() => document.getElementById("Add_New_Customer").close()}
        >
          x
        </button>
      </div>

      {/* Name Section */}
      <div className="px-5 py-5">
        <div className="grid grid-cols-2 gap-4">
          {/* Code */}
          <div>
            <p className="pb-2">
              Code <span className="text-red-500">*</span>
            </p>
            <div className="w-full">
              <input
                type="text"
                className="input border-gray-300 w-full bg-white rounded-md"
              />
            </div>
          </div>

          {/* Name */}
          <div>
            <p className="pb-2">
              Name <span className="text-red-500">*</span>
            </p>
            <div className="w-full">
              <input
                type="text"
                className="input border-gray-300 w-full bg-white rounded-md"
              />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="mt-5">
          <p className="pb-2">Address</p>
          <textarea className="input border-gray-300 w-full bg-white rounded-md h-32" />
        </div>
      </div>

      {/* Contact Personal Information */}
      <div className="px-2 mt-5">
        <p className="font-semibold text-lg">Contact Personal Information</p>
        <div className="px-4 pt-5 mt-2 border border-gray-300 rounded-lg">
          {contactInfo.map((contact, index) => (
            <div className="flex mb-4" key={index}>
              {/* Name */}
              <div className="mr-4">
                <p className="pb-2">
                  Name <span className="text-red-500">*</span>
                </p>
                <Select
                  options={customerOptions}
                  placeholder="Select Customer"
                  value={contact.name}
                  onChange={(selectedOption) =>
                    handleContactChange(index, "name", selectedOption)
                  }
                  className="w-52"
                />
              </div>
              {/* Email */}
              <div className="mr-4">
                <p className="pb-2">
                  Email <span className="text-red-500">*</span>
                </p>
                <Select
                  options={customerOptions}
                  placeholder="Select Email"
                  value={contact.email}
                  onChange={(selectedOption) =>
                    handleContactChange(index, "email", selectedOption)
                  }
                  className="w-52 "
                />
              </div>
              {/* Designation */}
              <div className="mr-4">
                <p className="pb-2">
                  Designation <span className="text-red-500">*</span>
                </p>
                <Select
                  options={customerOptions}
                  placeholder="Select Designation"
                  value={contact.designation}
                  onChange={(selectedOption) =>
                    handleContactChange(index, "designation", selectedOption)
                  }
                  className="w-52"
                />
              </div>
              {/* Cell 1 */}
              <div className="mr-4">
                <p className="pb-2">
                  Cell 1 <span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  className="input border-gray-300 w-full bg-white rounded-md h-9"
                  value={contact.cell1}
                  onChange={(e) =>
                    handleContactChange(index, "cell1", e.target.value)
                  }
                />
              </div>
              {/* Cell 2 */}
              <div className="mr-4">
                <p className="pb-2">Cell 2</p>
                <input
                  type="text"
                  className="input border-gray-300 w-full bg-white rounded-md h-9"
                  value={contact.cell2}
                  onChange={(e) =>
                    handleContactChange(index, "cell2", e.target.value)
                  }
                />
              </div>
              {/* Trash Button */}
              <div>
                <button
                  className="bg-red-500 text-white h-8 px-4 rounded  flex items-center justify-center mt-7"
                  onClick={() => removeContactInfo(index)}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          ))}
          {/* Add New Contact Button */}
          <div className="flex justify-end my-5">
            <button
              className="border border-black py-3 px-8 hover:bg-blue-300 font-semibold"
              onClick={addNewContactInfo}
            >
              + Add New
            </button>
          </div>
        </div>
      </div>

      {/* Note Information */}
      <div className="px-2 mt-5">
        <p className="font-semibold text-lg">Note Information</p>
        <div className="px-4 pt-5 mt-2 border border-gray-300 rounded-lg">
          {noteInfo.map((note, index) => (
            <div className="flex mb-4" key={index}>
              {/* Note Name */}
              <div className="mr-4">
                <p className="pb-2">
                  Note Name <span className="text-red-500">*</span>
                </p>
                <Select
                  options={customerOptions}
                  placeholder="Select Note"
                  value={note.noteName}
                  onChange={(selectedOption) =>
                    handleNoteChange(index, "noteName", selectedOption)
                  }
                  className="w-56"
                />
              </div>
              {/* Note Details */}
              <div className="mr-4">
                <p className="pb-2">
                  Note Details <span className="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  className="input border-gray-300 w-full bg-white rounded-md h-9"
                  value={note.noteDetails}
                  onChange={(e) =>
                    handleNoteChange(index, "noteDetails", e.target.value)
                  }
                />
              </div>
              {/* Position */}
              <div className="mr-4">
                <p className="pb-2">
                  Position <span className="text-red-500">*</span>
                </p>
                <Select
                  options={customerOptions}
                  placeholder="Select Position"
                  value={note.position}
                  onChange={(selectedOption) =>
                    handleNoteChange(index, "position", selectedOption)
                  }
                  className="w-56"
                />
              </div>
              {/* Sequence */}
              <div className="mr-4">
                <p className="pb-2">Sequence</p>
                <input
                  type="text"
                  className="input border-gray-300 w-full bg-white rounded-md h-9"
                  value={note.sequence}
                  onChange={(e) =>
                    handleNoteChange(index, "sequence", e.target.value)
                  }
                />
              </div>
              {/* Template Name */}
              <div className="mr-4">
                <p className="pb-2">Template Name</p>
                <Select
                  options={customerOptions}
                  placeholder="Select Template"
                  value={note.templateName}
                  onChange={(selectedOption) =>
                    handleNoteChange(index, "templateName", selectedOption)
                  }
                  className="w-56"
                />
              </div>
              {/* Trash Button */}
              <div>
                <button
                  className="bg-red-500 text-white h-8 px-4 rounded  flex items-center justify-center mt-7"
                  onClick={() => removeNoteInfo(index)}
                >
                  <FaRegTrashAlt />
                </button>
              </div>
            </div>
          ))}
          {/* Add New Note Button */}
          <div className="flex justify-end my-5">
            <button
              className="border border-black py-3 px-8 hover:bg-blue-300 font-semibold"
              onClick={addNewNoteInfo}
            >
              + Add New
            </button>
          </div>
        </div>
      </div>

      {/* Save */}
      <div className="flex  justify-center my-4">
        <button
          className="py-3 px-7 bg-black hover:bg-gray-700 text-white font-semibold"
          onClick={() => document.getElementById("Add_New_Customer").close()}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNewCustomer;
