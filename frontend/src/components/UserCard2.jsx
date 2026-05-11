import { Box, Card, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const UserCard2 = ({ id, name, email, address, contact }) => {
  console.log(id, name, email);
  return (
    <Grid size={{ xs: 12, lg: 4 }}>
      <Box
        sx={{ textAlign: "start", m: 1, boxShadow: "0px 10px 20px #707070" }}
      >
        <Card sx={{ mb: 2, p: 2 }}>
          <Box sx={{ width: "100px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pravatar.cc/150?img=1"
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Typography fontSize={"30px"}>{id}</Typography>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h5">{email}</Typography>
          <Typography variant="h5">{address.street}</Typography>
          <Typography variant="h5">{address.city}</Typography>
          <Typography variant="h5">{address.country}</Typography>
          <Typography variant="h5">{contact.phone}</Typography>
          <Typography variant="h5">{contact.email}</Typography>
        </Card>
      </Box>
    </Grid>
  );
};
export default UserCard2;
