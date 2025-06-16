import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "./validationSchema";
import { z } from "zod";
import { useAuth } from "../Context/AuthCourse";


type LoginForm = z.infer<typeof loginSchema>;

const Login = ({ 
  onClose,
  onSwitchToSignup,
 }: 
 { onClose: () => void 
  onSwitchToSignup: () => void;
 }) => {
  const { login, error } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
  });
  const onSubmit = (data: LoginForm) => {
    const success = login(data.email, data.password);
    if (success) {
      onClose();
      alert("Login successful");
      window.location.reload();
    }
  };


  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" >
    <form onSubmit={handleSubmit(onSubmit)} className="modal modal-open relative">
      <button 
            type="button"
            onClick={onClose}
            className="absolute top-2 right-2  text-white hover:text-gray-700 text-2xl font-bold rounded-full p-1 transition-colors duration-300"
          >
            ✕
        </button>
      
      <div className="bg-white/90 border-0 p-6 rounded-lg text-center max-w-md w-full shadow-lg">

      <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
      
      <div className="flex flex-col gap-4 mb-4 p-5">
      <input {...register("email")} placeholder="Email" className="p-2"/>
      {errors.email && <p>{errors.email.message}</p>}

      <input {...register("password")} type="password" placeholder="Password" autoComplete='new-Password' className="p-2"/>
      {errors.password && <p>{errors.password.message}</p>}

      {error && <p className="text-red-500">{error}</p>}

      <button className='btn text-white bg-[var(--color-primary)] hover:bg-[var(--color-tab)]'>Login</button>
      </div>
      <div>
        <p className="text-sm text-gray-500">
          คุณยังไม่มีบัญชีให้กด{" "}
          <span
            className="text-[var(--color-primary)] cursor-pointer hover:text-[var(--color-hover)]"
            onClick={onSwitchToSignup}
          >
            สมัครสมาชิก
          </span>
        </p>
      </div>
      </div>
    </form>
    </div>
  );
}

export default Login;