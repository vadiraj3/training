import {
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Warehouses from "./Warehouses";

const UserCardNine = ({ name, email, regionalOperations }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Card>
        <CardContent>
          <Stack textAlign={"left"}>
            <Typography variant="h5">{name}</Typography>
            <Typography variant="h5">{email}</Typography>
            <Divider sx={{ backgroundColor: "balck", my: 2 }} />
            {regionalOperations.map((regional, index) => (
              <React.Fragment key={index}>
                <Chip label={regional.region} variant="outlined" />
                <Typography variant="h5">
                  manager id : {regional.manager.id}
                </Typography>
                <Typography variant="h5">
                  Manager name : {regional.manager.name}
                </Typography>
                <Divider sx={{ backgroundColor: "brown", my: 2 }} />
                {regional.warehouses.map((ware, wareindex) => (
                  <Warehouses key={wareindex} ware={ware} />
                ))}
              </React.Fragment>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardNine;
