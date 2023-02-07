import { useEffect, useState } from "react";

const ComingEventData = () => {
    const [err, setERR] = useState(null);
    const eventDataValues = {
        ID: "",
        Name: "",
        Cover: "",
        BriefDesc: "",
        FullDesc: "",
        Date: new Date(),
        imagePath: "",
        isVisible: true,
        IsCompleted: false
    };
    const [EventData, setEvent] = useState(eventDataValues);

    const getEventData = (obj) => {
        var singleEventData = obj.comingEvents[0];

        let eventValues = {
            ID: singleEventData.ID,
            Name: singleEventData.Name,
            Cover: singleEventData.Cover,
            BriefDesc: singleEventData.BriefDesc,
            FullDesc: singleEventData.FullDesc,
            Date: singleEventData.Date.match(
                /\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])*/
            )[0],
            IsCompleted: singleEventData.IsCompleted,
            imagePath: singleEventData.imagePath,
        };
        setEvent(eventValues);
    };

    useEffect(() => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        fetch(process.env.REACT_APP_FETCH_COMING_EVENT, requestOptions)
            .then((response) => {
                response.json()
            })
            .then((result) => {
                getEventData(result);
            })
            .catch((error) => {
                setERR(error);
            });
    }, []);

    return [EventData];
};

export default ComingEventData;