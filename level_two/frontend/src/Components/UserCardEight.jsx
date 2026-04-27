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
import Bonuses from "./Bonuses";
import Benifits from "./Benifits";
import Reimbursements from "./Reimbursements";

const UserCardEight = ({ name, email, compensation }) => {
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
            <Typography variant="h5" color="red">
              Compensation base : {compensation.base}
            </Typography>
            <Typography variant="h5" color="red">
              Compensation currency : {compensation.currency}
            </Typography>
            <Divider sx={{ backgroundColor: "black", my: 2 }} />
            {compensation.bonuses.map((bonus, bonusindex) => (
              <Bonuses key={bonusindex} bonus={bonus} />
            ))}
            <Divider sx={{ backgroundColor: "black", my: 2 }} />
            <Typography variant="h6" color="blue">
              Federal tax : {compensation.deductions.tax.federal}
            </Typography>
            <Typography variant="h6" color="blue">
              State tax : {compensation.deductions.tax.state}
            </Typography>
            <Divider sx={{ backgroundColor: "black", my: 2 }} />
            {compensation.deductions.benefits.map((benefit, benefitindex) => (
              <Benifits key={benefitindex} benefit={benefit} />
            ))}
            <Divider sx={{ backgroundColor: "black", my: 2 }} />
            {compensation.reimbursements.map((reimbu, reimbuindex) => (
              <Reimbursements key={reimbuindex} reimbu={reimbu} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default UserCardEight;
