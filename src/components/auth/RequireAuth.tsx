import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import User from "../../models/User";
import Loader from "../Loader";
import { useAuth } from "./Auth";

const RequireAuth = ({ children }: { children: any }) => {
  const [userFetched, setUserFetched] = useState(false);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();
  console.log(auth);

  useEffect(() => {
    const meUrl = `${process.env.REACT_APP_DATABASE_URL}/users/me`;
    const setUser = auth?.setUser;

    if (setUser) {
      const fetchMe = async () => {
        const res = await fetch(meUrl, {
          method: "GET",
          headers: {
            Authorization: `Bearer ${auth?.tkn}`,
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            Origin: "",
            Accept: "application/json",
          },
        });
        if (res.ok) {
          const data: User | null = await res.json();
          setUser(data);
          return true;
        }
        return false;
      };

      fetchMe().then((data) => {
        setUserFetched(data);
        setLoading(false);
      });
    }
  }, [auth?.tkn, auth?.setUser]);

  if (loading) {
    return (
      <div className="h-[calc(100vh-96px)]">
        <Loader />;
      </div>
    );
  }

  if (auth?.tkn) {
    if (userFetched) {
      return children;
    }
  }

  return <Navigate to="/login" />;
};

export default RequireAuth;
