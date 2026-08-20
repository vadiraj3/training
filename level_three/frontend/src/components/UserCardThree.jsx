/* eslint-disable react/prop-types */
import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

const UserCardThree = ({ id, owner, warehouse }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Box>
        <Card>
          <Box p={1} textAlign={"start"}>
            <Typography variant="h5">ID : {id}</Typography>
            <Typography variant="h5" pb={1}>
              owner : {owner}
            </Typography>
            <Typography fontSize={24} fontWeight={600}>
              warehouse
            </Typography>
            <Typography variant="h6" pb={1}>
              warehouse : {warehouse.code}
            </Typography>
            <Typography variant="h6">city : {warehouse.region.city}</Typography>
            <Typography variant="h6" pb={1}>
              country : {warehouse.region.country}
            </Typography>
            <Typography variant="h6">
              capacity : {warehouse.summary.capacity}
            </Typography>
            <Typography variant="h6">
              utilization : {warehouse.summary.utilization}
            </Typography>
            <Typography variant="h6">
              openOrders : {warehouse.summary.openOrders}
            </Typography>
            <Typography fontSize={24} fontWeight={600}>
              Zones
            </Typography>
            {warehouse.zones.map((zone) => (
              <Box key={id}>
                <Typography variant="h6">name : {zone.name}</Typography>
                <Typography fontSize={24} fontWeight={600}>
                  Zones
                </Typography>
                {zone.bins.map((bin, binid) => (
                  <Box key={binid}>
                    <Typography variant="h6">name : {bin.sku}</Typography>
                    <Typography variant="h6">name : {bin.quantity}</Typography>
                    <Typography variant="h6">
                      name : {bin.lowStock ? "true" : "false"}
                    </Typography>
                  </Box>
                ))}
                <Typography fontSize={24} fontWeight={600}>
                  Alerts
                </Typography>
                {warehouse.alerts.map((alert, alertid) => (
                  <Box key={alertid}>
                    <Typography variant="h6">{alert.type}</Typography>
                    <Typography variant="h6">{alert.severity}</Typography>
                    <Typography variant="h6">{alert.massage}</Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCardThree;
