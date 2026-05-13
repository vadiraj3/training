import { Box, Card, Grid, Typography } from "@mui/material";

const UserCard7 = ({ id, name, email, education }) => {
  console.log({ id, name, email });
  return (
    <Grid size={{ xs: 12, lg: 4 }}>
      <Box
        sx={{
          textAlign: "start",
          m: 1,
          boxShadow: "0px 10px 20px #707070",
        }}
      >
        <Card sx={{ mb: 2, p: 2 }}>
          <Typography fontSize={"30px"}>{id}</Typography>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h4">{email}</Typography>
          {education.map((education) => (
            <Box>
              <Typography variant="subtitle1" fontWeight={600} color="red">
                {education.school}
              </Typography>
              <Typography variant="subtitle1" fontWeight={500} color="green">
                {education.degree}
              </Typography>
              <Typography variant="subtitle1" color="grey">
                {education.year}
              </Typography>
              <Typography variant="subtitle1">
                {education.details.gpa}
              </Typography>
              <Typography variant="subtitle1">
                {education.details.honors}
              </Typography>
              <Typography variant="subtitle1">
                {education.details.major}
              </Typography>
            </Box>
          ))}
        </Card>
      </Box>
    </Grid>
  );
};
export default UserCard7;
