import LINK from "next/link"
const page = () => {
    return (
      <div><form action="">
        <h1>Login for T&P Members</h1>
          Name: <input type="text" placeholder="Name" />
          email: <input type="text" placeholder="Email" />
          Password <input type="password" name="" id="pass" /><br></br>
          <LINK href=""><button>SUBMIT</button></LINK>
          <LINK href="/"><button>HOME</button></LINK>
      </form></div>
    )
  }
  
  export default page