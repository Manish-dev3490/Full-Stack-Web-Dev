import { useState } from "react";
import { createRoot } from "react-dom/client";
import SignUpForm from "./SignUpForm";
import { useRef } from "react";
import { validateemail } from "../mock/validate";
import { validatepassword } from "../mock/validate";
import App from "./App";

function LoginForm() {
    const [isAccount, setIsAccount] = useState(false);
    const [isLogged, setisLogged] = useState(() => {
    const user = localStorage.getItem("currentUser");
    return user ? true : false;
});
    const email = useRef();
    const password = useRef();
    const [error, setErrors] = useState(null);
    

    function handleSubmit(e) {
        e.preventDefault();


        const allUsersStringify = localStorage.getItem("user")||null;
        const allUsers = JSON.parse(allUsersStringify);




        const emailval = email.current.value;
        const passwordval = password.current.value;


        function validateUser(userlist, emailval, passwordval) {
            return userlist? userlist.filter((user) => {
                return user.email == emailval && user.password == passwordval;
            }):"";
        }



        if (!emailval || !passwordval || emailval.length == 0 && passwordval.length == 0) {
            window.alert("please fill all fields");
            return;
        }

        const emailerror = validateemail(emailval);
        const passworderror = validatepassword(passwordval);
        const mainUser = validateUser(allUsers, emailval, passwordval);


        if (emailerror || passworderror || mainUser.length == 0) {
            setErrors({ emailerror, passworderror, mainUser });
        } else {

            setErrors(null);
            alert("login successfully");
            localStorage.setItem("currentUser", JSON.stringify(mainUser[0]));
            setisLogged(true);
        }
    }

    return (
        isLogged ? <App /> : <div className="Loginform-component">
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
                        {error?.mainUser.length==0?alert("your id and password is not matching with database"):""}
                    </form>
                </>
            )}
        </div>
    );
}

createRoot(document.getElementById("root")).render(<LoginForm />);

export default LoginForm;
