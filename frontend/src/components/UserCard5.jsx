import { Box, Card, Grid, Typography } from "@mui/material";

const UserCard5 = ({ id, name, email, profile, skills }) => {
  console.log(skills);
  return (
    <Grid size={{ xs: 12, lg: 4 }}>
      <Box
        sx={{ textAlign: "start", m: 1, boxShadow: "0px 10px 20px #707070" }}
      >
        <Card sx={{ mb: 2, p: 2 }}>
          <Typography fontSize={"30px"}>{id}</Typography>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h4">{email}</Typography>
          <Typography variant="h5">{profile}</Typography>
          {skills.map((skill) => (
            <Box>
              <Typography>{skill.name}</Typography>
              <Typography>{skill.level}</Typography>
              <Typography>{skill.years}</Typography>
            </Box>
          ))}
        </Card>
      </Box>
    </Grid>
  );
};
export default UserCard5;
