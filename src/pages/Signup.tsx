import { useState } from "react";
import { RiskAssessmentModal } from "../components";
import foliolensLogo from "../assets/folioLens-logo.png";

const Signup = () => {
  const [open, setOpen] = useState(false);
  const [riskAppetite, setRiskAppetite] = useState("4");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [salary, setSalary] = useState("");
  const [netWorth, setNetWorth] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      id="sign-up-page"
      className="w-full mt-[80px] partial-bg-2 flex items-center justify-center"
    >
      <RiskAssessmentModal
        open={open}
        setOpen={setOpen}
        setRiskAppetite={setRiskAppetite}
      />
      <div className="bg-white rounded-md shadow-slate-400 shadow-md my-12 px-8 py-12 w-5/6 lg:w-2/3 xl:w-2/5 flex flex-col items-center justify-center">
        <img src={foliolensLogo} alt="" className="auth-logo" />
        <h1 className="font-semibold text-3xl text-center pt-4">
          Let's Get You Signed Up
        </h1>
        <p className="font-light test-center pb-4">
          Fill in the information below to get started
        </p>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSignup(e)}
          className="w-full p-0 md:p-8"
        >
          <label htmlFor="first-name" className="form-label inline-block mb-2">
            First Name
          </label>
          <input
            type="text"
            className="form-control block w-full p-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-4 focus:bg-white focus:border-indigo-700 focus:outline-none"
            id="first-name"
            name="first-name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
          />

          <label htmlFor="last-name" className="form-label inline-block mb-2">
            Last Name
          </label>
          <input
            type="text"
            className="form-control block w-full p-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-4 focus:bg-white focus:border-indigo-700 focus:outline-none"
            id="last-name"
            name="last-name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
          />

          <label htmlFor="dob" className="form-label inline-block mb-2">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            className="form-control block w-full p-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-4 focus:bg-white focus:border-indigo-700 focus:outline-none"
          />

          <label
            htmlFor="risk-appetite"
            className="form-label inline-block mb-2"
          >
            Risk Appetite
          </label>
          <p className="font-extralight mb-4">
            (How much risk you can stomach)
          </p>
          <div className="flex gap-4 items-center">
            <input
              id="default-range"
              type="range"
              min="0"
              max="9"
              value={riskAppetite}
              onChange={(e) => setRiskAppetite(e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <p>{parseInt(riskAppetite) + 1}</p>
          </div>
          <p className="text-center font-light">
            Not sure what your risk appetite is?{" "}
            <span
              className="text-indigo-400 hover:text-indigo-600 cursor-pointer mb-4"
              onClick={() => setOpen(true)}
            >
              Get an estimation now!
            </span>
          </p>

          <label htmlFor="salary" className="form-label inline-block mb-2">
            Salary (JMD)
          </label>
          <input
            type="number"
            className="form-control block w-full p-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-4 focus:bg-white focus:border-indigo-700 focus:outline-none"
            id="salary"
            name="salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            placeholder="Salary"
          />

          <label htmlFor="net-worth" className="form-label inline-block mb-2">
            Net Worth (JMD)
          </label>
          <input
            type="number"
            className="form-control block w-full p-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-4 focus:bg-white focus:border-indigo-700 focus:outline-none"
            id="net-worth"
            name="net-worth"
            value={netWorth}
            onChange={(e) => setNetWorth(e.target.value)}
            placeholder="Net Worth"
          />

          <label htmlFor="email" className="form-label inline-block mb-2">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="form-control block w-full p-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-4 focus:bg-white focus:border-indigo-700 focus:outline-none"
          />

          <label htmlFor="password" className="form-label inline-block mb-2">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="form-control block w-full p-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-4 focus:bg-white focus:border-indigo-700 focus:outline-none"
          />

          <label
            htmlFor="confirm-password"
            className="form-label inline-block mb-2"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="form-control block w-full p-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-4 focus:bg-white focus:border-indigo-700 focus:outline-none"
          />
          <hr className="border border-slate-400 my-8" />
          <button type="submit" className="w-full bg-[#4C35E6]">
            Sign Up
          </button>
          <hr className="border border-slate-400 my-8" />
          <p className="text-center">
            Have an account?{" "}
            <a
              href="/login"
              className="text-[#4C35E6] hover:text-indigo-400 cursor-pointer mb-4"
            >
              Login
            </a>{" "}
            instead.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;