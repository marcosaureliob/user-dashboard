import { Link } from "react-router-dom";
import signUp from "../../assets/sign-up.svg";

export default function SignUp() {
  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex items-center justify-center gap-32 bg-gray-50 p-10 rounded-2xl">
        <div>
          <img src={signUp} className="h-[700px]" />
        </div>
        <div className="flex flex-col gap-10 items-center ">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-gray-800 text-4xl font-semibold">
              Create your acount
            </h1>
            <p className="text-gray-600 text-base font-light">
              Hello there! Let’s create your account.
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <input
              placeholder="Name"
              className="w-72 h-12 border border-blue-100 rounded-lg p-2 focus-visible:border-blue-300 focus:outline-none"
            />
            <input
              placeholder="Email"
              type="email"
              className="w-72 h-12 border border-blue-100 rounded-lg p-2 focus-visible:border-blue-300 focus:outline-none "
            />
            <input
              placeholder="Phone number"
              type="phone"
              className="w-72 h-12 border border-blue-100 rounded-lg p-2 focus-visible:border-blue-300 focus:outline-none "
            />
            <input
              placeholder="Password"
              className="w-72 h-12 border border-blue-100 rounded-lg p-2 focus-visible:border-blue-300 focus:outline-none "
            />
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <div className="flex items-center gap-1">
                <span className="text-gray-600 text-sm font-light">
                  I agree to Platform
                </span>
                <Link
                  to="/"
                  className="text-blue-500 text-sm font-light  cursor-pointer"
                >
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <button className="bg-blue-500 rounded-xl w-72 h-10 text-white font-semibold cursor-pointer">
              Create my account
            </button>
          </div>

          <div className="flex gap-1 items-center">
            <span className="text-base font-medium text-gray-600">
              Joined us before?
            </span>
            <Link
              to="/"
              className="text-blue-500 font-bold text-base cursor-pointer"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
