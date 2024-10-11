import "./App.css";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    queryType: "",
    message: "",
    terms: false,
  });
  const [errors, setErrors] = useState({});

  const Msg = ({ closeToast, toastProps }) => (
    <div className="font-karla">
      <h1 className="text-white text-lg font-bold text-left"> Message Sent!</h1> 
      <p className="text-sm text-left"> Thanks for completing the form. We'll be in touch soon!</p>
    </div>
  );

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = true;
    }
    if (!formData.lastName) {
      newErrors.lastName = true;
    }
    if (!formData.terms) {
      newErrors.terms = true;
    }
    if (!formData.message) {
      newErrors.message = true;
    }
    if(!formData.email) {
      newErrors.email = true;
    }
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.emailFormat = true
    }

    if(!formData.queryType) {
      newErrors.queryType = true;
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) {
      return;
    }
    
    toast(<Msg/>);
  }

  return (
    <>
      <div className="flex flex-col justify-start items-center min-h-screen mt-10">
        <div className="bg-white  w-full max-w-lg  rounded-lg p-5">
          <h1 className="text-2xl font-bold text-black text-left mb-5 ">
            Contact Us
          </h1>
          <form className="">
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className=" text-left text-sm">
                   First Name <span className="text-primary-green600">*</span>
                   
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className={`p-2 outline-none rounded-lg h-10 border-gray-300 custom-input ${errors.firstName ? "border-primary-red" : ""}`}
                    onChange={handleChange}
                />
                { errors.firstName && <p className="text-primary-red text-sm text-left mt-2">This field is required</p>}
                </div>
                
                <div className="flex flex-col">
                  <label htmlFor="lastName" className=" text-left text-sm">
                    Last Name <span className="text-primary-green600">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className={`p-2 outline-none rounded-lg h-10  border-gray-300 custom-input ${errors.lastName ? "border-primary-red" : ""}`}
                    onChange={handleChange}
                  />
                  { errors.lastName && <p className="text-primary-red text-sm text-left mt-2">This field is required</p>}
                </div>
                
              </div>

              <div className="w-full flex flex-col">
                <label htmlFor="email" className=" text-left text-sm">
                  {" "}
                  Email Address <span className="text-primary-green600">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  className={`p-2 outline-none rounded-lg h-10  border-gray-300 custom-input ${errors.email ? "border-primary-red" : ""}`}
                  onChange={handleChange}
                />
                { errors.email && <p className="text-primary-red text-sm text-left mt-2">This field is required</p>}
                { errors.emailFormat && <p className="text-primary-red text-sm text-left mt-2">Please enter a valid email address</p>}
              </div>
              

              {/* radio buttons */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="queryType1" className=" text-left text-sm">
                    Query Type <span className="text-primary-green600">*</span>
                  </label>
                  <div className=" flex flex-row justify-start px-7 space-x-3 items-center w-full custom-input rounded-md border-gray-300 h-10 group focus-within:bg-primary-green200">
                    <input
                      type="radio"
                      name="queryType"
                      value="generalEnquiry"
                      id="generalEnquiry"
                      tabIndex="0"
                      className="radio rounded-full"
                      onChange={handleChange}
                    />
                    <label htmlFor="generalEnquiry" className=" text-left text-sm">
                      General Enquiry
                    </label>
                  </div>
                  
                </div>
                <div className="flex flex-col">
                  <div className=" flex flex-row justify-start mt-5 px-7 space-x-3 items-center w-full custom-input rounded-md border-gray-300 h-10 group focus-within:bg-primary-green200">
                    <input
                      type="radio"
                      name="queryType"
                      value="supportRequest"
                      tabIndex="0"
                      id="supportRequest"
                      className="radio rounded-full"
                      onChange={handleChange}
                    />
                    <label htmlFor="supportRequest" className=" text-left text-sm">
                      Support Request
                    </label>
                  </div>
                </div>
                { errors.queryType && <p className="text-primary-red text-sm text-left">Please select a query type</p>}
              </div>
              

              <div className="w-full flex flex-col">
                <label htmlFor="message" className=" text-left text-sm">
                  {" "}
                  Message <span className="text-primary-green600">*</span>
                </label>
                <textarea
                  name="message"
                  className={`p-2 outline-none rounded-lg h-20  border-gray-300 custom-input ${errors.message ? "border-primary-red" : ""}`}
                  onChange={handleChange}
                ></textarea>
                { errors.message && <p className="text-primary-red text-sm text-left mt-2">This field is required</p>}
              </div>

              <div className="w-full flex flex-row items-center">
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox"
                  id="terms"
                  tabIndex="0"
                  onChange={handleChange}
                />
                <label htmlFor="terms" className="pl-5 text-left text-sm">
                  I consent to being contacted by the team <span className="text-primary-green600">*</span>
                </label>
              </div>
              { errors.terms && <p className="text-primary-red text-sm text-left mt-2">To submit this form, please consent to being contacted</p>}

              <div className="btn">
                <button className="bg-primary-green600 text-white rounded-lg w-full h-10 hover:bg-green-900" onClick={handleSubmit}>
                  Submit
                </button>
                  <ToastContainer
                  position="top-center"
                  autoClose={5000}
                  hideProgressBar
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable={false}
                  pauseOnHover
                  theme="dark"
                  />
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;