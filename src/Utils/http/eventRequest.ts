import axios from "axios";

//add header

const getEvents = async (action: string, payload: any) => {
  const result = await axios.post("/event", {
    payload: payload || {},
    action: action,
  });
  return result.data;
};

export { getEvents };

// id: number;
// owner: string;
// title: string
// description: string;
// picture: string;
// tags: string[];
// date: string;
// founder: string;
// founderDescription: string;
// location: string;
// duration: string;
// likes: number;

// 1. Create Event{
//     // normal user's event
//     // admin users event
// }
// 2. Get Event (in any way) {
//     // upcoming events
//     // daily recommendation
//     // My likes
//     // My own
//     // My Follow
// }
// 3. Get Event Detail{

// 4. }
// 5. Like/Disllike the event {

// }
// 6. delete the event (manager)
