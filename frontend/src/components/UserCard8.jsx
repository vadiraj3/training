import { Box, Card, Grid, Typography } from "@mui/material";

const UserCard8 = ({
  id,
  name,
  email,
  address,
  hobbies,
  skills,
  education,
}) => {
  return (
    <Grid size={{ xs: 12, lg: 12 }}>
      <Box
        sx={{ textAlign: "start", m: 1, boxShadow: "0px 10px 20px #707070" }}
      >
        <Card sx={{ mb: 2, p: 2 }}>
          <Typography fontSize={"30px"}>{id}</Typography>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h5" pb={2}>
            {email}
          </Typography>
          <Typography variant="h5" color="red">
            {address.street}
          </Typography>
          <Typography variant="h5" color="red">
            {address.city}
          </Typography>
          <Typography variant="h5" color="red">
            {address.country}
          </Typography>
          <Typography variant="h5" color="red" pb={1}>
            {address.zipCode}
          </Typography>
          <>
            {hobbies.map((hobby) => (
              <Typography variant="h6" color="blue" pb={1}>
                {hobby}
              </Typography>
            ))}

            {skills.map((skill) => (
              <Box>
                <Typography variant="h6" color="green">
                  {skill.name}
                </Typography>
                <Typography variant="h6" color="green" pb={1}>
                  {skill.level}
                </Typography>
              </Box>
            ))}

            {education.map((educate) => (
              <Box>
                <Typography variant="h6" color="orange">
                  {educate.school}
                </Typography>
                <Typography variant="h6" color="orange" pb={1}>
                  {educate.degree}
                </Typography>
                <Typography variant="h6" color="orange" pb={1}>
                  {educate.year}
                </Typography>
              </Box>
            ))}
          </>
        </Card>
      </Box>
    </Grid>
  );
};
export default UserCard8;
