import axios from "axios";

const followUser = async (userId: string) => {
  const response = await axios.post("/me", {
    action: "follow-an-user",
    payload: {
      userId,
    },
  });

  return response;
};

const unFollowUser = async (userId: string) => {
  const response = await axios.post("/me", {
    action: "unfollow-an-user",
    payload: {
      userId,
    },
  });

  return response;
};

export { followUser, unFollowUser };
