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
          <Typography variant="h4" pb={1}>
            {email}
          </Typography>
          <Typography variant="h5" pb={1}>
            {profile}
          </Typography>
          <Box>
            {skills.map((skill) => (
              <>
                <Typography variant="h5">{skill.name}</Typography>
                <Typography variant="h5">{skill.level}</Typography>
                <Typography variant="h5">{skill.years}</Typography>
              </>
            ))}
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};
export default UserCard5;
