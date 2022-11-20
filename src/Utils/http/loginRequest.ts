import axios from "axios";

const userLogin = async (email: string, password: string) => {
  const payload = {
    email,
    password,
  };
  const params = {
    action: "post-user-login",
    payload,
  };
  const response = await axios.post("/login", JSON.stringify(params));
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Login failed");
  }
};

const userSignup = async (email: string, password: string) => {
  const payload = {
    email,
    password,
  };
  const response = await axios.post("/login", {
    action: "post-user-signup",
    payload,
  });
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Signup failed");
  }
};

export { userLogin, userSignup };
