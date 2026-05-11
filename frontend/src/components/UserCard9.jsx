import { Box, Card, Grid, Typography } from "@mui/material";

const UserCard9 = ({ id, name, email, workHistory, projects }) => {
  console.log({ workHistory });
  return (
    <Grid size={{ xs: 12, lg: 12 }}>
      <Box
        sx={{ textAlign: "start", m: 1, boxShadow: "0px 10px 20px #707070" }}
      >
        <Card sx={{ mb: 2, p: 2 }}>
          <Typography fontSize={"30px"}>{id}</Typography>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h5">{email}</Typography>
          <Box>
            <Typography variant="h5" color="red" fontWeight={600}>
              WORKHISTORY
            </Typography>
            {workHistory.map((history) => (
              <Box>
                <Typography variant="h6">{history.company.name}</Typography>
                <Typography variant="h6">
                  {history.company.location.city}
                </Typography>
                <Typography variant="h6">
                  {history.company.location.country}
                </Typography>
                <Typography variant="h5">{history.position}</Typography>
                <Typography variant="h5">{history.duration}</Typography>
                <Typography variant="h5" color="red" fontWeight={600}>
                  PROJECTS
                </Typography>
                {history.projects.map((project) => (
                  <Box>
                    <Typography variant="h6">{project.name}</Typography>
                    <Typography variant="h6">{project.tech}</Typography>
                    <Typography variant="h6">{project.description}</Typography>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCard9;
