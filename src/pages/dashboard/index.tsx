import {
  Desktop,
  Hand,
  MagnifyingGlass,
  UserCheck,
  Users,
} from "@phosphor-icons/react";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-10 items-center h-screen p-20 bg-slate-200 w-full">
      <div className="flex items-center w-full justify-between">
        <div className="flex gap-2 font-medium text-3xl items-center text-slate-600">
          <h1>Hello Marcos</h1>
          <Hand />
        </div>
        <div>
          <div className="relative">
            <MagnifyingGlass
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search"
              className="text-slate-500 w-52 h-10 pl-10 pr-4 rounded-2xl bg-slate-50 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>
        </div>
      </div>
      <div className="bg-slate-50 p-10  rounded-2xl w-fit flex gap-24">
        <div className="flex gap-3 items-center">
          <div className="bg-green-200 p-5 rounded-full ">
            <Users className="text-4xl text-green-600 font-bold" />
          </div>
          <div className="flex flex-col gap-1 items-start">
            <p className="text-sm text-slate-400 font-medium">
              Total Customers
            </p>
            <h1 className="text-3xl font-semibold text-slate-600">5,423</h1>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <div className="bg-green-200 p-5 rounded-full ">
            <UserCheck className="text-4xl text-green-600 font-bold" />
          </div>
          <div className="flex flex-col gap-1 items-start">
            <p className="text-sm text-slate-400 font-medium">Members</p>
            <h1 className="text-3xl font-semibold text-slate-600">1,532</h1>
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <div className="bg-green-200 p-5 rounded-full ">
            <Desktop className="text-4xl text-green-600 font-bold" />
          </div>
          <div className="flex flex-col gap-1 items-start">
            <p className="text-sm text-slate-400 font-medium">Active now</p>
            <h1 className="text-3xl font-semibold text-slate-600">510</h1>
          </div>
        </div>
      </div>
      <div className="bg-slate-50 flex flex-col py-7 px-8 rounded-2xl gap-7 items-start">
        <div className="text-3xl font-semibold text-slate-700 ">
          All Customers
        </div>
        <table>
          <tr className="flex gap-14">
            <th className="text-md text-slate-500 font-medium">
              Costumer Name
            </th>
            <th className="text-md text-slate-500 font-medium">Company</th>
            <th className="text-md text-slate-500 font-medium">Phone number</th>
            <th className="text-md text-slate-500 font-medium">Email</th>
            <th className="text-md text-slate-500 font-medium">Country</th>
            <th className="text-md text-slate-500 font-medium">Status</th>
          </tr>
        </table>
      </div>
    </div>
  );
}
