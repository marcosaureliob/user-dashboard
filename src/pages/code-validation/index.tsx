import { Link } from "react-router-dom";
import codeValidation from "../../assets/code-validation.svg";

export default function CodeValidation() {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex items-center justify-center gap-32 bg-gray-50 p-10 rounded-2xl">
        <div>
          <img src={codeValidation} className="h-[700px]" />
        </div>
        <div className="flex flex-col gap-10 items-center ">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-gray-800 text-4xl font-semibold">
              Reset password?
            </h1>
            <p className="text-gray-600 text-base font-light text-center">
              Please enter the 4 digit code sent to your <br />
              mobile number +55 (99) 99999-9999
            </p>
          </div>
          <div className="flex gap-4 items-center">
            <input className="w-10 h-12 border border-blue-100 rounded-lg p-2 focus-visible:border-blue-300 focus:outline-none" />

            <input className="w-10 h-12 border border-blue-100 rounded-lg p-2 focus-visible:border-blue-300 focus:outline-none" />

            <input className="w-10 h-12 border border-blue-100 rounded-lg p-2 focus-visible:border-blue-300 focus:outline-none" />

            <input className="w-10 h-12 border border-blue-100 rounded-lg p-2 focus-visible:border-blue-300 focus:outline-none" />
          </div>

          <div className="flex flex-col gap-4 justify-center items-center">
            <Link to="/change-password">
              <button className="bg-blue-500 rounded-xl w-72 h-10 text-white font-semibold cursor-pointer">
                Verify
              </button>
            </Link>

            <div className="flex gap-1 items-center">
              <span className="text-base font-medium text-gray-600">
                Remember the password?
              </span>
              <Link
                to="/"
                className="text-blue-500 font-bold text-base cursor-pointer"
              >
                Return
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
