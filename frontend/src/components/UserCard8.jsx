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
          <Typography variant="h5">{email}</Typography>
          <Typography variant="h5">{address.street}</Typography>
          <Typography variant="h5">{address.city}</Typography>
          <Typography variant="h5">{address.country}</Typography>
          <Typography variant="h5">{address.zipCode}</Typography>
          <Typography fontSize={15} color="RED" fontWeight={600}>
            HOBBIES
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            {hobbies.map((hobby) => (
              <Box key={hobby.id}>
                <Typography variant="h5">{hobby}</Typography>
              </Box>
            ))}
          </Box>
          <Typography fontSize={15} color="RED" fontWeight={600}>
            SKILLS
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {skills.map((skill) => (
              <Box
                key={skill.id}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
                <Typography variant="h5">{skill.name}</Typography>
                <Typography variant="h5">{skill.level}</Typography>
              </Box>
            ))}
          </Box>
          <Typography fontSize={15} color="RED" fontWeight={600}>
            EDUCATION
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            {education.map((education) => (
              <Box
                key={education.id}
                sx={{ display: "flex", alignItems: "center", gap: 2 }}
              >
                <Typography variant="h5">{education.school}</Typography>
                <Typography variant="h5">{education.degree}</Typography>
                <Typography variant="h5">{education.year}</Typography>
              </Box>
            ))}
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};
export default UserCard8;
