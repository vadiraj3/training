import { Box, Card, Grid, Typography } from "@mui/material";

const UserCard3 = ({ id, name, email, address, contact, profile }) => {
  console.log("id", id);
  return (
    <Grid size={{ xs: 12, lg: 4 }}>
      <Box
        sx={{ textAlign: "start", m: 1, boxShadow: "0px 10px 20px #707070" }}
      >
        <Card sx={{ mb: 2, p: 2 }}>
          <Typography fontSize={"30px"}>{id}</Typography>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h4">{email}</Typography>
          <Typography variant="h5">{address.street}</Typography>
          <Typography variant="h5">{address.city}</Typography>
          <Typography variant="h5">{address.country}</Typography>
          <Typography variant="h5">{contact.phone}</Typography>
          <Typography variant="h5">{contact.email}</Typography>
          <Typography variant="subtitle1" fontWeight={600}>
            {profile.bio}
          </Typography>
          <Typography variant="subtitle1" fontWeight={600}>
            {profile.age}
          </Typography>
          <Typography variant="subtitle1" fontWeight={600}>
            {profile.joinDate}
          </Typography>
        </Card>
      </Box>
    </Grid>
  );
};
export default UserCard3;
