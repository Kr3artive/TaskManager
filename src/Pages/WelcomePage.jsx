import { Link } from "react-router-dom";
import { useState } from "react";
import { useUser } from "../contexts/UserDetails";

const WelcomePage = () => {
  const { name, setName, email, setEmail, occupation, setOccupation } = useUser();
  const [errors, setErrors] = useState({ name: "", email: "", occupation: "" });

  const validateName = (value) => {
    if (!value.trim()) return "Name cannot be empty.";
    if (value.trim().length < 3) return "Name must be at least 3 characters long.";
    return "";
  };

  const validateEmail = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!value.trim()) return "Email cannot be empty.";
    if (!emailRegex.test(value)) return "Invalid email address.";
    return "";
  };

  const validateOccupation = (value) => {
    if (!value.trim()) return "Occupation cannot be empty.";
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;


    if (name === "name") setName(value);
    if (name === "email") setEmail(value);
    if (name === "occupation") setOccupation(value);

    let error = "";
    if (name === "name") error = validateName(value);
    if (name === "email") error = validateEmail(value);
    if (name === "occupation") error = validateOccupation(value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: error,
    }));
  };

  const isValid = !errors.name && !errors.email && !errors.occupation && name && email && occupation;

  const handleSubmit = () => {
    // Logic to handle form submission
  };

  return (
    <div className="flex p-2 justify-center items-center min-h-screen bg-gradient-to-r from-purple-100 to-purple-300">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center text-black mb-6">
          Please Input Your Details
        </h1>
        
        <div className="mb-4">
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your name"
            className={`w-full px-4 py-2 border ${
              errors.name ? "border-red-500" : "border-black"
            } rounded-lg focus:outline-none focus:ring-2 ${
              errors.name ? "focus:ring-red-500" : "focus:ring-purple-500"
            }`}
          />
          {errors.name && <p className="text-red-500 text-sm mt-2">{errors.name}</p>}
        </div>

        <div className="mb-4">
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Your email"
            className={`w-full px-4 py-2 border ${
              errors.email ? "border-red-500" : "border-black"
            } rounded-lg focus:outline-none focus:ring-2 ${
              errors.email ? "focus:ring-red-500" : "focus:ring-purple-500"
            }`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-2">{errors.email}</p>}
        </div>

        <div className="mb-4">
          <input
            type="text"
            name="occupation"
            value={occupation}
            onChange={handleChange}
            placeholder="Your occupation"
            className={`w-full px-4 py-2 border ${
              errors.occupation ? "border-red-500" : "border-black"
            } rounded-lg focus:outline-none focus:ring-2 ${
              errors.occupation ? "focus:ring-red-500" : "focus:ring-purple-500"
            }`}
          />
          {errors.occupation && <p className="text-red-500 text-sm mt-2">{errors.occupation}</p>}
        </div>

        <Link
          to={"/home"}
          onClick={handleSubmit}
          className={`block w-full bg-purple-700 text-white text-center py-2 px-4 rounded-lg transition-all duration-200 ${
            !isValid ? "opacity-50 pointer-events-none" : "hover:bg-purple-900"
          }`}
        >
          Set Task
        </Link>
      </div>
    </div>
  );
};

export default WelcomePage;
