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

const getProfile = async (userId: String = "") => {
  const response = await axios.post("/profile", {
    action: "get-profile",
    payload: {
      userId,
    },
  });

  //   console.log(getProfile);
  return response.data;
};

const editProfile = async (profile: Profile) => {
  const response = await axios.post("/profile", {
    action: "edit-profile",
    payload: {
      profile,
    },
  });

  return response.data;
};

export { editProfile, getProfile };
