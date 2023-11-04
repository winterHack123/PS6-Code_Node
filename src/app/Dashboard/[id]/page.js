import { group } from "@/detail"

const page = () => {

    {group.map((group)=>(
    <div><h1>{group.members}</h1></div>))}
  
    }

export default page