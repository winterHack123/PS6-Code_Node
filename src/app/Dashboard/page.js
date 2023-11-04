import Link from "next/link"
import { group } from "@/detail"



const Page = () => {
  return (
    <div>
      {group.map((group)=>(
        <h1 key={group.id}>{group.name}</h1>
      ))}
    </div>
  )
}

export default Page