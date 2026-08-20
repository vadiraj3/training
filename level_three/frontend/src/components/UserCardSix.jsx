import { Box, Card, Grid, Typography } from "@mui/material";
import React from "react";

const UserCardSix = ({ id, editor, knowledgeBase }) => {
  return (
    <Grid size={{ lg: 4 }}>
      <Box>
        <Card>
          <Box p={1} textAlign={"start"}>
            <Typography variant="h5">ID : {id}</Typography>
            <Typography variant="h5" pb={1}>
              owner : {editor}
            </Typography>
            <Typography fontSize={22} fontWeight={600}>
              knowledgeBase
            </Typography>
            <Typography variant="h6">
              ID : {knowledgeBase.article.id}
            </Typography>
            <Typography variant="h6">
              title : {knowledgeBase.article.title}
            </Typography>
            <Typography variant="h6">
              summary : {knowledgeBase.article.summary}
            </Typography>
            <Typography fontSize={22} fontWeight={600}>
              sections
            </Typography>
            {knowledgeBase.article.sections.map((sec, secid) => (
              <Box key={secid}>
                <Typography variant="h6">heading : {sec.heading}</Typography>
                <Typography fontSize={22} fontWeight={600}>
                  paragraphs
                </Typography>
                {sec.paragraphs.map((para, paraid) => (
                  <Typography variant="h6" key={paraid}>
                    paragraphs : {para}
                  </Typography>
                ))}
                {sec.callouts.map((call, callid) => (
                  <Box key={callid}>
                    <Typography variant="h6">label : {call.label}</Typography>
                    <Typography variant="h6">value : {call.value}</Typography>
                    <Typography fontSize={22} fontWeight={600}>
                      references
                    </Typography>
                    {knowledgeBase.article.references.map((refer, referid) => (
                      <Box key={referid}>
                        <Typography variant="h6">
                          title : {refer.title}
                        </Typography>
                        <Typography variant="h6">url : {refer.url}</Typography>
                        <Typography fontSize={22} fontWeight={600}>
                          assets
                        </Typography>
                        {knowledgeBase.article.assets.images.map(
                          (img, imgid) => (
                            <Box key={imgid}>
                              <Typography variant="h6">{img}</Typography>
                              <Typography fontSize={22} fontWeight={600}>
                                Files
                              </Typography>
                              {knowledgeBase.article.assets.files.map(
                                (file, fileid) => (
                                  <Box key={fileid}>
                                    <Typography variant="h6">{file}</Typography>
                                    <Typography fontSize={22} fontWeight={600}>
                                      Tags
                                    </Typography>
                                    {knowledgeBase.tags.map((tag, tagid) => (
                                      <Typography variant="h6" key={tagid}>
                                        {tag}
                                      </Typography>
                                    ))}
                                  </Box>
                                ),
                              )}
                            </Box>
                          ),
                        )}
                      </Box>
                    ))}
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

export default UserCardSix;
