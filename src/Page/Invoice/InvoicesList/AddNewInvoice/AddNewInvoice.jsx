import { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Select from "react-select";

const AddNewInvoice = () => {

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

  const [vatPercentage, setVatPercentage] = useState(0);
  const [taxAmount, setTaxAmount] = useState(0);
  const [grossTotal, setGrossTotal] = useState(0);
  const [netAmount, setNetAmount] = useState(0);

  const customerOptions = [
    { value: "customer1", label: "Customer 1" },
    { value: "customer2", label: "Customer 2" },
    { value: "customer3", label: "Customer 3" },
  ];

  const noteOptions = [
    { value: "note1", label: "Note 1" },
    { value: "note2", label: "Note 2" },
    { value: "note3", label: "Note 3" },
  ];

  const productOptions = [
    { value: "product1", label: "Product 1" },
    { value: "product2", label: "Product 2" },
    { value: "product3", label: "Product 3" },
  ];

  const handleSelectChange = (index, field, selectedOption) => {
    const value = selectedOption ? selectedOption.label : "";
    if (field === "noteName" || field === "noteDetails") {
      handleNoteChange(index, field, value);
    } else if (field === "productType" || field === "productName") {
      handleProductChange(index, field, value);
    }
  };

  const addNote = () => {
    setNotes([...notes, { noteName: "", noteDetails: "" }]);
  };

  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  const handleNoteChange = (index, field, value) => {
    const updatedNotes = notes.map((note, i) =>
      i === index ? { ...note, [field]: value } : note
    );
    setNotes(updatedNotes);
  };

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

  const deleteProduct = (index) => {
    setProducts(products.filter((_, i) => i !== index));
  };

  const handleProductChange = (index, field, value) => {
    const updatedProducts = products.map((product, i) =>
      i === index ? { ...product, [field]: value } : product
    );
    setProducts(updatedProducts);
  };

  const calculateTotal = (quantity, unitPrice) => {
    return (parseFloat(quantity) || 0) * (parseFloat(unitPrice) || 0);
  };

  const updateTotals = () => {
    const totalGross = products.reduce(
      (acc, product) =>
        acc + calculateTotal(product.quantity, product.unitPrice),
      0
    );
    setGrossTotal(totalGross);
    setTaxAmount((totalGross * vatPercentage) / 100);
    setNetAmount(totalGross + taxAmount);
  };

  useEffect(() => {
    updateTotals();
  }, [products, vatPercentage]);

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
          <Select
            options={customerOptions}
            placeholder="Select Customer"
            onChange={(selectedOption) =>
              handleSelectChange(null, "customerName", selectedOption)
            }
            className="w-full max-w-xs"
          />
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
                <Select
                  options={noteOptions}
                  value={noteOptions.find(
                    (option) => option.label === note.noteName
                  )}
                  placeholder="Select Note"
                  onChange={(selectedOption) =>
                    handleSelectChange(index, "noteName", selectedOption)
                  }
                  className="w-[220px]"
                />
              </div>

              {/* Note Details */}
              <div>
                <p className="pb-2">
                  Note Details <span className="text-red-500">*</span>
                </p>
                <Select
                  options={noteOptions}
                  value={noteOptions.find(
                    (option) => option.label === note.noteDetails
                  )}
                  placeholder="Select Details"
                  onChange={(selectedOption) =>
                    handleSelectChange(index, "noteDetails", selectedOption)
                  }
                  className="w-[800px]"
                />
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
                <Select
                  options={productOptions}
                  value={productOptions.find(
                    (option) => option.label === product.productType
                  )}
                  placeholder="Select Type"
                  onChange={(selectedOption) =>
                    handleSelectChange(index, "productType", selectedOption)
                  }
                  className="w-40"
                />
              </div>

              {/* Product Name */}
              <div>
                <p className="pb-2">
                  Product Name <span className="text-red-500">*</span>
                </p>
                <Select
                  options={productOptions}
                  value={productOptions.find(
                    (option) => option.label === product.productName
                  )}
                  placeholder="Select Name"
                  onChange={(selectedOption) =>
                    handleSelectChange(index, "productName", selectedOption)
                  }
                  className="w-40"
                />
              </div>

              {/* Description */}
              <div>
                <p className="pb-2">Description</p>
                <input
                  type="text"
                  value={product.description}
                  onChange={(e) =>
                    handleProductChange(index, "description", e.target.value)
                  }
                  className="input input-bordered w-full max-w-xs bg-white"
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
                  className="input input-bordered w-40 bg-white"
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
                  className="input input-bordered w-40 bg-white"
                />
              </div>

              {/* Total */}
              <div>
                <p className="pb-2">Total</p>
                <input
                  type="text"
                  value={calculateTotal(product.quantity, product.unitPrice)}
                  readOnly
                  className="input input-bordered w-40 bg-white"
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
              value={grossTotal.toFixed(2)}
              className="input input-bordered bg-white w-[300px]"
              readOnly
            />
          </div>
          {/* VAT(%) */}
          <div className="flex items-center mb-2">
            <p className="font-semibold mr-2">VAT(%)</p>
            <input
              type="number"
              value={vatPercentage}
              onChange={(e) => setVatPercentage(parseFloat(e.target.value))}
              className="input input-bordered bg-white  w-[300px]"
            />
          </div>
          {/* Tax Amount */}
          <div className="flex items-center mb-2">
            <p className="font-semibold mr-2">Tax Amount</p>
            <input
              type="number"
              value={taxAmount}
              onChange={(e) => setTaxAmount(parseFloat(e.target.value) || 0)}
              className="input input-bordered bg-white  w-[300px]"
            />
          </div>
          {/* Net Amount */}
          <div className="flex items-center mb-2">
            <p className="font-semibold mr-2">Net Amount</p>
            <input
              type="text"
              value={netAmount.toFixed(2)}
              className="input input-bordered bg-white  w-[300px]"
              readOnly
            />
          </div>
        </div>
      </div>

      {/* Save */}
      <div className="flex  justify-center my-4">
        <button
          className="py-3 px-7 bg-black hover:bg-gray-700 text-white font-semibold"
          onClick={() => document.getElementById("Add_New_Invoice").close()}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddNewInvoice;
