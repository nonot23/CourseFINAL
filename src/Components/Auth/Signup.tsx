import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { signupSchema } from "./validationSchema";
import { useAuth } from "../Context/AuthCourse";

type SignupForm = z.infer<typeof signupSchema>;

const Signup = ({ 
  onClose,
  onSwitchToLogin,
  }: { 
  onClose: () => void;
  onSwitchToLogin: () => void;

   }) => {
  const { signup} = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: zodResolver(signupSchema),
  });
const onSubmit = (data: SignupForm) => {
  signup(data.email, data.password);
  onClose();
  alert("สมัครสมาชิกสำเร็จ");
};



  return (
    <>
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" >
      <form onSubmit={handleSubmit(onSubmit)} className="modal modal-open relative" >
        <button 
            type="button"
            onClick={onClose}
            className="absolute top-2 right-2  text-white hover:text-gray-700 text-2xl font-bold rounded-full p-1 transition-colors duration-300"
          >
            ✕
        </button>
        <div className="bg-white/90 border-0 p-6 rounded-lg text-center max-w-md w-full shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Sign Up</h2>
          <div className="flex flex-col gap-4 mb-4 p-5">
            <input
              {...register("email")}
              type="email"
              placeholder="Email"
              className="p-2"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            <input
              {...register("password")}
              type="password"
              placeholder="Password"
              autoComplete="new-Password"
              className="p-2"
            />
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            <input
              {...register("confirmPassword")}
              type="password"
              placeholder="Confirm Password"
              autoComplete="new-Password"
              className="p-2"
            />
            {errors.confirmPassword && (
              <p className="text-red-500">{errors.confirmPassword.message}</p>
            )}

            <button className="btn text-white bg-[var(--color-primary)] hover:bg-[var(--color-tab)]">
              Sign Up
            </button>
          </div>
          <div>
            <p className="text-sm text-gray-500">
              คุณมีมีบัญชีแล้วให้{" "}
              <span className="text-[var(--color-primary)] cursor-pointer hover:text-[var(--color-hover)]"
                onClick={() => {
                  onSwitchToLogin();
                }
                }>
                เข้าสู่ระบบ
              </span>
            </p>
          </div>
        </div>
      </form>
      </div>
    </>
  );
};

export default Signup;
