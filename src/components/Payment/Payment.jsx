import React from "react";
import Header from "../Header/Header";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import Input from "../Input";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../features/authSlice";
import { useNavigate } from "react-router-dom";


const Payment = () => {
  const { register, handleSubmit } = useForm();
  const userData = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const submit = (data) => {
    console.log(data);
    dispatch(
      login({
        name: userData.name,        
        email: userData.email,
        number: userData.number,
        password: userData.password,
        cart: userData.cart,
        seller: userData.seller,
        BuyedProducts : userData.BuyedProducts,
        selledProducts : userData.selledProducts,
        paymentData: {
          verified: true,
          details: {
            cardName : data.name,
            cardNumber : data.cardnumber,
            cardExpiration : data.card_expiration,
            cvv : data.cvv

          },
        },
      })
    );

    alert("Payment Method Added Succesfully");
    navigate('/')
    
  };

  return (
    <div>
      <Header />
      <section className="bg-white py-8 antialiased dark:bg-gray-900 md:py-16">
        <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white sm:text-2xl">
              Payment
            </h2>

            <div className="mt-6 sm:mt-8 lg:flex lg:items-start lg:gap-12">
              <form
                onSubmit={handleSubmit(submit)}
                className="w-full rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-gray-700 dark:bg-gray-800 sm:p-6 lg:max-w-xl lg:p-8"
              >
                <div className="mb-6 grid grid-cols-2 gap-4">
                  <div className="col-span-2 sm:col-span-1">
                    <Input
                      type="text"
                      id="full_name"
                      label="Full name (as displayed on card)*"
                      labelclassName="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Bonnie Green"
                      {...register("name", {
                        required: true,
                      })}
                    />
                  </div>

                  <div className="col-span-2 sm:col-span-1">
                    <Input
                      type="text"
                      id="card_number"
                      label="Card Number"
                      labelclassName="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Bonnie Green"
                      {...register("cardnumber", {
                        required: true,
                      })}
                    />
                  </div>

                  <div>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5">
                        <svg
                          className="h-4 w-4 mt-6 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5 5a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1h1a1 1 0 0 0 1-1 1 1 0 1 1 2 0 1 1 0 0 0 1 1 2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7a2 2 0 0 1 2-2ZM3 19v-7a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Zm6.01-6a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm-10 4a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm6 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm2 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      <Input
                        datepicker
                        datepicker-format="mm/yy"
                        id="card-expiration-input"
                        type="text"
                        label="Card Expiration"
                        labelclassName="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 ps-9 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                        placeholder="12/23"
                        {...register("card_expiration", {
                          required: true,
                        })}
                      />
                    </div>
                  </div>
                  <div>
                    <Input
                      type="number"
                      id="cvv-input"
                      label="CVV"
                      labelclassName="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      aria-describedby="helper-text-explanation"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="•••"
                      {...register("cvv", {
                        required: true,
                      })}
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Pay now
                </button>
              </form>


            </div>

            <p className="mt-6 text-center text-gray-500 dark:text-gray-400 sm:mt-8 lg:text-left">
              Payment processed by{" "}
              <Link
                to=""
                title=""
                className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
              >
                Paddle
              </Link>{" "}
              for{" "}
              <Link
                to=""
                title=""
                className="font-medium text-primary-700 underline hover:no-underline dark:text-primary-500"
              >
                Flowbite LLC
              </Link>
              - United States Of America
            </p>
          </div>
        </div>
      </section>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/datepicker.min.js"></script>
    </div>
  );
};

export default Payment;
