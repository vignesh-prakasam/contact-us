import "./App.css";

function App() {
  return (
    <>
      <div className="flex flex-col justify-start items-center min-h-screen">
        <div className="bg-white  w-full max-w-screen-sm  rounded-lg p-5">
          <h1 className="text-2xl font-bold text-black text-left mb-5">
            Contact Us
          </h1>
          <form className="">
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className=" text-left text-sm">
                    {" "}
                    First Name <span className="text-primary-green600">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    className="p-2 outline-none rounded-lg h-10  border-gray-300 custom-input"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className=" text-left text-sm">
                    {" "}
                    Last Name <span className="text-primary-green600">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    className="p-2 outline-none rounded-lg h-10  border-gray-300 custom-input"
                  />
                </div>
              </div>

              <div className="w-full flex flex-col">
                <label htmlFor="email" className=" text-left text-sm">
                  {" "}
                  Email <span className="text-primary-green600">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  className="p-2 outline-none rounded-lg h-10  border-gray-300 custom-input"
                />
              </div>

              {/* radio buttons */}
              <div className="grid grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label htmlFor="queryType1" className=" text-left text-sm">
                    Query Type <span className="text-primary-green600">*</span>
                  </label>
                  <div className=" flex flex-row justify-start px-7 space-x-3 items-center w-full custom-input rounded-md border-gray-300 h-10 ">
                    <input
                      type="radio"
                      name="queryType"
                      value="generalEnquiry"
                      id="generalEnquiry"
                      tabIndex="0"
                      className="radio rounded-full"
                    />
                    <label htmlFor="generalEnquiry" className=" text-left text-sm">
                      General Enquiry
                    </label>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className=" flex flex-row justify-start mt-5 px-7 space-x-3 items-center w-full custom-input rounded-md border-gray-300 h-10 ">
                    <input
                      type="radio"
                      name="queryType"
                      value="supportRequest"
                      tabIndex="0"
                      id="supportRequest"
                      className="radio rounded-full"
                    />
                    <label htmlFor="supportRequest" className=" text-left text-sm">
                      Support Request
                    </label>
                  </div>
                </div>
              </div>

              <div className="w-full flex flex-col">
                <label htmlFor="message" className=" text-left text-sm">
                  {" "}
                  Message <span className="text-primary-green600">*</span>
                </label>
                <textarea
                  name="message"
                  className="p-2 outline-none rounded-lg h-20  border-gray-300 custom-input"
                ></textarea>
              </div>

              <div className="w-full flex flex-row items-center">
                <input
                  type="checkbox"
                  name="terms"
                  className="checkbox"
                  id="terms"
                  tabIndex="0"
                />
                <label htmlFor="terms" className="pl-5 text-left text-sm">
                  I consent to being contacted by the team <span className="text-primary-green600">*</span>
                </label>
              </div>

              <div className="btn">
                <button className="bg-primary-green600 text-white rounded-lg w-full h-10">
                  Submit
                </button>
              </div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;