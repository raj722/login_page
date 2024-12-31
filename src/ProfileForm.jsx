import React from "react";
import { useForm } from "react-hook-form";
import { useUser } from "./UserContext";
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
  const { user, updateUser } = useUser();
  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: user
  });
  const navigate = useNavigate();

  const onSubmit = (data) => {
    updateUser(data);
    navigate("/profile"); // Navigate to the Profile page after submission
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            id="name"
            {...register("name", { required: "Name is required", minLength: { value: 3, message: "Name must be at least 3 characters" } })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
          <input
            id="email"
            {...register("email", { 
              required: "Email is required", 
              pattern: { value: /^\S+@\S+$/, message: "Invalid email format" }
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label htmlFor="age" className="block text-sm font-medium text-gray-700">Age</label>
          <input
            id="age"
            type="number"
            {...register("age", { 
              required: "Age is required", 
              min: { value: 18, message: "Age must be at least 18" }, 
              max: { value: 100, message: "Age must be less than 100" } 
            })}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md"
          />
          {errors.age && <p className="text-red-500 text-sm">{errors.age.message}</p>}
        </div>

        <button type="submit" className="mt-4 w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default ProfileForm;
