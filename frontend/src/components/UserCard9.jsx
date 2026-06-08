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
          <Typography variant="h5" pb={1}>
            {email}
          </Typography>

          {workHistory.map((history) => (
            <Box>
              <Typography variant="h6" color="red" py={1}>
                {history.company.name}
              </Typography>
              <Typography variant="h6" color="green">
                {history.company.location.city}
              </Typography>
              <Typography variant="h6" color="green" pb={1}>
                {history.company.location.country}
              </Typography>
              <Typography variant="h6" color="blue">
                {history.position}
              </Typography>
              <Typography variant="h6" color="blue" pb={1}>
                {history.duration}
              </Typography>
              {history.projects.map((pro) => (
                <>
                  <Typography variant="h6" color="orange" pb={1}>
                    {pro.name}
                  </Typography>
                  <Typography variant="h6" color="brown" pb={1}>
                    {pro.tech}
                  </Typography>
                  <Typography variant="h6" color="yellow" pb={1}>
                    {pro.description}
                  </Typography>
                </>
              ))}
            </Box>
          ))}
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCard9;
