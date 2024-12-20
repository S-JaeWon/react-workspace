import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { signup } from "../services/api";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: (user) => signup(user),
    onSuccess: (data) => {
      console.log("Sign up successful:", data);
      navigate("/");
      Swal.fire({
        title: "회원 가입 성공",
        text: "회원 가입 되셨습니다.",
        imageUrl: "https://unsplash.it/400/200",
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: "Custom image",
      });
    },
    onError: (error) => {
      console.log("Sign up failed:", error);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ username: name, email, password });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 p-6 bg-gray-100 rounded-lg shadow-md w-80 mx-auto"
    >
      <div className="form-control">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered"
          required
        />
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered"
          required
        />
      </div>
      <button type="submit" className="btn btn-primary">
        가입하기
      </button>
    </form>
  );
};

export default Signup;
