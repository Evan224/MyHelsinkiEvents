import axios from "axios";

const getAllTags = async () => {
  const response = await axios.post("/event", {
    action: "get-all-tags",
    payload: {
      "expand": "",
      "where": {},
    },
  });

  return response.data;
};

export { getAllTags };
