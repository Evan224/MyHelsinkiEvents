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

const imageUpload = async (formData) => {
  const response = await axios.post("/me", {
    action: "get-image-upload-url",
    payload: {},
  });

  const { uploadUrl, imageUrl } = response.data;

  var instance = axios.create();
  delete instance.defaults.headers.common["Authorization"];
  instance.defaults.headers.common["Content-Type"] = "image/png";

  const uploadResponse = await instance.put(uploadUrl, formData, {
    headers: {
      "Content-Type": "image/png",
    },
  });
  if (uploadResponse.status === 200) {
    return imageUrl;
  }
};

export { editProfile, followUser, imageUpload, unFollowUser };
