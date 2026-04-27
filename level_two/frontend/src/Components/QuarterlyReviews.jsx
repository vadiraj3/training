import { Chip, Divider, Typography } from "@mui/material";
import React from "react";

const QuarterlyReviews = ({ review }) => {
  return (
    <React.Fragment>
      <Divider sx={{ backgroundColor: "blue", my: 2 }} />
      <Typography variant="h6" color="red">
        Quarter : {review.quarter}
      </Typography>

      <Typography variant="h6" color="grey">
        Quality : {review.metrics.quality}
      </Typography>
      <Typography variant="h6" color="lightblue">
        delivery : {review.metrics.delivery}
      </Typography>
      <Typography variant="h6" color="pink">
        collaboration : {review.metrics.collaboration}
      </Typography>
      {review.goals.map((go, goalindex) => (
        <React.Fragment key={goalindex}>
          <Chip label={go.title} variant="outlined" />
          <Chip label={go.progress} variant="outlined" />
          {go.risks.map((risk) => (
            <Typography variant="h6" color="brown">
              Risk : {risk}
            </Typography>
          ))}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default QuarterlyReviews;
