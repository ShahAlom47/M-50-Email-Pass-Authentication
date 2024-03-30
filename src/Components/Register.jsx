import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "./firebase.config";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Register = () => {
    const [logInError,setLogInError]=useState('');
    const [logInSuccess,setLogInSuccess]=useState('');
    const [showPass,setShowPass]=useState(false);


    const handelRegister = (e) => {
        setLogInError('');
        setLogInSuccess('');

        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const accepted = e.target.trams.checked;
        console.log(accepted);

        if(password.length<6){
            setLogInError('Password should be at least 6 characters')
            return;
       }
       else if(!/[A-Z]/.test(password)){
        setLogInError('Password should have  at on upper case letter ')
        return;
        }
       else if(!accepted){
        setLogInError('Please accept Our Trams ')
        return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
            
                const user = userCredential.user;
                setLogInSuccess('Create User Successfully')            
                console.log(user);
            })
            .catch((error) => {              
                const errorMessage = error.message;
                setLogInError(errorMessage)
                console.log(errorMessage);
                // ..
            });


    }



    return (
        <div>
            <h1 className="text-2xl font-semibold text-center py-2 my-4 border-b-4 w-4/12 m-auto ">Please Register </h1>

            <div className="flex justify-center items-center ">


                <form onSubmit={handelRegister} className="bg-gray-200 rounded-lg p-5 m-auto w-6/12 space-y-2 flex flex-col justify-center ">
                    <input className="p-4 rounded-lg" type="email" name="email" id="" placeholder="Enter Your Email.." required />
                    <br />
                    <div className="flex relative">
                    <input className="p-4 rounded-lg w-full" type={showPass?'text':"password"} name="password" id="" placeholder="Password" required/>
                    <p onClick={()=>{setShowPass(!showPass)}} className="absolute top-1/3 right-3" >{showPass? <FaEye/>:<FaEyeSlash/>}</p>
                    </div>
                    <br />
                    <div className=" flex items-center gap-3 ml-3 pb-2">
                        <input type="checkbox" name="trams" id="trams" />
                        <label htmlFor="trams"> <a href="#" target="blenk">Accept Our trams</a></label>
                    </div>
                    <input className="btn btn-secondary" type="submit" value="Register" />
                    {
                        logInError&& <p className="text-red-600">{logInError}</p>
                    }
                    {
                        logInSuccess&& <p className="text-green-600">{logInSuccess}</p>
                    }

                </form>
            </div>

        </div>
    );
};

export default Register;