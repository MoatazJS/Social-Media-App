import {
  addToast,
  ToastProvider,
  Button,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterPage from "./RegisterPage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "../schema/loginSchema";
import { loginApi } from "../services/authServices";
import { motion } from "framer-motion";
import AuthContextProvider, { authContext } from "../contexts/AuthContext";

function showSuccessToast() {
  addToast({
    title: "Success",
    description: "Logged In Successfully",
    color: "success",
    placement: "bottom-right",
  });
}
function showErrorToast() {
  addToast({
    title: "Error",
    description: "Invalid Email or Password. Please Try Again.",
    color: "danger",
    placement: "bottom-right",
  });
}

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const { setIsLoggedIn } = useContext(authContext);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: zodResolver(loginSchema),
  });
  async function handleLogin(formData) {
    setIsLoading(true);
    const data = await loginApi(formData);
    setIsLoading(false);

    if (data?.error) {
      showErrorToast();
    } else {
      showSuccessToast();
      localStorage.setItem("token", data.token);
      setIsLoggedIn(true);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  }
  return (
    <>
      <div className=" min-h-screen  bg-gradient-to-br from-pink-500 via-purple-500 to-red-300 flex items-center justify-center px-4 sm:px-6 md:px-10 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 max-w-xl w-full shadow-2xl sm:p-10  sm:max-w-md md:max-w-lg ">
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="flex flex-col gap-6">
              <h1 className="text-center text-4xl sm:text-4xl font-bold bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg py-5">
                Login
              </h1>

              <Input
                isInvalid={Boolean(errors.email?.message)}
                errorMessage={errors.email?.message}
                variant="bordered"
                label="Email"
                type="email"
                {...register("email")}
              />
              <Input
                isInvalid={Boolean(errors.password?.message)}
                errorMessage={errors.password?.message}
                variant="bordered"
                label="Password"
                type="password"
                {...register("password")}
              />

              <motion.div
                className="p-[2px] rounded-xl overflow-hidden"
                initial={{ backgroundPosition: "0% 50%" }}
                animate={{ backgroundPosition: "200% 50%" }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  backgroundImage:
                    "linear-gradient(270deg, #c084fc, #ec4899, #ef4444)",
                  backgroundSize: "400% 400%",
                }}
              >
                <Button
                  isLoading={isLoading}
                  type="submit"
                  color="primary"
                  variant="solid"
                  className="w-full bg-white text-black dark:bg-gray-800 dark:text-white"
                >
                  Login
                </Button>
              </motion.div>

              <p className="text-center font-light">
                Don't have an account, yet?{" "}
                <Link
                  className="text-blue-700 font-light underline"
                  to="/register"
                >
                  Create an account.
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
