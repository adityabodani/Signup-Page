import React from "react";
import { SignupForm } from "./components/SignupForm";


export default function App(){
  return(
      <SignupForm />
  )
}



// import { useState } from "react";
// import "./App.css";

// function App() {
//   const [details, setDetails] = useState({
//     firstName: "",
//     lastName: "",
//     date: "",
//     month: "",
//     year: "",
//     gender: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setDetails((prev) => ({
//       ...prev,
//       [name]: value,
//     }));
//   };

//   const days = Array.from({ length: 31 }, (_, i) => i + 1);
//   const months = [
//     "January", "February", "March", "April", "May", "June",
//     "July", "August", "September", "October", "November", "December"
//   ];
//   const currentYear = new Date().getFullYear();
//   const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-blue-300 p-4">
//       <form className="bg-white shadow rounded-lg p-6 w-full max-w-md">
//         <h2 className="text-2xl font-bold text-center mb-1">Create a new account</h2>
//         <p className="text-center text-gray-600 text-sm mb-4">It's quick and easy.</p>

//         <div className="flex flex-col md:flex-row gap-2 mb-3">
//           <input
//             type="text"
//             name="firstName"
//             placeholder="First name"
//             value={details.firstName}
//             onChange={handleChange}
//             className="w-full md:flex-1 border border-gray-300 rounded px-3 py-2"
//           />
//           <input
//             type="text"
//             name="lastName"
//             placeholder="Surname"
//             value={details.lastName}
//             onChange={handleChange}
//             className="w-full md:flex-1 border border-gray-300 rounded px-3 py-2"
//           />
//         </div>

//         <div className="mb-3">
//           <label className="text-sm block mb-1">Date of birth</label>
//           <div className="flex flex-col sm:flex-row gap-2">
//             <select
//               name="date"
//               value={details.date}
//               onChange={handleChange}
//               className="w-full sm:flex-1 border border-gray-300 rounded px-2 py-2 text-sm"
//             >
//               <option value="">Day</option>
//               {days.map(day => (
//                 <option key={day} value={day}>{day}</option>
//               ))}
//             </select>

//             <select
//               name="month"
//               value={details.month}
//               onChange={handleChange}
//               className="w-full sm:flex-1 border border-gray-300 rounded px-2 py-2 text-sm"
//             >
//               <option value="">Month</option>
//               {months.map((month, idx) => (
//                 <option key={month} value={month}>{month}</option>
//               ))}
//             </select>

//             <select
//               name="year"
//               value={details.year}
//               onChange={handleChange}
//               className="w-full sm:flex-1 border border-gray-300 rounded px-2 py-2 text-sm"
//             >
//               <option value="">Year</option>
//               {years.map(year => (
//                 <option key={year} value={year}>{year}</option>
//               ))}
//             </select>
//           </div>
//         </div>

//         <div className="mb-3">
//           <label className="text-sm block mb-1">Gender</label>
//           <div className="flex flex-col sm:flex-row gap-2">
//             {["Female", "Male", "Others"].map((option) => (
//               <label
//                 key={option}
//                 className="w-full sm:flex-1 flex items-center justify-between border border-gray-300 rounded px-3 py-2 text-sm"
//               >
//                 {option}
//                 <input
//                   type="radio"
//                   name="gender"
//                   value={option}
//                   checked={details.gender === option}
//                   onChange={handleChange}
//                 />
//               </label>
//             ))}
//           </div>
//         </div>

//         <div className="mb-3">
//           <input
//             type="text"
//             name="email"
//             placeholder="Email address"
//             value={details.email}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//           />
//         </div>

//         <div className="mb-3">
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={details.password}
//             onChange={handleChange}
//             className="w-full border border-gray-300 rounded px-3 py-2"
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-green-600 text-white py-2 rounded font-bold text-lg hover:bg-green-700 transition"
//         >
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// }

// export default App;
