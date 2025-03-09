import { Link } from "react-router-dom";

export default function TermsOfServices() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center gap-5 bg-gray-50 p-10 rounded-2xl max-w-2xl">
        <h1 className="text-gray-800 text-4xl font-semibold">
          Terms of Service
        </h1>

        <div className="text-gray-600 text-base max-h-96 overflow-y-auto p-4 border border-gray-200 rounded-lg w-full">
          <p className="mb-4">
            By using our services, you agree to the following terms and
            conditions. We reserve the right to update or modify these terms at
            any time.
          </p>
          <p className="mb-4">
            You must be at least 18 years old to use this service. You are
            responsible for maintaining the confidentiality of your account and
            password.
          </p>
          <p className="mb-4">
            Unauthorized use of our services may result in suspension or
            termination of your account. Any misuse, hacking, or data scraping
            is strictly prohibited.
          </p>
          <p className="mb-4">
            We are not responsible for any loss or damage arising from your use
            of the service. Use at your own risk.
          </p>
          <p>
            If you have any questions regarding these terms, please contact our
            support team.
          </p>
        </div>

        <div className="flex gap-1 items-center">
          <span className="text-base font-medium text-gray-600">Go back?</span>
          <Link
            to="/"
            className="text-blue-500 font-bold text-base cursor-pointer"
          >
            Return
          </Link>
        </div>
      </div>
    </div>
  );
}
