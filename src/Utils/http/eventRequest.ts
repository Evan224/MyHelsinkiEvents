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
  );
  return result.data;
};
const getRecommendedEvents = async ({ search, tags, date }) => {
  const result = await axios.post("/event", {
    action: "get-all-events",
    payload: {
      "where": {
        "name": search,
        "Tags": {
          "name": tags,
        },
      },
    },
  });

  return result.data;
};

const getMylikedEvents = async ({ search, tags, date }) => {
  const result = await axios.post(
    "/me",
    JSON.stringify({
      action: "get-all-liked-events",
      payload: {
        "where": {
          "name": search,
          "Tags": {
            "name": tags,
          },
        },
      },
    }),
  );
  return result.data;
};

const getAlljoinedEvents = async ({ search, tags, date }) => {
  const result = await axios.post(
    "/me",
    JSON.stringify({
      action: "get-all-joined-events",
      payload: {
        "where": {
          "name": search,
          "Tags": {
            "name": tags,
          },
        },
      },
    }),
  );
  return result.data;
};

const getFollowerEvents = async ({ search, tags, date }) => {
  const result = await axios.post(
    "/me",
    JSON.stringify({
      "action": "get-all-events-from-users-i-followed",
      "payload": {
        "where": {
          "name": search,
          "Tags": {
            "name": tags,
          },
        },
      },
    }),
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
          "id": eventId,
        },
      },
      action: "get-event-details",
    }),
  );
  return result;
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

const unlikeEvent = async (eventId: string) => {
  const result = await axios.post("/me", {
    payload: { eventId },
    action: "dislike-an-event",
  });
  return result;
};

const unjoinEvent = async (eventId: string) => {
  const result = await axios.post("/me", {
    payload: { eventId },
    action: "leave-an-event",
  });
  return result;
};

const createEvent = async (payload) => {
  const result = await axios.post("/me", {
    payload,
    action: "create-an-event",
  });
  return result;
};

const editEvent = async (payload) => {
  const result = await axios.post("/me", {
    payload,
    action: "edit-an-event",
  });
  return result;
};

export {
  createEvent,
  editEvent,
  getAllEvents,
  getAlljoinedEvents,
  getEditorEvents,
  getEventDetail,
  getFollowerEvents,
  getMylikedEvents,
  getRecommendedEvents,
  joinEvent,
  likeEvent,
  unjoinEvent,
  unlikeEvent,
};
