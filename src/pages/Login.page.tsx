import React, { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiUser, HiLockClosed } from "react-icons/hi";
import { FaSpinner } from "react-icons/fa";
import * as yup from "yup";
import { ErrorMessage, useFormik } from "formik";
import Input from "../components/Input";

interface Props {
}
const Login: React.FC<Props> = (Props) => {
  const history = useHistory();

  const { getFieldProps, handleSubmit, values, touched, isSubmitting, errors } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup.string().required().email(),
      password: yup.string().required().min(8)
    }),
    onSubmit: (data, { setSubmitting }) => {
      console.log("form submitting", data);
      setTimeout(() => {
        console.log("form submitted", data);
        history.push("/dashboard");
      }, 5000);

    },
  });



  return (
    <div className="w-1/2">
      <div className="mx-20">
        <div className="px-10 text-left">
          <div>
            <h1 className="pt-4 text-4xl font-semibold tracking-wider">Log In to <span className="text-indigo-600"> CORK</span></h1>
            <h3 className="pt-2 tracking-wider">New Here? <Link to="/signup"> <span className="text-indigo-600 underline"> Create an account </span></Link></h3>
          </div>
          <form className="mt-16"
            onSubmit={handleSubmit}>
            <div className="flex pb-2 space-x-3">
              <span>
                <HiUser className="text-indigo-600 w-7 h-7"></HiUser>
              </span>
              <Input
                type="email"
                autoComplete="email"
                required
                touched={touched.email}
                error={errors.email}
                {...getFieldProps("email")}
                placeholder="Email Address" id="email"
              />
            </div>
           
            <div className="flex pt-8 pb-2 space-x-3 ">
              <span>
                <HiLockClosed className="text-indigo-600 w-7 h-7"></HiLockClosed>
              </span>
              <Input
                type="password"
                required
                touched={touched.password}
                error={errors.password}
                autoComplete="current-password"
                {...getFieldProps("password")}
                placeholder="password" id="password"
              />
              
            </div>
          
            <div className="flex justify-between mt-8">
              <div className="space-x-2">
                <input id="show-password" name="show-password" type="checkbox" />
                <label htmlFor="show-password">Show Password</label>
              </div>
              {isSubmitting && <FaSpinner className="w-6 h-6 animate-spin"></FaSpinner>}
              <div>
                <button
                  type="submit"
                  className="items-center w-20 h-10 tracking-tight text-white bg-indigo-600 rounded-lg">Log In</button>
              </div>
            </div>
            <div className="mt-8 space-x-2 text-center">
              <input id="logged-in" name="logged-in" type="checkbox" />
              <label htmlFor="logged-in" className="text-gray-400">Keep me logged in</label>
            </div>
            <div className="mt-3 text-center">
              <Link to="/forgot-password" className="text-indigo-600 ">Forgot Password?</Link>
            </div>
            <p className="mt-10">© 2020 All Rights Reserved. <span className="text-indigo-600"> CORK</span> is a product of Designreset. <span className="text-indigo-600"> Cookie Preferences, Privacy,</span> and <span className="text-indigo-600"> Terms</span>.</p>
          </form>
        </div>
      </div>
    </div>

  );
};

Login.defaultProps = {
};

export default memo(Login);

