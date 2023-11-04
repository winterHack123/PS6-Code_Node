import Link from "next/link";

const Page = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link href="/Home/Signup">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4">
          Sign Up
        </button>
      </Link>
      <Link href="/Home/Login">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          Login
        </button>
      </Link>
    </div>
  );
};

export default Page;
