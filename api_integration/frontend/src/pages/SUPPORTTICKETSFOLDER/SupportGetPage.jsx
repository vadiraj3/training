import "react";
import { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { getsupportticketsInsights } from "../../services/api";
import { useNavigate } from "react-router-dom";
import SupportCard from "./SupportCard";

const SupportGetPage = () => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const dataFatch = async () => {
      try {
        const apidata = await getsupportticketsInsights();
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
      <button onClick={() => navigate("/support-post-page")}>
        Add New SupportTickets
      </button>
      {data.map((sup) => (
        <SupportCard
          key={sup.id}
          id={sup.id}
          subject={sup.subject}
          priority={sup.priority}
          requester={sup.requester}
          messages={sup.messages}
        />
      ))}
    </Grid>
  );
};

export default SupportGetPage;
