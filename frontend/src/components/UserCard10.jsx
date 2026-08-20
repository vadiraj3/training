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
                <Typography variant="h6">
                  {history.company.location.city}
                </Typography>
                <Typography variant="h6">
                  {history.company.location.country}
                </Typography>
                <Typography variant="h6">
                  {history.company.location.address.street}
                </Typography>
                <Typography variant="h6">
                  {history.company.location.address.zipCode}
                </Typography>
                <Typography variant="h6">{history.position}</Typography>
                <Typography variant="h6">{history.duration.start}</Typography>
                <Typography variant="h6">{history.duration.end}</Typography>
                <Typography variant="h6">{history.duration.months}</Typography>
                {history.projects.map((pro) => (
                  <Box>
                    <Typography variant="h6" pb={1}>
                      {pro.name}
                    </Typography>
                    {pro.tech.map((tech) => (
                      <>
                        <Typography variant="h6">{tech}</Typography>
                      </>
                    ))}
                    <Typography variant="h6">{pro.team.size}</Typography>
                    {pro.team.roles.map((role) => (
                      <Typography variant="h6">{role}</Typography>
                    ))}
                    {pro.achievements.map((achive) => (
                      <>
                        <Typography variant="h6">{achive}</Typography>
                      </>
                    ))}
                  </Box>
                ))}
              </Box>
            ))}
          </>
          <Typography variant="h4" color="red" fontWeight={600}>
            EDUCATION
          </Typography>
          {education.map((educate) => (
            <>
              <Typography variant="h6" pb={1}>
                {educate.school.name}
              </Typography>
              <Typography variant="h6" pb={1}>
                {educate.school.location.city}
              </Typography>
              <Typography variant="h6" pb={1}>
                {educate.school.location.country}
              </Typography>
              <Typography variant="h6">{educate.degree}</Typography>
              <Typography variant="h6" pb={1}>
                {educate.year}
              </Typography>
              <Typography variant="h6">{educate.details.gpa}</Typography>
              <Typography variant="h6">{educate.details.honors}</Typography>
              <Typography variant="h6" pb={1}>
                {educate.details.major}
              </Typography>
              {educate.details.courses.map((cours) => (
                <Typography variant="h6">{cours}</Typography>
              ))}
            </>
          ))}
          <Typography variant="h4" color="red" fontWeight={600}>
            HOBBIES
          </Typography>
          {hobbies.map((hobby) => (
            <Typography variant="h6" pt={1}>
              {hobby}
            </Typography>
          ))}
          <Typography variant="h4" color="red" fontWeight={600}>
            SKILLS
          </Typography>
          {skills.map((skill) => (
            <>
              <Typography variant="h6" pt={1}>
                {skill.name}
              </Typography>
              <Typography variant="h6">{skill.level}</Typography>
              <Typography variant="h6">{skill.year}</Typography>
              {skill.certifications.map((certify) => (
                <Typography variant="h6" pt={1}>
                  {certify}
                </Typography>
              ))}
            </>
          ))}
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCard10;
