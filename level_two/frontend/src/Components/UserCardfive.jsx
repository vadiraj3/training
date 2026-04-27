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
import Maintenance from "./Maintenance";

const UserCardfive = ({ name, email, assets }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Card>
        <CardContent>
          <Stack textAlign={"left"}>
            <Typography variant="h5">Name :{name}</Typography>
            <Typography variant="h5">Email :{email}</Typography>
            {assets.map((asset, index) => (
              <React.Fragment key={index}>
                <Chip label={asset.assetId} variant="outlined" />
                <Chip label={asset.type} variant="outlined" />
                <Chip label={asset.serialNumber} variant="outlined" />

                <Typography variant="h5">
                  Warranty :{asset.warranty.provider}
                </Typography>
                <Typography variant="h5">
                  Warranty :{asset.warranty.expiresOn}
                </Typography>
                <Divider sx={{ backgroundColor: "black", my: 2 }} />
                <Typography variant="h5">
                  maintenance :{asset.maintenance.lastService}
                </Typography>
                <Divider sx={{ backgroundColor: "black", my: 2 }} />
                {asset.maintenance.history.map((tory, index) => (
                  <Maintenance key={index} tory={tory} />
                ))}
              </React.Fragment>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardfive;
