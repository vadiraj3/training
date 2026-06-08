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
          <Typography variant="h5">{address.street}</Typography>
          <Typography variant="h5" color="red">
            {address.city}
          </Typography>
          <Typography variant="h5" pb={1}>
            {address.country}
          </Typography>
          <Typography variant="h6">{contact.phone}</Typography>
          <Typography variant="h6" pb={1} color="blue">
            {contact.email}
          </Typography>
          <Typography variant="h6">{profile.bio}</Typography>
          <Typography variant="h6" color="red">
            {profile.age}
          </Typography>
          <Typography variant="h6">{profile.joinDate}</Typography>
        </Card>
      </Box>
    </Grid>
  );
};
export default UserCard3;
