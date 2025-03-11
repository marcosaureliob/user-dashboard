import { Link } from "react-router-dom";
import login from "../../assets/login.svg";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event?.preventDefault();
    console.log("Username:", userName);
    console.log("Password:", password);

    toast.success("Login successful!");
  }

  return (
    <div className=" flex items-center justify-center h-screen">
      <div className="flex items-center justify-center gap-32 bg-gray-50 p-10 rounded-2xl">
        <div>
          <img src={login} className="h-[700px]" />
        </div>
        <div className="flex flex-col gap-10 items-center ">
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-gray-800 text-4xl font-semibold">Login</h1>
            <p className="text-gray-600 text-base font-light">
              Welcome back! Please enter your details.
            </p>
          </div>
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <input
              placeholder="Email"
              onChange={(event) => setUserName(event.target.value)}
              className="w-72 h-12 border border-blue-100 rounded-lg p-2 focus-visible:border-blue-300 focus:outline-none"
            />
            <input
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              type="password"
              className="w-72 h-12 border border-blue-100 rounded-lg p-2 focus-visible:border-blue-300 focus:outline-none "
            />
            <div className="flex gap-2 items-center">
              <input type="checkbox" className="w-4 h-4" />
              <span className="text-gray-600 text-sm font-light">
                Remember information
              </span>
            </div>

            <div className="flex flex-col gap-4 items-center justify-center">
              <button
                type="submit"
                className="bg-blue-500 rounded-xl w-72 h-10 text-white font-semibold cursor-pointer"
              >
                Login
              </button>
            </div>
          </form>

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
