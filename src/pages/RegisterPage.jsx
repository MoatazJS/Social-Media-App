import {
  addToast,
  ToastProvider,
  Button,
  Input,
  Select,
  SelectItem,
} from "@heroui/react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginPage from "./LoginPage";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { scheme } from "../schema/registerSchema";
import { registerApi } from "../services/authServices";
import { motion } from "framer-motion";

function showSuccessToast() {
  addToast({
    title: "Success",
    description: "Account created successfully!",
    color: "success",
    placement: "bottom-right",
  });
}
function showErrorToast() {
  addToast({
    title: "Error",
    description: "User already exists.",
    color: "danger",
    placement: "bottom-right",
  });
}

export default function RegisterPage() {
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      dateOfBirth: "",
      gender: "",
    },
    resolver: zodResolver(scheme),
  });

  async function handleRegister(formData) {
    setIsLoading(true);
    const data = await registerApi(formData);
    setIsLoading(false);

    if (data.error?.toLowerCase().includes("user already exists")) {
      showErrorToast();
    } else if (data.error == undefined) {
      showSuccessToast();
      setTimeout(() => {
        navigate("/login");
      }, 2000);
    }
  }

  return (
    <>
      <div className=" min-h-screen  bg-gradient-to-br from-pink-500 via-purple-500 to-red-300 flex items-center justify-center px-4 sm:px-6 md:px-10 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-10 max-w-xl w-full shadow-2xl  sm:p-10  sm:max-w-md md:max-w-lg">
          <form onSubmit={handleSubmit(handleRegister)}>
            <div className="flex flex-col gap-6">
              <h1 className="text-center text-4xl sm:text-4xl font-bold bg-gradient-to-r from-rose-500 via-orange-400 to-yellow-500 text-transparent bg-clip-text drop-shadow-lg">
                Create Account
              </h1>
              <Input
                isInvalid={Boolean(errors.name?.message)}
                errorMessage={errors.name?.message}
                variant="bordered"
                label="Name"
                type="name"
                {...register("name")}
              />
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
              <Input
                isInvalid={Boolean(errors.rePassword?.message)}
                errorMessage={errors.rePassword?.message}
                variant="bordered"
                label="Confirm Password"
                type="password"
                {...register("rePassword")}
              />
              <Input
                isInvalid={Boolean(errors.dateOfBirth?.message)}
                errorMessage={errors.dateOfBirth?.message}
                variant="bordered"
                label="Date"
                type="date"
                {...register("dateOfBirth")}
              />
              <Select
                isInvalid={Boolean(errors.gender?.message)}
                errorMessage={errors.gender?.message}
                variant="bordered"
                label="Select Gender"
                {...register("gender")}
              >
                <SelectItem key={"male"}>{"Male"}</SelectItem>
                <SelectItem key={"female"}>{"Female"}</SelectItem>
              </Select>
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
                  Register
                </Button>
              </motion.div>

              <p className="text-center font-light">
                Already have an account?{" "}
                <Link
                  className="text-blue-700 font-light underline"
                  to="/login"
                >
                  Click here to login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
