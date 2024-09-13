import { MdOutlinePinInvoke } from "react-icons/md";
import { FaFileInvoice } from "react-icons/fa";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

// Updated data with categories for By Invoices
const dataByInvoices = [
  { name: "Total Invoices", value: 400 }, // Blue
  { name: "Full Paid", value: 300 }, // Green
  { name: "Partially Paid", value: 200 }, // Orange
  { name: "Full Unpaid", value: 100 }, // Red
];

// Updated COLORS array to match the categories
const COLORS = ["#0088FE", "#00C49F", "#FF8042", "#FF0000"];

// New data for By Amount
const dataByAmount = [
  { name: "Total Invoices", value: 400 }, // Blue
  { name: "Full Paid", value: 300 }, // Green
  { name: "Partially Paid", value: 200 }, // Orange
  { name: "Full Unpaid", value: 100 }, // Red
];

const COLORS_AMOUNT = ["#0088FE", "#00C49F", "#FF8042", "#FF0000"];

const Dashboard = () => {
  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <div className="text-black mx-4">
      {/* Default Time */}
      <div className="bg-white my-2 p-4">
        <p className="text-center font-semibold">BY DEFAULT 30 DAYS DATA</p>
      </div>

      {/* Counter */}
      <div className="my-5 grid grid-cols-3 gap-4">
        {/* Invoices */}
        <div className="flex bg-white items-center justify-center py-10">
          <MdOutlinePinInvoke className="text-3xl mr-5 text-purple-500" />
          <div className="text-center">
            <p className="font-bold text-xl">286</p>
            <p>Total Invoices</p>
          </div>
        </div>

        {/* Awaiting for Approval */}
        <div className="flex bg-white items-center justify-center py-10">
          <FaFileInvoice className="text-3xl mr-5 text-orange-500" />
          <div className="text-center">
            <p className="font-bold text-xl">212</p>
            <p>Awaiting Approval</p>
          </div>
        </div>

        {/* Total Submission */}
        <div className="flex bg-white items-center justify-center py-10">
          <div className="bg-gray-200 p-2 rounded-full mr-5">
            <MdOutlinePinInvoke className="text-3xl text-blue-500" />
          </div>
          <div className="text-center">
            <p className="font-bold text-xl">74</p>
            <p>Total Submissions</p>
          </div>
        </div>

        {/* Bills Receivable */}
        <div className="flex bg-white items-center justify-center py-10">
          <FaFileInvoice className="text-3xl mr-5 text-orange-500" />
          <div className="text-center">
            <p className="font-bold text-xl">Tk. 11,056,711.00</p>
            <p>Bills Receivable</p>
          </div>
        </div>

        {/* Collection */}
        <div className="flex bg-white items-center justify-center py-10">
          <div className="bg-gray-200 p-2 rounded-full mr-5">
            <MdOutlinePinInvoke className="text-3xl text-blue-500" />
          </div>
          <div className="text-center">
            <p className="font-bold text-xl">Tk. 0.00</p>
            <p>Collection</p>
          </div>
        </div>

        {/* Current Receivable */}
        <div className="flex bg-white items-center justify-center py-10">
          <FaFileInvoice className="text-3xl mr-5 text-orange-500" />
          <div className="text-center">
            <p className="font-bold text-xl">Tk. 11,056,711.00</p>
            <p>Current Receivable</p>
          </div>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="my-5 grid grid-cols-2 gap-4">
        {/* By Invoices */}
        <div className="bg-white p-4">
          <p className="font-semibold px-5 py-4 border-b">By Invoices</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataByInvoices}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataByInvoices.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{ paddingTop: 20 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* By Amount */}
        <div className="bg-white p-4">
          <p className="font-semibold px-5 py-4 border-b">By Amount</p>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={dataByAmount}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={renderCustomizedLabel}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {dataByAmount.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS_AMOUNT[index % COLORS_AMOUNT.length]}
                    />
                  ))}
                </Pie>
                <Legend
                  layout="horizontal"
                  verticalAlign="bottom"
                  align="center"
                  wrapperStyle={{ paddingTop: 20 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Template */}
      <div className="my-5">
        <p className="pb-2">
          Template Name <span className="text-red-500 ">*</span>
        </p>
        <div>
          <select className="select select-bordered  w-2/3 bg-white">
            <option disabled selected>
              Select ....
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <button className="btn ml-2 text-white">Show</button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
