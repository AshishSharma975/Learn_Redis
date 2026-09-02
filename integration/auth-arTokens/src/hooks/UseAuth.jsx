import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { axiosInstance } from "../config/axiosinstance";

export let useAuth = () => {
  let navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = async (data) => {
    try {
      let res = await axiosInstance.post("/auth/login", data);
      console.log("res from login", res);
    } catch (error) {
      console.log("error in login", error);
    }
  };

  const onRegister = async (data) => {
    try {
      let payload = {
        username: data.username || data.name,
        email: data.email,
        password: data.password,
      };
      let res = await axiosInstance.post("/auth/register", payload);
      console.log("res from the register", res);
    } catch (error) {
      console.log("error in the register", error);
    }
  };

  return {
    register,
    handleSubmit,
    errors,
    navigate,
    onLogin,
    onRegister,
  };
};