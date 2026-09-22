import "react";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { geteventsInsights } from "../../services/api";
import EventCard from "./EventCard";
import { useNavigate } from "react-router-dom";

const EventGetPage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apidata = await geteventsInsights();
        setData(apidata.data);
        console.log(apidata);
      } catch (error) {
        setError(true);
        console.log(error);
      }
      setLoading(false);
    };
    dataFatch();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>something went wronge...</div>;
  }

  return (
    <Grid container spacing={2}>
      <button onClick={() => navigate("/event-post-page")}>
        Add New Events
      </button>
      {data.map((events) => (
        <EventCard
          key={events.id}
          id={events.id}
          title={events.title}
          date={events.date}
          location={events.location}
          attendees={events.attendees}
          createdAt={events.createdAt}
          updatedAt={events.updatedAt}
        />
      ))}
    </Grid>
  );
};

export default EventGetPage;
