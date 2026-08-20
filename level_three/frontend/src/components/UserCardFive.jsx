/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

const UserCardFive = ({ id, owner, riskRegister }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Box>
        <Card>
          <Box p={1} textAlign={"start"}>
            <Typography variant="h5">ID : {id}</Typography>
            <Typography variant="h5" pb={1}>
              owner : {owner}
            </Typography>
            <Typography fontSize={22} fontWeight={600}>
              riskRegister
            </Typography>
            <Typography variant="h6">
              likelihood : {riskRegister.scorecard.likelihood}
            </Typography>
            <Typography variant="h6">
              impact : {riskRegister.scorecard.impact}
            </Typography>
            <Typography variant="h6">
              exposure : {riskRegister.scorecard.exposure}
            </Typography>
            <Typography fontSize={22} fontWeight={600}>
              Risks
            </Typography>
            {riskRegister.risks.map((risk, riskid) => (
              <Box key={riskid}>
                <Typography variant="h6">name : {risk.name}</Typography>
                <Typography variant="h6">severity : {risk.severity}</Typography>
                <Typography fontSize={22} fontWeight={600}>
                  evidence
                </Typography>
                {risk.evidence.map((evid, evidid) => (
                  <Typography variant="h6" key={evidid}>
                    evidance : {evid}
                  </Typography>
                ))}
                <Typography fontSize={22} fontWeight={600}>
                  mitigations
                </Typography>
                {risk.mitigations.map((mitigate, mitigateid) => (
                  <Typography variant="h6" key={mitigateid}>
                    mitigation : {mitigate}
                  </Typography>
                ))}
              </Box>
            ))}
            <Typography fontSize={22} fontWeight={600}>
              actionPlan
            </Typography>
            <Typography variant="h6" key={id}>
              nextreview : {riskRegister.actionPlan.nextReview}
            </Typography>
            {riskRegister.actionPlan.checkpoints.map((point, pointid) => (
              <Box key={pointid}>
                <Typography variant="h6">label : {point.label}</Typography>
                <Typography variant="h6">owner : {point.owner}</Typography>
              </Box>
            ))}
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCardFive;
