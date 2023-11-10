import Link from "next/link";
import Navbar from "@/components/Navbar//Navbar";

const page = () => {
  return (
    <div className="app" >
      <Navbar></Navbar>
      <div className="main">
    <div className="login-box">
      <h1 className="">NIT Goa Community</h1>
      <input type="text" />
      <input type="password" />
      <Link href="TandP_login">
        <button>T&P</button>
      </Link>
    </div>

    <div className="login-box">
      <h1>Student login</h1>
      <input type="text" name="" id="" placeholder="UserName" />
      <input type="password" placeholder="Password" />
    <Link href="Home">
        <button>Sign in</button>
      </Link>
      Dont Have a account?<Link href="Sign-up">Sign Up</Link>
    </div>

    </div>
    </div>
  );
};

export default page;
