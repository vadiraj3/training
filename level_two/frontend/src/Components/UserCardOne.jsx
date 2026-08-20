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

const UserCardOne = ({ id, name, email, organization }) => {
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
            <Typography fontSize={20} color="black" fontWeight={600}>
              ORGANIZATION
            </Typography>
            <Typography variant="h6">
              company : {organization.company}
            </Typography>
            <Typography variant="h6">
              headquarters : {organization.headquarters.city}
            </Typography>
            <Typography variant="h6" pb={1}>
              headquarters : {organization.headquarters.country}
            </Typography>
            <Typography variant="h6">
              manager name : {organization.manager.name}
            </Typography>
            <Typography variant="h6">
              email : {organization.manager.contact.email}
            </Typography>
            <Typography variant="h6" pb={2}>
              phone : {organization.manager.contact.phone}
            </Typography>
            <Typography fontSize={20} color="black" fontWeight={600}>
              DEPARTMENTS
            </Typography>
            {organization.departments.map((depart) => (
              <>
                <Typography variant="h6">name : {depart.name}</Typography>
                <Typography variant="h6">budget : {depart.budget}</Typography>
                <Typography variant="h6" pb={2}>
                  ishiring : {depart.isHiring ? "true" : "false"}
                </Typography>
              </>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardOne;
