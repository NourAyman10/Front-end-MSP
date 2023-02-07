import { useState } from "react";
import { useEffect } from "react";

const OldEventsData = () => {
  const [allEvents, setAllEvents] = useState([]);

  const getEventData = (result) => {
    var eventsData = result.events;
    setAllEvents(eventsData);
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.REACT_APP_FETCH_ALL_EVENTS, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        getEventData(result);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return [allEvents];
};

export default OldEventsData;
