import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const LogIn = () => {

    const [logInError, setLogInError] = useState('');
    const [logInSuccess, setLogInSuccess] = useState('');
    const [showPass, setShowPass] = useState(false);



    const handelLogin = (e) => {
        setLogInError('');
        setLogInSuccess('');

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        if (password.length < 6) {
            setLogInError('Password should be at least 6 characters')
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setLogInError('Password should have  at on upper case letter ')
            return


        }

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLogInSuccess('Create User Successfully')
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                setLogInError(errorMessage)
                console.log(errorMessage);
            });

    }

    return (
        <div>
            <h1 className="text-2xl font-semibold text-center py-2 my-4 border-b-4 w-4/12 m-auto ">Please LogIn </h1>

            <div className="flex justify-center items-center ">


                <form onSubmit={handelLogin} className="bg-gray-200 rounded-lg p-5 m-auto w-6/12 space-y-2 flex flex-col justify-center ">
                    <input className="p-4 rounded-lg" type="email" name="email" id="" placeholder="Enter Your Email..." required />
                    <br />
                    <div className="flex relative">
                        <input className="p-4 rounded-lg w-full" type={showPass ? 'text' : "password"} name="password" id="" placeholder="Password" required />
                        <p onClick={() => { setShowPass(!showPass) }} className="absolute top-1/3 right-3" >{showPass ? <FaEye /> : <FaEyeSlash />}</p>
                    </div>
                    <br />
                    <input className="btn btn-primary" type="submit" value="LogIn" />
                    {
                        logInError && <p className="text-red-600">{logInError}</p>
                    }
                    {
                        logInSuccess && <p className="text-green-600">{logInSuccess}</p>
                    }

                </form>
            </div>

        </div>
    );
};

export default LogIn;
