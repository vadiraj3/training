import { Box, Card, Grid, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const UserCard10 = ({
  id,
  name,
  email,
  profile,
  address,
  contact,
  social,
  workHistory,
  education,
  hobbies,
  skills,
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
          <Typography variant="h4" color="red" fontWeight={600}>
            PROFILE
          </Typography>
          <Typography variant="h5">{profile.bio}</Typography>
          <Typography variant="h5">{profile.age}</Typography>
          <Typography variant="h5">{profile.joinDate}</Typography>
          <Box sx={{ width: "100px" }}>
            <Avatar
              alt="Remy Sharp"
              src="https://i.pravatar.cc/150?img=1"
              sx={{ width: "100%", height: "100%" }}
            />
          </Box>
          <Typography variant="h4" color="red" fontWeight={600}>
            ADDRESS
          </Typography>
          <Typography variant="h5">{address.street}</Typography>
          <Typography variant="h5">{address.city}</Typography>
          <Typography variant="h5">{address.state}</Typography>
          <Typography variant="h5">{address.country}</Typography>
          <Typography variant="h5">{address.zipCode}</Typography>
          <Typography variant="h5">{address.coordinates.lat}</Typography>
          <Typography variant="h5">{address.coordinates.lng}</Typography>
          <Typography variant="h4" color="red" fontWeight={600}>
            CONTACT
          </Typography>
          <Typography variant="h5">{contact.phone.mobile}</Typography>
          <Typography variant="h5">{contact.phone.work}</Typography>
          <Typography variant="h5">{contact.email.personal}</Typography>
          <Typography variant="h5">{contact.email.work}</Typography>
          <Typography variant="h4" color="red" fontWeight={600}>
            SOCIAL
          </Typography>
          <Typography variant="h5">{social.linkedin}</Typography>
          <Typography variant="h5">{social.github}</Typography>
          <Typography variant="h5">{social.twitter}</Typography>
          <Box>
            <Typography variant="h4" color="red" fontWeight={600}>
              WORKHISTORY
            </Typography>
            {workHistory.map((history) => (
              <Box>
                <Typography variant="h5">{history.company.name}</Typography>
                <Typography variant="h5">
                  {history.company.location.city}
                </Typography>
                <Typography variant="h5">
                  {history.company.location.country}
                </Typography>
                <Typography variant="h5">
                  {history.company.location.address.street}
                </Typography>
                <Typography variant="h5">
                  {history.company.location.address.zipCode}
                </Typography>
                <Typography variant="h5">{history.position}</Typography>
                <Typography variant="h5"> {history.duration.start}</Typography>
                <Typography variant="h5">{history.duration.end}</Typography>
                <Typography variant="h5">{history.duration.months}</Typography>
                <Typography variant="h4" color="red" fontWeight={600}>
                  PROJECTS
                </Typography>
                {history.projects.map((projects) => (
                  <Box>
                    <Typography variant="h5">{projects.name}</Typography>
                    <Typography variant="h5">{projects.tech}</Typography>
                    <Typography variant="h5">{projects.team.size}</Typography>
                    <Typography variant="h4" color="red" fontWeight={600}>
                      ROLES
                    </Typography>
                    {projects.team.roles.map((role) => (
                      <Typography variant="h5">{role}</Typography>
                    ))}
                    <Typography variant="h4" color="red" fontWeight={600}>
                      ACHIEVEMENTS
                    </Typography>
                    {projects.achievements.map((achive) => (
                      <Typography variant="h5">{achive}</Typography>
                    ))}
                  </Box>
                ))}
              </Box>
            ))}
            <Typography variant="h4" color="red" fontWeight={600}>
              EDUCATION
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              {education.map((education) => (
                <Box>
                  <Typography variant="h6">{education.school.name}</Typography>
                  <Typography variant="h6">
                    {education.school.location.city}
                  </Typography>
                  <Typography variant="h6">
                    {education.school.location.country}
                  </Typography>
                  <Typography variant="h6">{education.degree}</Typography>
                  <Typography variant="h6">{education.year}</Typography>
                  <Typography variant="h6">{education.details.gpa}</Typography>
                  <Typography variant="h6">
                    {education.details.honors}
                  </Typography>
                  <Typography variant="h6">
                    {education.details.major}
                  </Typography>
                  {education.details.courses.map((course) => (
                    <Typography variant="h6">{course}</Typography>
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
          <Typography variant="h4" color="red" fontWeight={600}>
            HOBBIES
          </Typography>
          {hobbies.map((hobby) => (
            <Box>
              <Typography variant="h5">{hobby}</Typography>
            </Box>
          ))}
          <Typography variant="h4" color="red" fontWeight={600}>
            SKILLS
          </Typography>
          {skills.map((skill) => (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography variant="h5">{skill.name}</Typography>
              <Typography variant="h5">{skill.level}</Typography>
              <Typography variant="h5">{skill.years}</Typography>
              {skill.certifications.map((certifications) => (
                <Typography variant="h5">{skill.certifications}</Typography>
              ))}
            </Box>
          ))}
        </Card>
      </Box>
    </Grid>
  );
};

export default UserCard10;
