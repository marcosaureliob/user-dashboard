import { Link } from "react-router-dom";
import bannerLogin from "../../assets/banner-login.svg";

export default function Login() {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex items-center justify-center gap-32 bg-gray-50 p-10 rounded-2xl">
        <div>
          <img src={bannerLogin} className="h-[700px]" />
        </div>
        <div className="flex flex-col gap-10 items-center ">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-gray-800 text-4xl font-semibold">Login</h1>
            <p className="text-gray-600 text-base font-light">
              Welcome back! Please enter your details.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <input
              placeholder="Email"
              className="w-72 h-10 border border-blue-100 rounded-lg p-2 focus-visible:border-blue-300 focus:outline-none"
            />
            <input
              placeholder="Password"
              className="w-72 h-10 border border-blue-100 rounded-lg p-2 focus-visible:border-blue-300 focus:outline-none "
            />
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-gray-600 text-sm font-light">
                Remember information
              </span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="bg-blue-500 rounded-xl w-72 h-10 text-white font-semibold cursor-pointer">
              Login
            </button>
            <button className="rounded-xl w-72 h-10 text-blue-500 font-semibold cursor-pointer">
              Forgot password?
            </button>
          </div>

          <div className="flex gap-1 items-center">
            <span className="text-base font-medium text-gray-600">
              First time here?
            </span>
            <Link
              to="/signup"
              className="text-blue-500 font-bold text-base cursor-pointer"
            >
              Sign up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
