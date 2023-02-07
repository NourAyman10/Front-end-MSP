import { useState } from "react";
import { useEffect } from "react";

const LatestEvent = () => {
  const eventDataValues = {
    ID: "",
    Name: "",
    Cover: "",
    BriefDesc: "",
    FullDesc: "",
    Date: "",
    imagePath: "",
    isVisible: true,
    IsCompleted: false
};
  const [latestEvent, setLatestEvent] = useState(eventDataValues);

  const getEventData = (result) => {
    console.log(result);
    var eventsData = result.event[0];
    setLatestEvent(eventsData);
  };

  useEffect(() => {
    var requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(process.env.REACT_APP_FETCH_LATEST_EVENT, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        getEventData(result);
      })
      .catch((error) => console.log("error", error));
  }, []);
  return [latestEvent];
};

export default LatestEvent;
