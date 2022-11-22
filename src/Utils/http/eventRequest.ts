import axios from "axios";

const getAllEvents = async () => {
  const result = await axios.post("/event", {
    payload: {
      "page": 1,
      "pageSize": 10,
    },
    action: "get-all-events",
  });
  return result.data;
};

const getEditorEvents = async () => {
  const result = await axios.post("/event", {
    payload: {
      "page": 1,
      "pageSize": 10,
    },
    action: "get-all-events",
  });
  return result.data;
};

const getRecommendedEvents = async () => {
  const result = await axios.post("/event", {
    action: "get-all-events",
  });
  // console.log(result);
  return result.data;
};

const getMylikedEvents = async () => {
  const result = await axios.post("/me", {
    action: "get-all-liked-events",
    payload: {
      "page": 1,
      "pageSize": 10,
    },
  });
  return result.data;
};

const getAlljoinedEvents = async () => {
  const result = await axios.post(
    "/me",
    JSON.stringify({
      action: "get-all-joined-events",
      payload: {},
    }),
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
  );
  return result.data;
};

const getEventDetail = async ({ eventId }) => {
  const result = await axios.post("/event", {
    payload: {
      "expand": "Owner,Tags,LikedUsers",
      "where": {
        "id": [eventId],
      },
    },
    action: "get-all-events",
  });
  return result.data;
};

//// deprecated

const getEvents = async (action: string, payload: any) => {
  const result = await axios.post("/event", {
    payload: payload || {},
    action: action,
  });
  return result.data;
};

const likeEvent = async (eventId: string) => {
  const result = await getEvents("/event", {
    payload: { eventId },
    action: "like-event",
  });
  return result;
};

const joinEvent = async ({ eventId }) => {
  // const result = await getEvents("/event", {
  //   payload: { eventId:[eventId] },
  //   action: "join-event",
  // });
  // return result;
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
