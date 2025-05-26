import { useState } from "react";
import "./AuthForm.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AuthForm() {
  const [isLogin, setIsLogin] = useState(true);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [firstNameError, setFirstNameError] = useState("");
  // const [lastNameError, setLastNameError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    day: "",
    month: "",
    year: "",
    country: ""
  });
 


  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const months = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  const years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i);

  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

const handleSubmit = (e) => {
  e.preventDefault();

  
  const users = JSON.parse(localStorage.getItem("users")) || [];

  if (!isLogin) {
    
    const userExists = users.find(user => user.email === formData.email);

    if (userExists) {
      console.log("User with this email already exists!");
      
       toast.error("User with this email already exists!");
      return;
    }

    
    users.push(formData);
    localStorage.setItem("users", JSON.stringify(users));
    console.log("User signed up successfully!");
    toast.success("Signup successful!");
    setIsLogin(true); 
  } else {
    
    const matchedUser = users.find(
      user => user.email === formData.email && user.password === formData.password
    );

    if (matchedUser) {
      console.log("User logged in successfully!");
      toast.success("Successfully logged in!");
    } else {
      console.log("Login failed: Invalid email or password.");
       toast.error("Login failed: Invalid email or password.");
    }
  }

  
  setFormData({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    day: "",
    month: "",
    year: "",
    country: ""
  });
};




  return (
      
      <div className="form-container">
        <h2>{isLogin ? "Login Form" : "Signup Form"}</h2>

        <div className="toggle-buttons">
          <button className={isLogin ? "active" : ""} onClick={() => setIsLogin(true)}>Login</button>
          <button className={!isLogin ? "active" : ""} onClick={() => setIsLogin(false)}>Signup</button>
        </div>

        <form className="auth-form" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <div className="grid-two">
                
                  <input
                    type="text"
                    name= "firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleChange}
                    pattern="[A-Za-z]*"
                    title="Letters only"  
                    required
                  />
                
                
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleChange}
                    pattern="[A-Za-z]*"
                    title="Letters only"
                    required
                  />
                
              </div>
              

              <label className="dob-label">Date of Birth</label>
              <div className="grid-three">
                 <select name="day" value={formData.day} onChange={handleChange} required>
                <option value="">Day</option>
                {days.map((d) => <option key={d}>{d}</option>)}
              </select>
              <select name="month" value={formData.month} onChange={handleChange} required>
                <option value="">Month</option>
                {months.map((m) => <option key={m}>{m}</option>)}
              </select>
              <select name="year" value={formData.year} onChange={handleChange} required>
                <option value="">Year</option>
                {years.map((y) => <option key={y}>{y}</option>)}
              </select>
              </div>

              <select name="country" value={formData.country} onChange={handleChange}  required>
                <option value="">Select Country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Other</option>
              </select>
            </>
          )}

          <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required/>

          <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />

          {isLogin && <a href="#" className="forgot">Forgot password?</a>}

          <button type="submit" className="submit-btn">
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="toggle-text">
          {isLogin ? "Not a member?" : "Already a member?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Signup now" : "Login now"}
          </span>
        </p>
         <ToastContainer position="top-center" autoClose={2000} />
      </div>
    
  );
}
