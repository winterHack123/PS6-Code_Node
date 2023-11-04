import Link from "next/link"
const page = () => {
  return (
    <div><Link href="/Home/Signup"><button> Sign Up</button></Link><br />
    <Link href="/Home/Login"><button>Login</button></Link></div>
  )
}

export default page