import React from "react";
import Header from "../Header/Header";
import Input from "../Input";
import { Link , useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../features/authSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);
  const { register, handleSubmit } = useForm();
  const cart = useSelector((state) => state.cart.cartItems) || [];
  const onSubmit = (data) => {

    if(data.email === userData.email || data.password === userData.password){

      dispatch(
        login({
          name: userData.username,
          email: userData.email,
          number: userData.number,
          password : userData.password,
          cart: cart,
          BuyedProducts : userData.BuyedProducts,
          selledProducts : userData.selledProducts,
          seller: userData.seller,
          paymentData: userData.paymentData
        })
      );

      alert("Login sucessfully")
      navigate('/')
    }
    else{
      alert('Please Enter valid Login info')
    }
  };

  return (
    <div className="w-full">
      <Header />
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >


                <div>
                  <Input
                    type="email"
                    label="Email"
                    {...register("email", {
                      required: true,
                      validate: {
                        matchPatern: (value) =>
                          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g.test(
                            value
                          ) || "Email address must be a valid address",
                      },
                    })}
                    labelclassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your email"
                  />
                </div>

                <div>
                  <Input
                    type="password"
                    label="Password"
                    {...register("password", {
                      required: true,
                      min: 8,
                    })}
                    labelclassName="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter you Password"
                  />
                </div>

                <div className="flex items-center justify-between">
                  <Link
                    to="/resetPassword"
                    className=" text-md font-medium text-red-500 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full text-white  bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-danger-600 dark:hover:bg-danger-700 dark:focus:ring-primary-800"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{" "}
                  <Link
                    to="/signup"
                    className="font-medium text-red-600 hover:underline dark:text-red-500"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
