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
          <Box>
            {education.map((educate) => (
              <>
                <Typography variant="h6" pt={1} color="red">
                  {educate.school}
                </Typography>
                <Typography variant="h6">{educate.degree}</Typography>
                <Typography variant="h6" pb={1}>
                  {educate.year}
                </Typography>
                <Typography variant="h6" color="blue">
                  {educate.details.gpa}
                </Typography>
                <Typography variant="h6">{educate.details.honors}</Typography>
                <Typography variant="h6">{educate.details.major}</Typography>
              </>
            ))}
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};
export default UserCard7;
