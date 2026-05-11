import { Divider, Typography } from "@mui/material";
import React from "react";

const Deliverables = ({ delivery }) => {
  return (
    <React.Fragment>
      <Typography variant="h6">delivery : {delivery.title}</Typography>
      <Divider sx={{ backgroundColor: "red", my: 2 }} />
      {delivery.dependencies.map((depend, dependindex) => (
        <React.Fragment key={dependindex}>
          <Typography variant="h6">dependencies: {depend.team}</Typography>
          <Typography variant="h6">
            dependencies : {depend.readiness}
          </Typography>
          <Divider sx={{ backgroundColor: "red", my: 2 }} />
          {delivery.techStack.map((tech, techindex) => (
            <Typography variant="h6" key={techindex}>
              techStack : {tech}
            </Typography>
          ))}
        </React.Fragment>
      ))}
    </React.Fragment>
  );
};

export default Deliverables;
