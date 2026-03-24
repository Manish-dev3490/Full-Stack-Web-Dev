import { useState } from "react";
import { createRoot } from "react-dom/client";
import SignUpForm from "./SignUpForm";
import { useRef } from "react";
import { validateemail } from "../mock/validate";
import { validatepassword } from "../mock/validate";
import App from "./App";

function LoginForm() {
    const [isAccount, setIsAccount] = useState(false);
    const [isLogged,setisLogged]=useState(false);
    const email = useRef();
    const password = useRef();
    const [error, setErrors] = useState(null);

    function handleSubmit(e) {
        e.preventDefault();

        

        const emailval = email.current.value;
        const passwordval = password.current.value;

        if (!emailval || !passwordval || emailval.length==0 && passwordval.length==0) {
            window.alert("please fill all fields");
            return;
        }

        const emailerror = validateemail(emailval);
        const passworderror = validatepassword(passwordval);
        if (emailerror || passworderror) {
            setErrors({ emailerror, passworderror });
        } else {
            setErrors(null);
            alert("login successfully");
            setisLogged(true);
        }
    }

    return (
      isLogged?<App/>: <div className="Loginform-component">
            {isAccount ? (
                <SignUpForm accountInfo={isAccount} accountFun={setIsAccount} logged={isLogged} setlogged={setisLogged} />
            ) : (
                <>
                    {" "}
                    <h2>Login Form </h2>
                    <form className="form-box" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="first">Email :</label>
                            <input
                                id="first"
                                ref={email}
                                type="email"
                                placeholder="enter your email"
                            />
                            {error?.emailerror && <p>{error.emailerror}</p>}
                        </div>

                        <div>
                            <label htmlFor="second">Password :</label>
                            <input
                                id="second"
                                ref={password}
                                type="password"
                                placeholder="enter your password"
                            />
                            {error?.passworderror && <p>{error.passworderror}</p>}
                        </div>

                        <button type="submit">Login</button>
                        <button
                            onClick={() => {
                                setIsAccount(true);
                            }}
                        >
                            Sign up if you don't have account
                        </button>
                    </form>
                </>
            )}
        </div>
    );
}

createRoot(document.getElementById("root")).render(<LoginForm />);

export default LoginForm;
