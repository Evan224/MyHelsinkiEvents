import axios from "axios";

axios.defaults.headers.common["Content-Type"] = "application/json";

const getAllEvents = async () => {
  const result = await axios.post(
    "/event",
    JSON.stringify({
      payload: {
        "page": 1,
        "pageSize": 10,
      },
      action: "get-all-events",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return result.data;
};

const getEditorEvents = async () => {
  const result = await axios.post(
    "/event",
    JSON.stringify({
      payload: {
        "page": 1,
        "pageSize": 10,
      },
      action: "get-all-events",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return result.data;
};
const getRecommendedEvents = async ({ search }) => {
  console.log(search);
  const result = await axios.post("/event", {
    action: "get-all-events",
    payload: {
      "where": {
        "name": search,
      },
    },
  }, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  // console.log(result);

  return result.data;
};

const getMylikedEvents = async () => {
  const result = await axios.post(
    "/me",
    JSON.stringify({
      action: "get-all-liked-events",
      payload: {
        "page": 1,
        "pageSize": 10,
      },
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return result.data;
};

const getAlljoinedEvents = async () => {
  const result = await axios.post(
    "/me",
    JSON.stringify({
      action: "get-all-joined-events",
      payload: {},
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return result.data;
};

const getFollowerEvents = async () => {
  const result = await axios.post(
    "/me",
    JSON.stringify({
      "action": "get-all-events-from-users-i-followed",
      "payload": {},
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return result.data;
};

const getEventDetail = async ({ eventId }) => {
  const result = await axios.post(
    "/event",
    JSON.stringify({
      payload: {
        "expand": "Owner,Tags,LikedUsers",
        "where": {
          "id": [eventId],
        },
      },
      action: "get-all-events",
    }),
    {
      headers: {
        "Content-Type": "application/json",
      },
    },
  );
  return result.data;
};

const likeEvent = async (eventId: string) => {
  const result = await axios.post("/me", {
    payload: { eventId },
    action: "like-an-event",
  });
  return result;
};

const joinEvent = async (eventId: string) => {
  const result = await axios.post("/me", {
    payload: { eventId },
    action: "join-an-event",
  });
  return result;
};

//// deprecated

const getEvents = async (action: string, payload: any) => {
  const result = await axios.post("/event", {
    payload: payload || {},
    action: action,
  });
  return result.data;
};

export {
  getAllEvents,
  getAlljoinedEvents,
  getEditorEvents,
  getEventDetail,
  getEvents,
  getFollowerEvents,
  getMylikedEvents,
  getRecommendedEvents,
  joinEvent,
  likeEvent,
};
