import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import foliolensLogo from "../assets/folioLens-logo.png";
import { useAuth } from "../components/auth/Auth";
import { login } from "../services/AuthServices";

const Signin = () => {
  const auth = useAuth();
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    if (auth) {
      const [data, msg] = await login({ email, password });
      if (typeof data === "object" && data?.hasOwnProperty("access_token")) {
        auth.login(data?.access_token);
        nav("/dashboard");
      } else {
        console.log(msg);
      }
    }
    setLoading(false);
  };

  return (
    <div
      id="sign-in-page"
      className="w-full mt-[80px] partial-bg-2 flex items-center justify-center"
    >
      <div className="bg-white rounded-md shadow-slate-400 shadow-md my-12 px-8 py-12 w-5/6 lg:w-2/3 xl:w-2/5 flex flex-col items-center justify-center">
        <img src={foliolensLogo} alt="" className="auth-logo" />
        <h1 className="font-semibold text-3xl text-center pt-4">
          Welcome Back!
        </h1>
        <p className="font-light test-center pb-4">
          Log in to continue using FolioLens
        </p>

        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => handleSignin(e)}
          className="w-full p-0 md:p-8"
        >
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
          <hr className="border border-slate-400 my-8" />
          <button type="submit" className="w-full bg-[#4C35E6]">
            {loading ? (
              <div className="w-6 h-6 m-auto border-b-2 border-white rounded-full animate-spin"></div>
            ) : (
              "Log in"
            )}
          </button>

          <hr className="border border-slate-400 my-8" />
          <p className="text-center">
            Don't an account?{" "}
            <Link
              to="/signup"
              className="text-[#4C35E6] hover:text-indigo-400 cursor-pointer mb-4"
            >
              Sign up
            </Link>{" "}
            instead.
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signin;
