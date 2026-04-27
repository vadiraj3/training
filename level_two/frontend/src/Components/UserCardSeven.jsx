import {
  Card,
  CardContent,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import StakeHolder from "./StakeHolder";

const UserCardSeven = ({ name, email, clientPortfolio }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Card>
        <CardContent>
          <Stack textAlign={"left"}>
            <Typography variant="h4" color="orange">
              Name : {name}
            </Typography>
            <Typography variant="h5">Email : {email}</Typography>
            <Divider sx={{ backgroundColor: "black", my: 2 }} />
            {clientPortfolio.map((client, index) => (
              <React.Fragment key={index}>
                <Typography variant="h6" color="blue">
                  clientId : {client.clientId}
                </Typography>
                <Typography variant="h6" color="blue">
                  clientId : {client.name}
                </Typography>
                <Typography variant="h6" color="blue">
                  clientId : {client.industry}
                </Typography>
                <Divider sx={{ backgroundColor: "black", my: 2 }} />
                {client.stakeholders.map((stake, stakeindex) => (
                  <StakeHolder key={stakeindex} stake={stake} client={client} />
                ))}
              </React.Fragment>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardSeven;
