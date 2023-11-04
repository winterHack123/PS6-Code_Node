import Link from "next/link"
import { group } from "@/detail"



const Page = () => {
  return (
    <div>
      {group.map((group)=>(<div>
        <Link href={`/Dashboard/${group.id}`}><button key={group.id}>{group.name}</button></Link><br></br></div>
      ))}
    </div>
  )
}

export default Page