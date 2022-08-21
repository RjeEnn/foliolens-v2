interface LoginBody {
  email: string;
  password: string;
}

export const login = async (body: LoginBody) => {
  const loginUrl = `${process.env.REACT_APP_DATABASE_URL}/auth/signin`;

  const res = await fetch(loginUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
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
