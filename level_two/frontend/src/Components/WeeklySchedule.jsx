import { Divider, Typography } from "@mui/material";
import React from "react";

const WeeklySchedule = ({ day }) => {
  return (
    <React.Fragment>
      <Typography variant="subtitle2">{day.slot}</Typography>
      <Typography variant="subtitle2">{day.start}</Typography>
      <Typography variant="subtitle2">{day.end}</Typography>
      {day.tasks.map((task, index) => (
        <React.Fragment key={index}>
          <Typography variant="subtitle2">{task.title}</Typography>
          <Typography variant="subtitle2">{task.priority}</Typography>
          {task.tags.map((tag, tagindex) => (
            <React.Fragment key={tagindex}>
              <Typography variant="subtitle2">{tag}</Typography>
              <Divider sx={{ backgroundColor: "red" }} />
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default WeeklySchedule;
