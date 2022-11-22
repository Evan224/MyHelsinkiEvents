import axios from "axios";

interface LoginPayload {
  password: string;
  username: string;
}

interface SignupPayload {
  email: string;
  password: string;
  username: string;
}

const userLogin = async (payload: LoginPayload) => {
  const params = {
    action: "login",
    payload,
  };
  const response = await axios.post("/auth", params);
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Login failed");
  }
};

const userSignup = async (payload: SignupPayload) => {
  const response = await axios.post("/auth", {
    action: "sign-up",
    payload,
  });
  console.log(response, "response");
  if (response.status === 200) {
    return response.data;
  } else {
    throw new Error("Signup failed");
  }
};

export { userLogin, userSignup };
