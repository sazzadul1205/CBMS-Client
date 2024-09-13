import { useState } from "react";
import { FaAngleDown, FaRegTrashAlt } from "react-icons/fa";

const AddNewInvoice = () => {
  const [dropdownOpen, setDropdownOpen] = useState({
    customerName: false,
    noteName: false,
    noteDetails: false,
    productType: false,
    productName: false,
  });

  const [notes, setNotes] = useState([{ noteName: "", noteDetails: "" }]);
  const [products, setProducts] = useState([
    {
      productType: "",
      productName: "",
      description: "",
      quantity: "",
      unitPrice: "",
      total: "",
    },
  ]);

  // Toggle dropdown visibility for specific input
  const toggleDropdown = (dropdown) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  // Handle adding a new note
  const addNote = () => {
    setNotes([...notes, { noteName: "", noteDetails: "" }]);
  };

  // Handle deleting a note
  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Handle input change for notes
  const handleNoteChange = (index, field, value) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? { ...note, [field]: value } : note
    );
    setNotes(updatedNotes);
  };

  // Handle adding a new product
  const addProduct = () => {
    setProducts([
      ...products,
      {
        productType: "",
        productName: "",
        description: "",
        quantity: "",
        unitPrice: "",
        total: "",
      },
    ]);
  };

  // Handle deleting a product
  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  // Handle input change for products
  const handleProductChange = (index, field, value) => {
    const updatedProducts = products.map((product, i) =>
      i === index ? { ...product, [field]: value } : product
    );
    setProducts(updatedProducts);
  };

  // Calculate total for each product
  const calculateTotal = (quantity, unitPrice) => {
    return (parseFloat(quantity) || 0) * (parseFloat(unitPrice) || 0);
  };

  return (
    <div className="modal-box bg-white rounded-none max-w-[1200px] p-0">
      {/* Top section */}
      <div className="flex justify-between bg-black font-semibold text-white px-5 py-5 text-2xl">
        <p>Create Invoice</p>
        <button
          className="text-white"
          onClick={() => document.getElementById("Add_New_Invoice").close()}
        >
          x
        </button>
      </div>

      {/* Form Section */}
      <div className="p-5 grid grid-cols-3 gap-3">
        {/* Customer Name */}
        <div>
          <p className="pb-2">
            Customer Name <span className="text-red-500">*</span>
          </p>
          <div className="relative w-full max-w-xs">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full bg-white pr-10"
            />
            <FaAngleDown
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => toggleDropdown("customerName")}
            />
            {/* Dropdown options for Customer Name */}
            {dropdownOpen.customerName && (
              <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-2">
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                  Customer 1
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                  Customer 2
                </li>
                <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                  Customer 3
                </li>
              </ul>
            )}
          </div>
        </div>

        {/* Invoice Date */}
        <div>
          <p className="pb-2">Invoice Date</p>
          <div className="w-full max-w-xs">
            <input
              type="date"
              className="input input-bordered w-full bg-white pr-10"
            />
          </div>
        </div>

        {/* Remark */}
        <div>
          <p className="pb-2">Remark</p>
          <div className="w-full max-w-xs">
            <input
              type="text"
              placeholder="Enter Remark"
              className="input input-bordered w-full bg-white pr-10"
            />
          </div>
        </div>
      </div>

      {/* Note Information */}
      <div className="p-5">
        <p className="text-lg">Note Information</p>
        <div className="border p-5 my-5">
          {notes.map((note, index) => (
            <div className="flex gap-4 items-center mb-4" key={index}>
              {/* Note Name */}
              <div>
                <p className="pb-2">
                  Note Name <span className="text-red-500">*</span>
                </p>
                <div className="relative w-full max-w-xs">
                  <input
                    type="text"
                    value={note.noteName}
                    onChange={(e) =>
                      handleNoteChange(index, "noteName", e.target.value)
                    }
                    placeholder="Type here"
                    className="input input-bordered w-full bg-white pr-10"
                  />
                  <FaAngleDown
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => toggleDropdown("noteName")}
                  />
                </div>
                {/* Dropdown options for Product Type */}
                {dropdownOpen.noteName && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-2">
                    <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                      Product 1
                    </li>
                    <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                      Product 2
                    </li>
                    <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                      Product 3
                    </li>
                  </ul>
                )}
              </div>

              {/* Note Details */}
              <div>
                <p className="pb-2">
                  Note Details <span className="text-red-500">*</span>
                </p>
                <div className="relative w-[800px]">
                  <input
                    type="text"
                    value={note.noteDetails}
                    onChange={(e) =>
                      handleNoteChange(index, "noteDetails", e.target.value)
                    }
                    placeholder="Type here"
                    className="input input-bordered w-full bg-white"
                  />
                  <FaAngleDown
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => toggleDropdown("noteDetails")}
                  />
                </div>
                {/* Dropdown options for Product Type */}
                {dropdownOpen.noteDetails && (
                  <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-2">
                    <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                      Product 1
                    </li>
                    <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                      Product 2
                    </li>
                    <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                      Product 3
                    </li>
                  </ul>
                )}
              </div>

              {/* Trash Button */}
              <button
                className="bg-red-500 text-white p-2 px-4 rounded h-10 flex items-center justify-center mt-7"
                onClick={() => deleteNote(index)}
              >
                <FaRegTrashAlt />
              </button>
            </div>
          ))}

          {/* Add New Note Button */}
          <div className="flex justify-end mt-5">
            <button
              className="border border-black py-3 px-8 hover:bg-blue-300 font-semibold"
              onClick={addNote}
            >
              + Add New
            </button>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5">
        <p className="text-lg">Product Information</p>
        <div className="border p-5 my-5">
          {products.map((product, index) => (
            <div className="flex gap-2 items-center mb-4" key={index}>
              {/* Product Type */}
              <div>
                <p className="pb-2">
                  Product Type <span className="text-red-500">*</span>
                </p>
                <div className="relative w-full max-w-xs">
                  <input
                    type="text"
                    value={product.productType}
                    onChange={(e) =>
                      handleProductChange(index, "productType", e.target.value)
                    }
                    placeholder="Select ..."
                    className="input input-bordered w-full bg-white pr-10"
                  />
                  <FaAngleDown
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => toggleDropdown("productType")}
                  />
                  {/* Dropdown options for Product Type */}
                  {dropdownOpen.productType && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-2">
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                        Product 1
                      </li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                        Product 2
                      </li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                        Product 3
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* Product Name */}
              <div>
                <p className="pb-2">
                  Product Name <span className="text-red-500">*</span>
                </p>
                <div className="relative w-full max-w-xs">
                  <input
                    type="text"
                    value={product.productName}
                    onChange={(e) =>
                      handleProductChange(index, "productName", e.target.value)
                    }
                    placeholder="Type here"
                    className="input input-bordered w-full bg-white pr-10"
                  />
                  <FaAngleDown
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                    onClick={() => toggleDropdown("productName")}
                  />
                  {/* Dropdown options for Product Name */}
                  {dropdownOpen.productName && (
                    <ul className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-2">
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                        Product A
                      </li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                        Product B
                      </li>
                      <li className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                        Product C
                      </li>
                    </ul>
                  )}
                </div>
              </div>

              {/* Description */}
              <div className="w-[800px]">
                <p className="pb-2">Description</p>
                <input
                  type="text"
                  value={product.description}
                  onChange={(e) =>
                    handleProductChange(index, "description", e.target.value)
                  }
                  placeholder="Enter Description"
                  className="input input-bordered w-full bg-white"
                />
              </div>

              {/* Quantity */}
              <div>
                <p className="pb-2">
                  Quantity <span className="text-red-500">*</span>
                </p>
                <input
                  type="number"
                  value={product.quantity}
                  onChange={(e) =>
                    handleProductChange(index, "quantity", e.target.value)
                  }
                  placeholder="0"
                  className="input input-bordered w-full bg-white"
                />
              </div>

              {/* Unit Price */}
              <div>
                <p className="pb-2">
                  Unit Price <span className="text-red-500">*</span>
                </p>
                <input
                  type="number"
                  value={product.unitPrice}
                  onChange={(e) =>
                    handleProductChange(index, "unitPrice", e.target.value)
                  }
                  placeholder="0"
                  className="input input-bordered w-full bg-white"
                />
              </div>

              {/* Total */}
              <div>
                <p className="pb-2">Total</p>
                <input
                  type="text"
                  value={calculateTotal(product.quantity, product.unitPrice)}
                  readOnly
                  className="input input-bordered w-full bg-white"
                />
              </div>

              {/* Trash Button */}
              <button
                className="bg-red-500 text-white p-2 px-4 rounded h-10 flex items-center justify-center mt-7"
                onClick={() => deleteProduct(index)}
              >
                <FaRegTrashAlt />
              </button>
            </div>
          ))}

          {/* Add New Product Button */}
          <div className="flex justify-end mt-5">
            <button
              className="border border-black py-3 px-8 hover:bg-blue-300 font-semibold"
              onClick={addProduct}
            >
              + Add New
            </button>
          </div>
        </div>
      </div>

      {/* Total Amount */}
      <div className="p-5 flex justify-end border-b ">
        <div className="">
          {/* GrossTotal */}
          <div className="flex items-center mb-2">
            <p className="font-semibold mr-2">GrossTotal</p>
            <input
              type="text"
              className="input input-bordered bg-white  w-[300px]"
            />
          </div>
          {/* VAT(%) */}
          <div className="flex items-center mb-2">
            <p className="font-semibold mr-2">VAT(%)</p>
            <input
              type="text"
              className="input input-bordered bg-white  w-[300px]"
            />
          </div>
          {/* Tax Amount */}
          <div className="flex items-center mb-2">
            <p className="font-semibold mr-2">Tax Amount</p>
            <input
              type="text"
              className="input input-bordered bg-white  w-[300px]"
            />
          </div>
          {/* Tax Amount */}
          <div className="flex items-center mb-2">
            <p className="font-semibold mr-2">Tax Amount</p>
            <input
              type="text"
              className="input input-bordered bg-white  w-[300px]"
            />
          </div>
        </div>
      </div>

      {/* Save */}
      <div className="flex  justify-center my-4">
        <button className="py-3 px-7 bg-black hover:bg-gray-700 text-white font-semibold">
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNewInvoice;
