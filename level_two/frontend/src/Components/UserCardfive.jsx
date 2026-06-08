import {
  Box,
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
            <Typography variant="h5" pb={1}>
              Email :{email}
            </Typography>
            {assets.map((asset) => (
              <Box>
                <Typography variant="h6">{asset.assetId}</Typography>
                <Typography variant="h6">{asset.type}</Typography>
                <Typography variant="h6" pb={1}>
                  {asset.serialNumber}
                </Typography>
                <Typography variant="h6">{asset.warranty.provider}</Typography>
                <Typography variant="h6" pb={1}>
                  {asset.warranty.expiresOn}
                </Typography>
                <Typography variant="h6">
                  {asset.maintenance.lastService}
                </Typography>
                {asset.maintenance.history.map((tory) => (
                  <Maintenance tory={tory} />
                ))}
              </Box>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardfive;
