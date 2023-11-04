import LINK from "next/link"
const page = () => {
  return (
    <div>
      <h1>SIGN UP FOR STUDENTS</h1>
      <form action="">
        Name: <input type="text" placeholder="Name" />
        email: <input type="text" placeholder="Email" />
        Password <input type="password" name="" id="pass" /><br></br>

        <LINK href="/Home/Login" ><button>SUBMIT</button></LINK>
    </form></div>

  )
}

export default page