import { useEffect, useState } from "react";

const GetEventByID = (id) => {

    const eventDataValues = {
        ID: null,
        Name: "",
        Cover: "",
        BriefDesc: "",
        FullDesc: "",
        Date: "",
        isVisible: true,
        IsCompleted: false,
        imagePath: "",
    };
    const [Event, setEvent] = useState(eventDataValues);

    const getEventData = (obj) => {
        var singleEventData = obj["Event Info"];

        let eventValues = {
            ID: singleEventData.ID,
            Name: singleEventData.Name,
            Cover: singleEventData.Cover,
            BriefDesc: singleEventData.BriefDesc,
            FullDesc: singleEventData.FullDesc,
            isVisible: singleEventData.IsVisible,
            IsCompleted: singleEventData.IsCompleted,
            Date: singleEventData.Date.match(
                /\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])*/
            )[0],
            imagePath: singleEventData.imagePath,
        };
        setEvent(eventValues);
    };

    useEffect(() => {
        var requestOptions = {
            method: "GET",
            redirect: "follow",
        };

        async function dataGetter(){
            await fetch(process.env.REACT_APP_FETCH_IMG_URL+"home/events/"+id, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                var obj = JSON.parse(result);
                getEventData(obj);
            })
            .catch((error) => {});
        }

        dataGetter()
    }, []);

    return [Event];
};

export default GetEventByID;