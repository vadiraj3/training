import { Box, Card, Grid, Typography } from "@mui/material";

const UserCard2 = ({ id, name, email, address, contact }) => {
  console.log(id, name, email);
  return (
    <Grid size={{ xs: 12, lg: 4 }}>
      <Box
        sx={{ textAlign: "start", m: 1, boxShadow: "0px 10px 20px #707070" }}
      >
        <Card sx={{ mb: 2, p: 2 }}>
          <Typography fontSize={"30px"}>{id}</Typography>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h5" pb={1}>
            {email}
          </Typography>
          <Box pb={1}>
            <Typography variant="h5">{address.street}</Typography>
            <Typography variant="h5">{address.city}</Typography>
            <Typography variant="h5">{address.country}</Typography>
          </Box>
          <Box>
            <Typography variant="h5">{contact.phone}</Typography>
            <Typography variant="h5">{contact.email}</Typography>
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};
export default UserCard2;
