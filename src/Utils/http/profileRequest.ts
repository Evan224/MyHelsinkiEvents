import axios from "axios";

// profile
interface Profile {
  userId: string;
  image: string;
  avatarUrl: string;
  name: string;
  email: string;
  brief: string;
  tags: Object[];
  description: string;
  likesNumber: number;
  followingNumber: number;
  followersNumber: number;
  following: number;
  events: any[];
  location: string;
}

const getProfile = async () => {
  const response = await axios.post("/me", {
    action: "get-my-profile",
    payload: {},
  });

  return response;
};

const getMyEvents = async () => {
  const response = await axios.post("/me", {
    action: "get-all-my-events",
    payload: {},
  });

  return response.data;
};

const editProfile = async (profile: Profile) => {
  const response = await axios.post(
    "/profile",
    JSON.stringify({
      action: "edit-profile",
      payload: {
        profile,
      },
    }),
  );

  return response.data;
};

export { editProfile, getMyEvents, getProfile };