import Link from "next/link";
import { group } from "@/detail";

const getGroupColor = (index) => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-yellow-500",
    "bg-red-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-gray-500",
  ];

  return colors[index % colors.length];
};

const Page = () => {
  return (<><h1 className="text-3xl font-bold mb-4 text-center">Communities</h1>
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 justify-center">
      
      {group.map((group, index) => (
        <div key={group.id} className="m-4">
          <Link href={`/Dashboard/${group.name}`}>
            <button
              className={`${getGroupColor(index)} hover:${getGroupColor(index + 1)} text-white font-bold py-8 px-12 rounded-lg focus:outline-none focus:shadow-outline w-full`}
            >
              {group.name}
            </button>
          </Link>
        </div>
      ))}
    </div></>
  );
};

export default Page;
