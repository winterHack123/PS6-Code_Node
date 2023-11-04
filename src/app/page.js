import Link from "next/link"

const page = () => {
  return (
    <div><h1>NIT Community</h1>
    <Link href="TandP_Login"><button>T&P</button></Link><br></br>
   <Link href="Home"><button>Students</button></Link>
    </div>

  )
}

export default page