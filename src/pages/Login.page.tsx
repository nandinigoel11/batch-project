import React, { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiUser, HiLockClosed } from "react-icons/hi";
import {FaSpinner} from "react-icons/fa";
import { useState } from "react";
import * as yup from "yup";

interface Props {
}
const Login: React.FC<Props> = (Props) => {
  const [data, setData] = useState({ email: "", password: "" });
  const [touched, setTouched] = useState({ email: false, password: false });
  const [submitting,setSubmitting] = useState(false);

  const history = useHistory();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleblur = (event: React.FocusEvent<HTMLInputElement>) => {
    const nameofBlurredInput = event.target.name;
    setTouched({ ...touched, [nameofBlurredInput]: true });
  };

  let emailError = "";
  let passwordError = "";

  const formValidator = yup.object().shape({
    email: yup.string().required().email(),
    password: yup.string().required().min(8),
  });

  try{
    formValidator.validateSync(data);
  }catch(e){
    console.log(e.message);
  }

  // if (!data.email) {
  //   emailError = "Email Address is required";
  // } else if (!data.email.endsWith("@gmail.com")) {
  //   emailError = "please enter a valid email address";
  // }

  // if (!data.password) {
  //   passwordError = "password is required";
  // } else if (data.password.length < 8) {
  //   passwordError = "password should be of atleast 8 character";
  // }

  return (
    <div className="w-1/2">
      <div className="mx-20">
        <div className="px-10 text-left">
          <div>
            <h1 className="pt-4 text-4xl font-semibold tracking-wider">Log In to <span className="text-indigo-600"> CORK</span></h1>
            <h3 className="pt-2 tracking-wider">New Here? <Link to="/signup"> <span className="text-indigo-600 underline"> Create an account </span></Link></h3>
          </div>
          <form className="mt-16" onSubmit={(event) => {
            event.preventDefault();
            if (emailError || passwordError) {
              return;
            }
            setSubmitting(true);
            setTimeout(() => {
              console.log(data);
              history.push("/dashboard");
  
            },5000)
           
          }}>
            <div className="flex pb-4 space-x-3">
              <span>
                <HiUser className="text-indigo-600 w-7 h-7"></HiUser>
              </span>
              <label htmlFor="e-mail" className="sr-only">Email Address</label>
              <input type="email"
                autoComplete="email"
                required
                value={data.email}
                onChange={handleChange}
                onBlur={handleblur}
                placeholder="Email Address" id="email" name="email" className="w-full outline-none" />
            </div>
            <hr />
            {touched.email && <div className="text-red-500">{emailError}</div>}
            <div className="flex pt-8 pb-4 space-x-3 ">
              <span>
                <HiLockClosed className="text-indigo-600 w-7 h-7"></HiLockClosed>
              </span>
              <label htmlFor="password" className="sr-only">password</label>
              <input type="password"
                required
                autoComplete="current-password"
                value={data.password}
                onChange={handleChange}
                onBlur={handleblur}
                placeholder="password" id="password" name="password" className="w-full outline-none" />
            </div>
            <hr />
            {touched.password && <div className="text-red-500">{passwordError}</div>}
            <div className="flex justify-between mt-10">
              <div className="space-x-2">
                <input id="show-password" name="show-password" type="checkbox" />
                <label htmlFor="show-password">Show Password</label>
              </div>
              {submitting && <FaSpinner className="w-6 h-6 animate-spin"></FaSpinner>}
              <div>
                <button
                  type="submit"
                  className="items-center w-20 h-10 tracking-tight text-white bg-indigo-600 rounded-lg">Log In</button>
              </div>
            </div>
            <div className="mt-10 space-x-2 text-center">
              <input id="logged-in" name="logged-in" type="checkbox" />
              <label htmlFor="logged-in" className="text-gray-400">Keep me logged in</label>
            </div>
            <div className="mt-5 text-center">
              <Link to="/forgot-password" className="text-indigo-600 ">Forgot Password?</Link>
            </div>
            <p className="mt-12">© 2020 All Rights Reserved. <span className="text-indigo-600"> CORK</span> is a product of Designreset. <span className="text-indigo-600"> Cookie Preferences, Privacy,</span> and <span className="text-indigo-600"> Terms</span>.</p>
          </form>
        </div>
      </div>
    </div>
    // <div>
    //   This is login page. <br />
    //   Don't have an account? <Link to="/signup"><span className="text-indigo-400 underline"> Click here </span></Link> <br />
    //   <Link to="/dashboard"><span className="text-indigo-400 underline">Go to dashboard.</span></Link>
    // </div>
  );
};

Login.defaultProps = {
};

export default memo(Login);

