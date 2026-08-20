import { Box, Card, Grid, Typography } from "@mui/material";

const UserCard6 = ({ id, name, email, company, address }) => {
  return (
    <Grid size={{ xs: 12, lg: 4 }}>
      <Box
        sx={{ textAlign: "start", m: 1, boxShadow: "0px 10px 20px #707070" }}
      >
        <Card sx={{ mb: 2, p: 2 }}>
          <Typography fontSize={"30px"}>{id}</Typography>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h4" pb={2}>
            {email}
          </Typography>
          <Typography variant="h6" pb={2}>
            {company.name}
          </Typography>
          <Typography variant="h6">{company.address.street}</Typography>
          <Typography variant="h6">{company.address.city}</Typography>
          <Typography variant="h6" pb={2}>
            {company.address.zipCode}
          </Typography>
          <Typography variant="h6">{company.employees}</Typography>
          <Typography variant="h6">{company.founded}</Typography>
        </Card>
      </Box>
    </Grid>
  );
};
export default UserCard6;
