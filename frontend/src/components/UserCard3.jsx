import { Box, Card, Grid, Typography } from "@mui/material";

const UserCard3 = ({ id, name, email, address, contact, profile }) => {
  return (
    <Grid size={{ xs: 12, lg: 4 }}>
      <Box
        sx={{ textAlign: "start", m: 1, boxShadow: "0px 10px 20px #707070" }}
      >
        <Card sx={{ mb: 2, p: 2 }}>
          <Typography fontSize={"30px"}>{id}</Typography>
          <Typography variant="h3" pb={1} color="red">
            {name}
          </Typography>
          <Typography variant="h4" pb={1} color="blue">
            {email}
          </Typography>
          <Box pb={1}>
            <Typography variant="h5" color="blue">
              {address.street}
            </Typography>
            <Typography variant="h5" color="blue">
              {address.city}
            </Typography>
            <Typography variant="h5" color="blue">
              {address.country}
            </Typography>
          </Box>
          <Box pb={1}>
            <Typography variant="h5" color="red">
              {contact.phone}
            </Typography>
            <Typography variant="h5" color="red">
              {contact.email}
            </Typography>
          </Box>
          <Box pb={1}>
            <Typography variant="h5" color="blue">
              {profile.bio}
            </Typography>
            <Typography variant="h5" color="blue">
              {profile.age}
            </Typography>
            <Typography variant="h5" color="blue">
              {profile.joinDate}
            </Typography>
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};
export default UserCard3;
