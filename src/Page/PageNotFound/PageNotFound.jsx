import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="bg-white h-screen">
      <div className=" pt-56  text-black">
        <p className="text-[200px] font-extrabold text-center">404</p>
        <p className="text-center text-xl">Sorry This page is not available </p>
        <div className="flex justify-center pt-5">
          <NavLink to={'/'}>
            <button className="text-xl font-bold bg-black hover:bg-gray-600 text-white py-2 px-8 rounded-xl ">
              Home
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
