import { Box, Card, Grid, Typography } from "@mui/material";

const UserCard10 = ({
  id,
  name,
  email,
  profile,
  address,
  contact,
  social,
  workHistory,
  projects,
  education,
  hobbies,
  skills,
}) => {
  return (
    <Grid size={{ xs: 12, lg: 12 }}>
      <Box
        sx={{ textAlign: "center", m: 1, boxShadow: "0px 10px 20px #707070" }}
      >
        <Card sx={{ mb: 2, p: 2 }}>
          <Typography fontSize={"30px"}>{id}</Typography>
          <Typography variant="h3">{name}</Typography>
          <Typography variant="h5">{email}</Typography>
          <Typography variant="h4" color="red" fontWeight={600}>
            PROFILE
          </Typography>
          <Typography variant="h5">{profile.bio}</Typography>
          <Typography variant="h5">{profile.age}</Typography>
          <Typography variant="h5">{profile.joinDate}</Typography>

          <Typography variant="h4" color="red" fontWeight={600}>
            ADDRESS
          </Typography>
          <Box>
            <Typography variant="h6">{address.street}</Typography>
            <Typography variant="h6">{address.city}</Typography>
            <Typography variant="h6">{address.state}</Typography>
            <Typography variant="h6">{address.country}</Typography>
            <Typography variant="h6">{address.zipCode}</Typography>
            <Typography variant="h4" color="red" fontWeight={600}>
              COORDINATES
            </Typography>
            <Typography variant="h6">{address.coordinates.lat}</Typography>
            <Typography variant="h6">{address.coordinates.lng}</Typography>
          </Box>
          <Typography variant="h4" color="red" fontWeight={600}>
            CONTACT
          </Typography>
          <Typography variant="h6">{contact.phone.mobile}</Typography>
          <Typography variant="h6" pb={1}>
            {contact.phone.work}
          </Typography>
          <Typography variant="h6">{contact.email.personal}</Typography>
          <Typography variant="h6">{contact.email.work}</Typography>
          <Typography variant="h4" color="red" fontWeight={600}>
            SOCIAL
          </Typography>
          <Typography variant="h6">{social.linkedin}</Typography>
          <Typography variant="h6">{social.github}</Typography>
          <Typography variant="h6">{social.twitter}</Typography>
          <Typography variant="h4" color="red" fontWeight={600}>
            WORK HISTORY
          </Typography>
          <>
            {workHistory.map((history) => (
              <Box>
                <Typography variant="h6">{history.company.name}</Typography>
                <Typography variant="h4" color="red" fontWeight={600}>
                  WORK LOCATION
                </Typography>
                <Typography variant="h6">
                  {history.company.location.city}
                </Typography>
                <Typography variant="h6">
                  {history.company.location.country}
                </Typography>
                <Typography variant="h4" color="red" fontWeight={600}>
                  WORK ADDRESS
                </Typography>
                <Typography variant="h6">
                  {history.company.location.address.street}
                </Typography>
                <Typography variant="h6">
                  {history.company.location.address.zipCode}
                </Typography>
                <Typography variant="h4" color="red" fontWeight={600}>
                  WORK POSITION
                </Typography>
                <Typography variant="h6">{history.position}</Typography>
                <Typography variant="h4" color="red" fontWeight={600}>
                  WORK DURATION
                </Typography>
                <Typography variant="h6">{history.duration.start}</Typography>
                <Typography variant="h6">{history.duration.end}</Typography>
                <Typography variant="h6">{history.duration.months}</Typography>
                <Typography variant="h4" color="red" fontWeight={600}>
                  PROJECTS
                </Typography>
                {history.projects.map((pro) => (
                  <Box>
                    <Typography variant="h6">{pro.name}</Typography>
                    <Typography variant="h4" color="red" fontWeight={600}>
                      PROJECTS TECH
                    </Typography>
                    <Typography variant="h6">{pro.tech}</Typography>
                    <Typography variant="h6">{pro.team.size}</Typography>
                    <Typography variant="h6">{pro.team.roles}</Typography>
                    <Typography variant="h6">{pro.achievements}</Typography>
                  </Box>
                ))}
              </Box>
            ))}
            <Typography variant="h4" color="red" fontWeight={600}>
              EDUCATION
            </Typography>
            {education.map((cation) => (
              <Box>
                <Typography variant="h5" color="red" fontWeight={600}>
                  SCHOOL
                </Typography>
                <Typography variant="h6">{cation.school.name}</Typography>
                <Typography variant="h5" color="red" fontWeight={600}>
                  LOCATION
                </Typography>
                <Typography variant="h6">
                  {cation.school.location.city}
                </Typography>
                <Typography variant="h6">
                  {cation.school.location.country}
                </Typography>
                <Typography variant="h6">{cation.degree}</Typography>
                <Typography variant="h6">{cation.year}</Typography>
                <Typography variant="h5" color="red" fontWeight={600}>
                  EDUCATION DETAILS
                </Typography>
                <Typography variant="h6">{cation.details.gpa}</Typography>
                <Typography variant="h6">{cation.details.honors}</Typography>
                <Typography variant="h6">{cation.details.major}</Typography>
                <Typography variant="h5" color="red" fontWeight={600}>
                  EDUCATION COURSES
                </Typography>
                <Typography variant="h6">{cation.details.courses}</Typography>
              </Box>
            ))}
            <Typography variant="h4" color="red" fontWeight={600}>
              HOBBIES
            </Typography>
            {hobbies.map((hobby) => (
              <Typography variant="h6">{hobby}</Typography>
            ))}
            <Typography variant="h4" color="red" fontWeight={600}>
              SKILLS
            </Typography>
            {skills.map((skill) => (
              <Box>
                <Typography variant="h6">{skill.name}</Typography>
                <Typography variant="h6">{skill.level}</Typography>
                <Typography variant="h6">{skill.years}</Typography>

                <Typography variant="h6">{skill.certifications}</Typography>
              </Box>
            ))}
          </>
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCard10;
