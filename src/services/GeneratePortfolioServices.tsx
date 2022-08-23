import User from "../models/User";

export interface GeneratePortfolio {
  userId: string;
  age: number;
  salary: number;
  net_worth: number;
  reported_risk: number;
}

export interface UpdateForm {
  firstName: string;
  lastName: string;
  dob: Date;
  salary: number;
  netWorth: number;
  riskRating: number;
}

export const generatePortfolio = async (body: GeneratePortfolio) => {
  const generateUrl = `${process.env.REACT_APP_DATABASE_URL}/portfolios/generate-portfolio`;

  const res = await fetch(generateUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Origin: "",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  const data: { result: string | [] } = await res.json();
  return data;
};

export const getAge = (date: string) => {
  var today = new Date();
  var birthDate = new Date(date);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const updateUser = async (body: UpdateForm, id: string) => {
  const updateUrl = `${process.env.REACT_APP_DATABASE_URL}/users/${id}`;

  const res = await fetch(updateUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      Origin: "",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  if (res.ok) {
    const data: User = await res.json();
    return data;
  }
  return null;
};
