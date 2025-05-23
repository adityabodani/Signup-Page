import { useState } from "react";
import "../App.css";

export function SignupForm() {
  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    date: "",
    month: "",
    year: "",
    gender: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    // First name validation
    if (!/^[A-Za-z]+$/.test(details.firstName)) {
      newErrors.firstName = "First name should contain only letters.";
    }

    // Last name validation
    if (!/^[A-Za-z]+$/.test(details.lastName)) {
      newErrors.lastName = "Last name should contain only letters.";
    }

    // Email validation
    if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(details.email)
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("User Data:", details);
    } else {
      console.log("Validation failed");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Clear error when user starts fixing the input
    setErrors((prev) => ({ ...prev, [name]: "" }));

    setDetails((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-300 p-4">
      <form className="bg-white shadow rounded-lg p-6 w-full max-w-xl" noValidate>
        <h2 className="text-2xl font-bold text-center mb-1">Create a new account</h2>
        <p className="text-center text-gray-600 text-sm mb-4">It's quick and easy.</p>

        {/* Name Fields */}
        <div className="grid grid-cols-[repeat(auto-fit,minmax(100%,1fr))] gap-4 mb-3">
          <div>
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={details.firstName}
              onChange={handleChange}
              className={`border ${errors.firstName ? "border-red-500" : "border-gray-300"} rounded px-3 py-2 w-full`}
            />
            {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
          </div>
          <div>
            <input
              type="text"
              name="lastName"
              placeholder="Surname"
              value={details.lastName}
              onChange={handleChange}
              className={`border ${errors.lastName ? "border-red-500" : "border-gray-300"} rounded px-3 py-2 w-full`}
            />
            {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
          </div>
        </div>

        {/* Date of Birth */}
        <div className="mb-3">
          <label className="text-sm block mb-1">Date of birth</label>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(100px,1fr))] gap-4">
            <select
              name="date"
              value={details.date}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-2 text-sm"
            >
              <option value="">Day</option>
              {days.map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>

            <select
              name="month"
              value={details.month}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-2 text-sm"
            >
              <option value="">Month</option>
              {months.map((month) => (
                <option key={month} value={month}>{month}</option>
              ))}
            </select>

            <select
              name="year"
              value={details.year}
              onChange={handleChange}
              className="border border-gray-300 rounded px-2 py-2 text-sm"
            >
              <option value="">Year</option>
              {years.map((year) => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Gender */}
        <div className="mb-3">
          <label className="text-sm block mb-1">Gender</label>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-4">
            {["Female", "Male", "Others"].map((option) => (
              <label
                key={option}
                className="flex items-center justify-between border border-gray-300 rounded px-3 py-2 text-sm"
              >
                {option}
                <input
                  type="radio"
                  name="gender"
                  value={option}
                  checked={details.gender === option}
                  onChange={handleChange}
                />
              </label>
            ))}
          </div>
        </div>

        {/* Email */}
        <div className="mb-3">
          <input
            type="text"
            name="email"
            placeholder="Email address"
            value={details.email}
            onChange={handleChange}
            className={`w-full border ${errors.email ? "border-red-500" : "border-gray-300"} rounded px-3 py-2`}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
        </div>

        {/* Password */}
        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={details.password}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Submit */}
        <input
          type="submit"
          onClick={handleSubmit}
          value="Sign Up"
          className="w-full bg-green-600 text-white py-2 rounded font-bold text-lg hover:bg-green-700 transition"
        />
      </form>
    </div>
  );
}
