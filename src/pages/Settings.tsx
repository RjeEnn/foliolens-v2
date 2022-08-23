import { useState, useEffect } from "react";
import {
  RegenerationConfirmation,
  RiskAssessmentModal,
  UserSidebar,
} from "../components";
import corner from "../assets/corner.png";
import { useAuth } from "../components/auth/Auth";
import { UpdateForm, updateUser } from "../services/GeneratePortfolioServices";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Settings = () => {
  const [riskAppetite, setRiskAppetite] = useState("4");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [salary, setSalary] = useState("");
  const [netWorth, setNetWorth] = useState("");
  const [dob, setDob] = useState("");

  const [open, setOpen] = useState(false);
  const [regenOpen, setRegenOpen] = useState(false);
  const [enableEdit, setEnableEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const auth = useAuth();

  useEffect(() => {
    if (auth?.user) {
      const user = auth.user;
      setFirstName(user.firstName);
      setLastName(user.lastName);
      setSalary(user.salary.toString());
      setNetWorth(user.netWorth.toString());
      setDob(user.dob.substring(0, 10));
      setRiskAppetite((user.riskRating - 1).toString());
    }
  }, [auth?.user]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (parseFloat(netWorth) >= parseFloat(salary)) {
      setLoading(true);

      if (auth?.user) {
        const body: UpdateForm = {
          firstName,
          lastName,
          dob: new Date(dob),
          salary: parseFloat(salary),
          netWorth: parseFloat(netWorth),
          riskRating: parseInt(riskAppetite) + 1,
        };

        const user = await updateUser(body, auth.user.id);

        if (user) {
          auth?.setUser(user);
        } else {
          toast.error("Oops, something went wrong.", {
            position: "top-center",
            autoClose: 10000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      }
      setLoading(false);
    }
    setEnableEdit(false);
  };

  return (
    <div className="portal-page">
      <UserSidebar />
      <RiskAssessmentModal
        open={open}
        setOpen={setOpen}
        setRiskAppetite={setRiskAppetite}
      />
      <RegenerationConfirmation open={regenOpen} setOpen={setRegenOpen} />
      <img
        src={corner}
        alt="corner"
        className="fixed bottom-0 right-0 h-80 w-80 lg:w-1/2 lg:h-auto opacity-50 z-10"
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
        <form
          className="w-full xl:w-1/2 rounded-md shadow-md p-4 bg-white z-10"
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSubmit(e)}
        >
          <label htmlFor="first-name" className="form-label inline-block mb-2">
            First Name
          </label>
          <input
            required
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
            required
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
            required
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
              required
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
            required
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
            required
            type="number"
            className="form-control block w-full p-1.5 text-base font-normal bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 mb-4 focus:bg-white focus:border-indigo-700 focus:outline-none"
            id="net-worth"
            name="net-worth"
            value={netWorth}
            onChange={(e) => setNetWorth(e.target.value)}
            placeholder="Net Worth"
            disabled={!enableEdit}
          />
          {parseFloat(netWorth) < parseFloat(salary) ? (
            <p className="text-sm text-red-600 italic mb-2">
              Net worth cannot be less than salary
            </p>
          ) : (
            ""
          )}

          <button
            type="submit"
            className="m-auto bg-[#4C35E6]"
            disabled={!enableEdit || loading}
          >
            {loading ? (
              <div className="w-6 h-6 m-auto border-b-2 border-white rounded-full animate-spin"></div>
            ) : (
              "Update Profile"
            )}
          </button>
        </form>
        {auth?.user?.updated ? (
          <div className="w-full flex items-center justify-center mt-4">
            <p className="text-center text-lg font-medium z-10">
              We noticed that you updated your profile, wanna{" "}
              <span
                onClick={() => setRegenOpen(true)}
                className="text-orange-600 cursor-pointer hover:underline"
              >
                regenerate your portfolio?
              </span>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={10000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Settings;
