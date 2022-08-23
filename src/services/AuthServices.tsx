import User from "../models/User";

interface LoginBody {
  email: string;
  password: string;
}

interface SignupBody {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  dob: string;
  riskRating: number;
  salary: number;
  netWorth: number;
}

export const fetchMe = async (tkn: string | Function | null) => {
  const meUrl = `${process.env.REACT_APP_DATABASE_URL}/users/me`;

  const res = await fetch(meUrl, {
    headers: {
      Authorization: `Bearer ${tkn}`,
    },
  });

  if (res.ok) {
    const data: User | null = await res.json();
    return data;
  }
  return null;
};

export const login = async (body: LoginBody) => {
  const loginUrl = `${process.env.REACT_APP_DATABASE_URL}/auth/signin`;

  const res = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Origin: "",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  const data: { access_token: string } | null = await res.json();
  if (res.ok) {
    return [data, null];
  } else if (res.status === 403) {
    return [null, "Invalid Credentials"];
  } else if (res.status === 400) {
    return [
      null,
      "Please ensure that the email and password are formatted correctly",
    ];
  } else {
    return [null, "Oops, something went wrong, try again later"];
  }
};

export const signup = async (body: SignupBody) => {
  const signupUrl = `${process.env.REACT_APP_DATABASE_URL}/auth/signup`;

  const res = await fetch(signupUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Origin: "",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  const data: { access_token: string } | null = await res.json();
  if (res.ok) {
    return [data, null];
  } else if (res.status === 403) {
    return [null, "Credentials already taken"];
  } else if (res.status === 400) {
    return [
      null,
      "Please ensure that the email and password are formatted correctly",
    ];
  } else {
    return [null, "Oops, something went wrong, try again later"];
  }
};
