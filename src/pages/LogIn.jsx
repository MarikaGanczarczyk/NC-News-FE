import React from 'react'
import { useForm } from "react-hook-form";
import './LogIn.css'

export default function LogIn() {
  const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const userData = JSON.parse(localStorage.getItem(data.email));
        if (userData) {
            if (userData.password === data.password) {
                console.log(userData.name + " You Are Successfully Logged In");
            } else {
                console.log("Email or Password is not matching with our record");
            }
        } else {
            console.log("Email or Password is not matching with our record");
        }
      }
  return (
    <div className="login-page">
  <div className="login-container">
    <div className="login-header">
      <h2 className="login-title">Welcome Back!</h2>
      <p className="login-subtitle">Sign in to continue</p>
    </div>

    <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="name">Username</label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Username is required" })}
          placeholder="Enter your username"
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && (
          <span className="error-message">{errors.name.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          {...register("email", { 
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address"
            }
          })}
          placeholder="Enter your email"
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          {...register("password", { 
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters"
            }
          })}
          placeholder="Enter your password"
          className={errors.password ? "input-error" : ""}
        />
        {errors.password && (
          <span className="error-message">{errors.password.message}</span>
        )}
      </div>

      <button type="submit" className="login-button">
        Sign In
      </button>

      <div className="login-footer">
        <p>Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </form>
  </div>
</div>
  )
}
