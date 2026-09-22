import axios from "axios";
import "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const EventPostPage = () => {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [attendees, setAttendees] = useState([]);

  const navigate = useNavigate();

  const handelSubmit = async () => {
    if (title.trim() === "") {
      console.log("please enter title here");
      return;
    }
    if (!date) {
      console.log("please enter date here");
      return;
    }
    if (location.trim() === "") {
      console.log("please enter location here");
      return;
    }
    if (attendees.length === 0) {
      console.log("please select atleast one atendees");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/events", {
        title: title,
        date: date,
        location: location,
        attendees: attendees,
      });
      navigate("/event-get-page");
      console.log("Data submitted successfully:", response.data.message);
    } catch (error) {
      console.error(
        "Error submitting data:",
        error.response?.data || error.message,
      );
    }
  };

  const handelAtendees = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setAttendees([...attendees, value]);
    } else {
      setAttendees(attendees.filter((aten) => aten !== value));
    }
  };

  const handelInput = (e) => {
    console.log(e.target.name);
    if (e.target.name === "title") {
      setTitle(e.target.value);
    }
    if (e.target.name === "date") {
      setDate(e.target.value);
    }
    if (e.target.name === "location") {
      setLocation(e.target.value);
    }
    if (e.target.checked === "atendees") {
      handelAtendees(e);
    }
  };
  return (
    <div>
      <label>Title : </label>
      <input type="text" name="title" value={title} onChange={handelInput} />
      <br />
      <br />
      <label>Date : </label>
      <input type="date" name="date" value={date} onChange={handelInput} />
      <br />
      <br />
      <label>Location : </label>
      <input
        type="text"
        name="location"
        value={location}
        onChange={handelInput}
      />
      <br />
      <br />
      <label>Atendees : </label>
      <input
        type="checkbox"
        name="Neha"
        value={"Neha"}
        checked={attendees.includes("Neha")}
        onChange={handelAtendees}
      />
      Neha
      <input
        type="checkbox"
        name="kabir"
        value={"kabir"}
        checked={attendees.includes("kabir")}
        onChange={handelAtendees}
      />
      Kabir
      <input
        type="checkbox"
        name="Isha"
        value={"Isha"}
        checked={attendees.includes("Isha")}
        onChange={handelAtendees}
      />
      Isha
      <br />
      <br />
      <button onClick={handelSubmit}>Submit</button>
    </div>
  );
};

export default EventPostPage;
