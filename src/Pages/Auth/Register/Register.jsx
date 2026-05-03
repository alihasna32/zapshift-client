import React from "react";
import { useForm } from "react-hook-form";
import { UseAuth } from "../../../Hooks/UseAuth";
import { Link, useLocation, useNavigate } from "react-router";
import { SocialLogin } from "../Social Login/SocialLogin";
import axios from "axios";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

export const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { registerUser, updateUserProfile } = UseAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();
  const handleRegisteration = (data) => {
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then(() => {
        // Upload profile image to imgbb
        const formData = new FormData();
        formData.append("image", profileImg);
        // Replace image with your actual imgbb API key
        const imageAPIURL = `https://api.imgbb.com/1/upload?expiration=600&key=${import.meta.env.VITE_imageBB}`;
        axios.post(imageAPIURL, formData)
        .then((response) => {
          const imageURL = response.data.data.display_url;

          const userInfo = {
            email: data.email,
            displayName: data.name,
            photoURL: imageURL,
          }
          axiosSecure.post('/users', userInfo)
          .then(res => {
            if(res.data.insertedId){
              console.log('user created in the database');
              
            }
          })

          const updatedUser = {
            displayName: data.name,
            photoURL: imageURL,
          };  
          // Update user profile with name and photo URL
          updateUserProfile(updatedUser)
          .then(()  => {
            console.log("User profile updated successfully");
            navigate(location?.state || '/')
          })
          .catch((error) => {   
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  });}
  return (
    <div className="w-full mx-auto">
    <h3 className="text-3xl text-center">Welcome Back</h3>
    <p className="text-center">Please Registration</p>
      <form onSubmit={handleSubmit(handleRegisteration)}>
        <fieldset className="fieldset">
          <label className="label">Name</label>
          <input
            type="text"
            {...register("name", { required: true })}
            className="input w-full"
            placeholder="Your Name"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Name is required</p>
          )}

          <label className="label">Name</label>
          <input
            type="file"
            {...register("photo", { required: true })}
            className="file-input w-full"
            placeholder="Your Photo"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Photo is required</p>
          )}

          <label className="label">Email</label>
          <input
            type="email"
            {...register("email", { required: true })}
            className="input w-full"
            placeholder="Email"
          />
          {errors.email?.type === "required" && (
            <p className="text-red-500">Email is required</p>
          )}

          <label className="label">Password</label>
          <input
            type="password"
            {...register("password", {
              required: true,
              minLength: 6,
              pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
            })}
            className="input w-full"
            placeholder="Password"
          />
          {errors.password?.type === "required" && (
            <p className="text-red-500">Password is required</p>
          )}
          {errors.password?.type === "minLength" && (
            <p className="text-red-500">
              Password must be at least 6 characters
            </p>
          )}
          {errors.password?.type === "pattern" && (
            <p className="text-red-500">Password must contain only letters</p>
          )}

          <div>
            <a className="link link-hover">Forgot password?</a>
          </div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
        <p>Already have an account? <Link state={location.state} className="text-blue-400 underline" to="/login">Login</Link></p>
      </form>
      <SocialLogin></SocialLogin>
    </div>
  );
};
