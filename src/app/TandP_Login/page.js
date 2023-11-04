import Link from "next/link";

const Page = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Login for T&P Members</h1>
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            type="text"
            placeholder="Name"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4"
            type="text"
            placeholder="Email"
          />
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-6"
            type="password"
            placeholder="Password"
          />
          <div className="flex items-center justify-between">
            <Link href="/Dashboard">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-4">
                Submit
              </button>
            </Link>
            <div className="items-center">
              </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Page;
