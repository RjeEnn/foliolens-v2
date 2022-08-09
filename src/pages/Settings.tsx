import { useState } from "react";
import { RiskAssessmentModal, UserSidebar } from "../components";

const Settings = () => {
  const [riskAppetite, setRiskAppetite] = useState("4");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [salary, setSalary] = useState("");
  const [netWorth, setNetWorth] = useState("");
  const [dob, setDob] = useState("");
  const [open, setOpen] = useState(false);
  const [enableEdit, setEnableEdit] = useState(false);

  return (
    <div className="portal-page">
      <UserSidebar />
      <RiskAssessmentModal
        open={open}
        setOpen={setOpen}
        setRiskAppetite={setRiskAppetite}
      />
      <div className="portal-content flex flex-col items-center justify-center gap-4">
        <h3 className="portal-headings text-center">Profile</h3>
        <div className="w-full xl:w-1/2 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            <p>Enable Editing</p>
            <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
              <input
                type="checkbox"
                name="toggle"
                id="toggle"
                className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                checked={enableEdit}
                onChange={() => setEnableEdit(!enableEdit)}
              />
              <label
                htmlFor="toggle"
                className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"
              ></label>
            </div>
          </div>
          <p className="font-light text-sm text-center">
            Note: You will be asked to regenerate your portfolio fater updating
            your information
          </p>
        </div>
        <form className="w-full xl:w-1/2 rounded-md shadow-md p-4 bg-white">
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
            disabled={!enableEdit}
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
            disabled={!enableEdit}
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
            disabled={!enableEdit}
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
              disabled={!enableEdit}
            />
            <p>{parseInt(riskAppetite) + 1}</p>
          </div>
          <p
            className="text-center font-light text-indigo-400 hover:text-indigo-600 cursor-pointer mb-4"
            onClick={() => setOpen(true)}
          >
            Calculate estimated risk
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
            disabled={!enableEdit}
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
            disabled={!enableEdit}
          />

          <button
            type="submit"
            className="m-auto bg-[#4C35E6]"
            disabled={!enableEdit}
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Settings;
