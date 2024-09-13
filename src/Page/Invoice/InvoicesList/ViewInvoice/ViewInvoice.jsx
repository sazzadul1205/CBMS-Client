import { toWords } from "number-to-words";
import { IoEyeOutline } from "react-icons/io5";
import PropTypes from 'prop-types'; // Import PropTypes

const ViewInvoice = ({ invoice }) => {
  if (!invoice) {
    return <div>Loading...</div>; // Handle case when invoice data is not available
  }

  // Calculate Amount in BDT and VAT based on sales data
  const exchangeRate = 117.0; // Example exchange rate, you can modify as needed
  const totalAmountInUSD = invoice.sale.reduce(
    (total, sale) => total + sale.AmountInUSD,
    0
  );
  const totalAmountInBDT = totalAmountInUSD * exchangeRate;
  const vat = totalAmountInBDT * 0.05; // Example VAT rate of 5%
  const netTotalInBDT = totalAmountInBDT + vat;

  // Convert net total to words
  const netTotalInWords = toWords(netTotalInBDT).replace(/,/g, "");

  return (
    <div className="modal-box bg-white rounded-none max-w-[1000px] p-0">
      {/* Top section */}
      <div className="flex justify-between bg-black font-semibold text-white px-5 py-5 text-2xl">
        <p>Invoice Details</p>
        <button
          className="text-white"
          onClick={() => document.getElementById("View_Invoice").close()}
        >
          x
        </button>
      </div>
      {/* Product Section */}
      <div className="grid grid-cols-2 pt-10 mx-5 text-gray-800">
        <div className="items-center grid grid-cols-2 pb-5">
          <p className="text-lg font-semibold mr-10">Invoice Code: </p>
          <span>{invoice.id}</span>
        </div>
        <div className="items-center grid grid-cols-2 pb-5">
          <p className="text-lg font-semibold mr-10">Name: </p>
          <span>{invoice.customerName}</span>
        </div>
        <div className="items-center grid grid-cols-2 pb-5">
          <p className="text-lg font-semibold mr-10">Date: </p>
          <span>{invoice.date}</span>
        </div>
        <div className="items-center grid grid-cols-2 pb-5">
          <p className="text-lg font-semibold mr-10">Status: </p>
          <span>{invoice.status}</span>
        </div>
      </div>
      <p className="bg-gray-300 p-[1px] mx-4"></p>
      {/* Product information */}
      <div className="px-5">
        <h3 className="text-xl pt-3">Product Information</h3>
        {/* Table */}
        <div className="overflow-x-auto py-5">
          <table className="table">
            <thead className="bg-gray-400 text-black">
              <tr className="border border-black text-right">
                <th className="border border-black">SL No</th>
                <th className="border border-black">Month</th>
                <th className="border border-black">Amount in USD</th>
                <th className="border border-black">Exchange Rate (TK.)</th>
                <th className="border border-black">Amount in BDT</th>
              </tr>
            </thead>
            <tbody>
              {invoice.sale.map((sale, index) => (
                <tr className="text-right" key={index}>
                  <th className="border border-black">{index + 1}</th>
                  <td className="border border-black">{sale.Month}</td>
                  <td className="border border-black">
                    {sale.AmountInUSD.toFixed(2)}
                  </td>
                  <td className="border border-black">
                    {exchangeRate.toFixed(2)}
                  </td>
                  <td className="border border-black">
                    {(sale.AmountInUSD * exchangeRate).toFixed(2)}
                  </td>
                </tr>
              ))}
              {/* Gross Total */}
              <tr className="text-right">
                <td className="border-black border font-semibold" colSpan={4}>
                  Gross Total
                </td>
                <td className="border border-black">
                  {totalAmountInBDT.toFixed(2)}
                </td>
              </tr>
              {/* VAT */}
              <tr className="text-right">
                <td className="border-black border font-semibold" colSpan={4}>
                  VAT
                </td>
                <td className="border border-black">{vat.toFixed(2)}</td>
              </tr>
              {/* Net Total */}
              <tr className="text-right">
                <td className="border-black border font-semibold" colSpan={4}>
                  Net Total
                </td>
                <td className="border border-black font-bold">
                  {netTotalInBDT.toFixed(2)}
                </td>
              </tr>
              {/* In Words */}
              <tr className="text-right">
                <td className="border border-black font-bold" colSpan={5}>
                  [In Words: {netTotalInWords}]
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-end mb-2">
          <button className="bg-gray-400 hover:bg-gray-700 text-white px-8 py-1 flex items-center text-lg">
            <IoEyeOutline className="mr-2" />
            <p>Print</p>
          </button>
        </div>
      </div>
    </div>
  );
};

// Prop validation
ViewInvoice.propTypes = {
  id: PropTypes.string, // Adjust this based on the actual type of id
  invoice: PropTypes.shape({
    id: PropTypes.string.isRequired,
    customerName: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    sale: PropTypes.arrayOf(
      PropTypes.shape({
        Month: PropTypes.string.isRequired,
        AmountInUSD: PropTypes.number.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default ViewInvoice;
