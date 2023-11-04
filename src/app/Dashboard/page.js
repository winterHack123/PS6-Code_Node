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
  return (
    <div className="flex flex-wrap justify-center">
      {group.map((group, index) => (
        <div key={group.id} className="m-4">
          <Link href={`/Dashboard/${group.name}`}>
            <button
              className={`${getGroupColor(index)} hover:${getGroupColor(index + 1)} text-white font-bold py-4 px-8 rounded-lg focus:outline-none focus:shadow-outline`}
            >
              {group.name}
            </button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Page;
