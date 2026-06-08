import {
  Box,
  Card,
  CardContent,
  CardHeader,
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
            <Typography variant="h4">{id}</Typography>
            <Typography variant="h4">Name : {name}</Typography>
            <Typography variant="h6" pb={1}>
              Email : {email}
            </Typography>
            <Typography variant="h6" pb={1}>
              Company : {organization.company}
            </Typography>
            <Typography variant="h6" pb={1}>
              City : {organization.headquarters.city}
            </Typography>
            <Typography variant="h6" pb={1}>
              Country : {organization.headquarters.country}
            </Typography>
            <Typography variant="h6" pb={1}>
              manager : {organization.manager.name}
            </Typography>
            <Typography variant="h6">
              contact : {organization.manager.contact.email}
            </Typography>
            <Typography variant="h6" pb={1}>
              contact : {organization.manager.contact.phone}
            </Typography>
            <Typography variant="h3">DEPARTMENTS</Typography>
            {organization.departments.map((depart) => (
              <Box>
                <Typography variant="h6">Name : {depart.name}</Typography>
                <Typography variant="h6">Budget : {depart.budget}</Typography>
                <Typography variant="h6">
                  IsHiring : {depart.isHiring ? "true" : "false"}
                </Typography>
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardOne;
