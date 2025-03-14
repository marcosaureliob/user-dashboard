import { Link } from "react-router-dom";
import forgotPassword from "../../assets/forgot-password.svg";

export default function ForgotPassword() {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex items-center justify-center gap-32 bg-gray-50 p-10 rounded-2xl">
        <div>
          <img src={forgotPassword} className="h-[700px]" />
        </div>
        <div className="flex flex-col gap-10 items-center ">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-gray-800 text-4xl font-semibold">
              Forgot password?
            </h1>
            <p className="text-gray-600 text-base font-light text-center">
              Don’t worry! It’s happens. Please enter the email address <br />
              associated with your account.
            </p>
          </div>
          <div className="flex flex-col gap-8 items-center">
            <input
              placeholder="Insert email address / mobile number"
              className="w-72 h-12 border border-blue-100 rounded-lg p-2 focus-visible:border-blue-300 focus:outline-none"
            />

            <Link to="/code-validation">
              <button className="bg-blue-500 rounded-xl w-72 h-10 text-white font-semibold cursor-pointer">
                Submit
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
