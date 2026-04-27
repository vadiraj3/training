import {
  Card,
  CardContent,
  CardHeader,
  Chip,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

const UserCardOne = ({ id, name, email, organization, departments }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Card>
        <CardHeader></CardHeader>
        <CardContent>
          <Stack textAlign={"left"}>
            <Typography variant="h5">{id}</Typography>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="h5">{email}</Typography>
            <Typography variant="h5">{organization.company}</Typography>
            <Chip label={organization.headquarters.city} variant="outlined" />
            <Chip
              label={
                <Typography textAlign={"left"}>
                  organization.headquarters.country
                </Typography>
              }
              variant="outlined"
              sx={{ textAlign: "left" }}
            />
            <Typography variant="h5">{organization.manager.name}</Typography>
            <Typography variant="h5">
              {organization.manager.contact.email}
            </Typography>
            <Typography variant="h5">
              {organization.manager.contact.phone}
            </Typography>
            {organization.departments.map((depart, index) => (
              <React.Fragment key={index}>
                <Chip label={depart.name} variant="outlined" />
                <Chip label={depart.budget} variant="outlined" />
                <Chip
                  label={depart.isHiring ? "Yes" : "No"}
                  variant="outlined"
                />
              </React.Fragment>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardOne;
