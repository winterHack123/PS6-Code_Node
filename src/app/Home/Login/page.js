import LINK from "next/link"
const page = () => {
  return (
    <div>
      <h1>LOGIN FOR STUDENTS</h1>
      <form action="">
        Name: <input type="text" placeholder="Name" />
        Password <input type="password" name="" id="pass" /><br></br>
        <LINK href="/DashboardS" ><button>SUBMIT</button></LINK>
        <LINK href="/Home/Signup"><button>SIGN UP</button></LINK>
        <LINK href="/"><button>HOME</button></LINK>
    </form></div>

  )
}

export default page