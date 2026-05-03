import React from "react";
import { useForm} from "react-hook-form"
import { UseAuth } from "../../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import { SocialLogin } from "../Social Login/SocialLogin";
export const Login = () => {
  const {register, handleSubmit, formState: { errors }} = useForm()
  const { signInUser } = UseAuth(); 
  const location = useLocation();
  const navigate = useNavigate()
  const handleLogin = (data) => {
    console.log(data);
    signInUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(location?.state || '/')
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div className="w-full mx-auto">
    <h3 className="text-3xl text-center">Welcome Back</h3>
    <p className="text-center">Please Login</p>
      <form onSubmit={handleSubmit(handleLogin)}>
        <fieldset className="fieldset">
          <label className="label">Email</label>
          <input type="email" {...register('email', {required:true, })} className="input w-full" placeholder="Email" />
          {errors.email?.type === 'required' && <p className="text-red-500">Email is required</p>}

          <label className="label">Password</label>
          <input type="password" {...register('password', {required: true, minLength: 6})} className="input w-full" placeholder="Password" />
          {errors.password?.type === 'required' && <p className="text-red-500">Password is required</p>}
          {errors.password?.type === 'minLength' && <p className="text-red-500">Password must be at least 6 characters</p>}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
        <p>New to Zap shift? <Link state={location.state} className="text-blue-400 underline" to="/register">Register</Link></p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};
