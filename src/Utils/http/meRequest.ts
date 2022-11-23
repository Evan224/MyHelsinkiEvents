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

const editProfile = async (profile) => {
  const response = await axios.post("/me", {
    action: "edit-my-profile",
    payload: {
      data: profile,
    },
  });

  return response.data;
};

export { editProfile, followUser, unFollowUser };
