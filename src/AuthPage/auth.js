import "../AuthPage/auth.css"
import { useEffect, useState  } from 'react';
import {auth} from "../firestore";
import { useNavigate } from "react-router-dom";
import App from '../App';
function Auth() {

    const [email, setEmail] = useState("");
    const [pswd, setPswd] = useState("");
const navigate = useNavigate();
   const loginSubmit = () => {


auth.signInWithEmailAndPassword(email,pswd).then((res) => {

    console.log(res);

    // App().setIsOpen(true);
    navigate("/dashboard");

}).catch((err) => {

    console.log(err);
})

    }


    const emailChange = (e) => {

        setEmail(e.target.value);
      
    }

    const pswdChange = (e) => {
setPswd(e.target.value);
  
    
    }
  useEffect( () => {
 

 }, []);


    return (
<div className="card-container">
<div className="main">  	
		<input type="checkbox" id="chk" aria-hidden="true"/>

			<div className="signup">
				<form>
					<label htmlFor="chk" aria-hidden="true">Sign up</label>
					<input type="text" name="txt" placeholder="User name" required=""/>
					<input type="email" name="email" placeholder="Email" required=""/>
					<input type="password" name="pswd" placeholder="Password" required=""/>
					<button>Sign up</button>
				</form>
			</div>

			<div className="login">
				<form >
					<label htmlFor="chk" aria-hidden="true">Login</label>
					<input type="email" name="email" onChange={(e) => emailChange(e)} value={email} placeholder="Email" required=""/>
					<input type="password" name="pswd" onChange={(e) => pswdChange(e)} value={pswd} placeholder="Password" required=""/>
					
				</form>
                <button onClick={() => loginSubmit()}>Login</button>
			</div>
	</div>
    </div>

    );
  }
  
  export default Auth;