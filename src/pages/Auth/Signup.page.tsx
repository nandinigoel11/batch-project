import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { HiUser, HiLockClosed } from "react-icons/hi";
import Input from "../../components/Input/Input";
import { ErrorMessage, useFormik } from "formik";
import * as yup from "yup";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

interface Props {
}
const Signup: FC<Props> = (Props) => {
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
            <h1 className="pt-4 text-4xl font-semibold tracking-wider text-gray-700">Get started with a
              free account </h1>
            <h3 className="pt-3 text-gray-700"> Already have an account?<Link to="/login"> <span className="text-indigo-600 underline"> Log in </span></Link></h3>
          </div>
          <form className="mt-16"
            onSubmit={handleSubmit}>
            <Input
            theme="primary"
              Icon={HiUser}
              type="email"
              autoComplete="email"
              required
              touched={touched.email}
              error={errors.email}
              {...getFieldProps("email")}
              placeholder="Email Address" id="email"
            />
            <div className="pt-8 ">
              <Input
              theme="primary"
                Icon={HiLockClosed}
                type="password"
                required
                touched={touched.password}
                error={errors.password}
                autoComplete="current-password"
                {...getFieldProps("password")}
                placeholder="password" id="password"
              />
            </div>
            <div className="mt-8 space-x-2 text-left">
              <input id="terms-and-cond" name="terms-and-cond" type="checkbox" />
              <label htmlFor="terms-and-cond" className="text-gray-400">I agree to the <span className="text-indigo-600">terms and conditions</span></label>
            </div>
            <div className="flex items-center justify-between mt-6">
              <div className="space-x-2 ">
                <input id="show-password" name="show-password" type="checkbox" />
                <label htmlFor="show-password">Show Password</label>
              </div>
              <PrimaryButton type="submit" className="h-10 type-submit w-28">Get Started!</PrimaryButton>
            </div>
          </form>
          <p className="mt-12 text-center">© 2020 All Rights Reserved. <span className="text-indigo-600"> CORK</span> is a product of Designreset. <span className="text-indigo-600"> Cookie Preferences, Privacy,</span> and <span className="text-indigo-600"> Terms</span>.</p>
        </div>
      </div>
    </div>


  );
};

Signup.defaultProps = {
};

export default memo(Signup);

{/* <div>
     This is signup page. <br />
     Already have an account. <Link to="/login"><span className="text-indigo-400 underline"> Click here</span> </Link>
     </div>  */}