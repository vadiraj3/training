import { Box, Card, Grid, Typography } from "@mui/material";

const UserCard4 = ({ id, name, email, profile, hobbies }) => {
  console.log({ hobbies });
  return (
    <Grid size={{ xs: 12, lg: 4 }}>
      <Box
        sx={{ textAlign: "start", m: 1, boxShadow: "0px 10px 20px #707070" }}
      >
        <Card sx={{ mb: 2, p: 2 }}>
          <Typography fontSize={"30px"}>{id}</Typography>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h4">{email}</Typography>
          <Typography variant="h5" pb={1}>
            {profile}
          </Typography>
          {hobbies.map((hobby) => (
            <Typography variant="h5">{hobby}</Typography>
          ))}
        </Card>
      </Box>
    </Grid>
  );
};
export default UserCard4;
