import Link from "next/link"
const page = () => {
    return (
      <div><form action="">
        <h1>Login for T&P Members</h1>
          Name: <input type="text" placeholder="Name" />
          email: <input type="text" placeholder="Email" />
          Password <input type="password" name="" id="pass" /><br></br>
          <Link href=""><button>SUBMIT</button></Link>
      </form></div>
    )
  }
  
  export default page