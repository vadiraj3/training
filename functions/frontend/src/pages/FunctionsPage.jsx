import { useState } from 'react';
import {
  Container,
  Typography,
  Box,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Chip,
  Paper,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Grid,
  Alert,
  AlertTitle
} from '@mui/material';
import {
  ExpandMore as ExpandMoreIcon,
  Terminal as TerminalIcon,
  School as SchoolIcon,
  Code as CodeIcon,
  PlayArrow as PlayArrowIcon,
  CheckCircle as CheckCircleIcon,
  Cancel as CancelIcon
} from '@mui/icons-material';

import { lessons } from '../data/lessons';
import CodeBlock from '../components/CodeBlock';
import { traineeExercises } from '../exercises';

const FunctionsPage = () => {
  const [expanded, setExpanded] = useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const getLessonProgress = (lesson) => {
    const results = lesson.traineeTask.requirements.map(req => req.check(traineeExercises));
    const completedCount = results.filter(r => r === true).length;
    return {
      completedCount,
      totalCount: lesson.traineeTask.requirements.length,
      isFullyCompleted: completedCount === lesson.traineeTask.requirements.length
    };
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* Header Section */}
      <Box sx={{ mb: 6, textAlign: 'center' }}>
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontWeight: 800, 
            background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 1
          }}
        >
          Mastering JavaScript Functions
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
          From basic definitions to advanced return statements. Learn the core of JavaScript programming.
        </Typography>
        
        <Alert severity="info" icon={<SchoolIcon />} sx={{ borderRadius: 2, textAlign: 'left', mb: 4 }}>
          <AlertTitle>Learning Path</AlertTitle>
          Follow the progressive lessons below. Each lesson includes a <strong>Teacher's Explanation</strong>, 
          <strong>Code Examples</strong>, and a <strong>Trainee Task</strong> for you to complete.
          <br />
          <strong>Status:</strong> Your code in <code>src/exercises/</code> is validated in real-time!
        </Alert>
      </Box>

      {/* Lessons Accordion */}
      <Box sx={{ mb: 4 }}>
        {lessons.map((lesson) => {
          const progress = getLessonProgress(lesson);
          return (
            <Accordion 
              key={lesson.id} 
              expanded={expanded === `panel${lesson.id}`} 
              onChange={handleChange(`panel${lesson.id}`)}
              sx={{ 
                mb: 2, 
                borderRadius: '12px !important',
                '&:before': { display: 'none' },
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                overflow: 'hidden',
                border: '1px solid',
                borderColor: expanded === `panel${lesson.id}` ? 'primary.main' : 'divider'
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ 
                  px: 3,
                  py: 1,
                  bgcolor: expanded === `panel${lesson.id}` ? 'rgba(33, 150, 243, 0.04)' : 'transparent'
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center', width: '100%', gap: 2 }}>
                  {progress.isFullyCompleted ? (
                    <CheckCircleIcon color="success" />
                  ) : (
                    <Box sx={{ width: 24, height: 24, borderRadius: '50%', border: '2px solid #ccc' }} />
                  )}
                  <Typography variant="h6" sx={{ fontWeight: 600, flexGrow: 1 }}>
                    Lesson {lesson.id}: {lesson.title}
                  </Typography>
                  <Chip 
                    label={`${progress.completedCount}/${progress.totalCount}`} 
                    size="small" 
                    color={progress.isFullyCompleted ? "success" : "default"} 
                    sx={{ fontWeight: 700 }}
                  />
                  <Chip 
                    label={lesson.topic} 
                    size="small" 
                    color="primary" 
                    variant="outlined" 
                    sx={{ fontWeight: 600 }}
                  />
                  <Chip 
                    label={lesson.difficulty} 
                    size="small" 
                    color={lesson.difficulty === 'Beginner' ? 'success' : 'warning'} 
                    sx={{ fontWeight: 600 }}
                  />
                </Box>
              </AccordionSummary>
              
              <AccordionDetails sx={{ p: 4, pt: 0 }}>
                <Divider sx={{ mb: 3 }} />
                
                <Grid container spacing={4}>
                  {/* Left Column: Teacher Explanation */}
                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="subtitle1" color="primary" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 700, mb: 2 }}>
                        <SchoolIcon fontSize="small" /> Teacher's Explanation
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, color: 'text.secondary' }}>
                        {lesson.explanation}
                      </Typography>
                      
                      {lesson.syntax && (
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>Basic Syntax:</Typography>
                          {lesson.syntax.normal && <CodeBlock code={lesson.syntax.normal} label="Normal Function" />}
                          {lesson.syntax.arrow && <CodeBlock code={lesson.syntax.arrow} label="Arrow Function" />}
                          {lesson.syntax.direct && <CodeBlock code={lesson.syntax.direct} label="Direct Usage" />}
                          {lesson.syntax.button && <CodeBlock code={lesson.syntax.button} label="Button Usage" />}
                          {lesson.syntax.multiple && <CodeBlock code={lesson.syntax.multiple} label="Multiple Parameters" />}
                          {lesson.syntax.default && <CodeBlock code={lesson.syntax.default} label="Default Values" />}
                          {lesson.syntax.inline && <CodeBlock code={lesson.syntax.inline} label="Inline Function" />}
                        </Box>
                      )}

                      {lesson.teacherExample && (
                        <Box>
                          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>Example Case:</Typography>
                          <Typography variant="body2" sx={{ mb: 1, fontStyle: 'italic' }}>{lesson.teacherExample.description}</Typography>
                          {lesson.teacherExample.normal && <CodeBlock code={lesson.teacherExample.normal} label="Normal Implementation" />}
                          {lesson.teacherExample.arrow && <CodeBlock code={lesson.teacherExample.arrow} label="Arrow Implementation" />}
                          {lesson.teacherExample.code && <CodeBlock code={lesson.teacherExample.code} label="Implementation" />}
                        </Box>
                      )}
                    </Box>
                  </Grid>

                  {/* Right Column: Trainee Task */}
                  <Grid item xs={12} md={6}>
                    <Paper 
                      variant="outlined" 
                      sx={{ 
                        p: 3, 
                        borderRadius: 3, 
                        bgcolor: 'rgba(0, 0, 0, 0.02)',
                        height: '100%',
                        borderStyle: 'dashed',
                        borderWidth: 2
                      }}
                    >
                      <Typography variant="subtitle1" color="secondary" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 700, mb: 2 }}>
                        <CodeIcon fontSize="small" /> Trainee Task
                      </Typography>
                      
                      <Typography variant="body1" sx={{ mb: 2, fontWeight: 500 }}>
                        {lesson.traineeTask.description}
                      </Typography>
                      
                      <List dense>
                        {lesson.traineeTask.requirements.map((req, index) => {
                          const isCompleted = req.check(traineeExercises);
                          return (
                            <ListItem key={index} sx={{ alignItems: 'flex-start', px: 0 }}>
                              <ListItemIcon sx={{ minWidth: 32, mt: 0.5 }}>
                                {isCompleted ? (
                                  <CheckCircleIcon color="success" fontSize="small" />
                                ) : (
                                  <CancelIcon color="error" fontSize="small" />
                                )}
                              </ListItemIcon>
                              <ListItemText 
                                primary={req.text} 
                                primaryTypographyProps={{ 
                                  variant: 'body2', 
                                  sx: { 
                                    color: isCompleted ? 'success.main' : 'text.secondary',
                                    fontWeight: isCompleted ? 600 : 400
                                  } 
                                }} 
                              />
                            </ListItem>
                          );
                        })}
                      </List>

                      <Divider sx={{ my: 3 }} />

                      <Box sx={{ mt: 'auto' }}>
                        <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1 }}>
                          <TerminalIcon fontSize="small" /> Exercise File:
                        </Typography>
                        <Paper sx={{ p: 1, bgcolor: 'grey.100', mb: 2, fontFamily: 'monospace', fontSize: '0.8rem' }}>
                          src/exercises/Lesson{lesson.id}.js
                        </Paper>
                        
                        <Alert 
                          severity={progress.isFullyCompleted ? "success" : "warning"} 
                          icon={<PlayArrowIcon />} 
                          sx={{ mt: 2 }}
                        >
                          {progress.isFullyCompleted ? "Task Completed! Well done." : `Expected Result: ${lesson.traineeTask.expectedResult}`}
                        </Alert>
                      </Box>
                    </Paper>
                  </Grid>
                </Grid>
              </AccordionDetails>
            </Accordion>
          );
        })}
      </Box>

      {/* Footer Info */}
      <Paper sx={{ p: 4, borderRadius: 4, bgcolor: 'primary.main', color: 'white', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
          Ready to continue?
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
          Keep implementing the functions in the <code>src/exercises/</code> directory. 
          The dashboard will update automatically as you save your changes.
        </Typography>
        <Button 
          variant="contained" 
          color="secondary" 
          size="large" 
          sx={{ borderRadius: 10, px: 4, py: 1.5, fontWeight: 700, boxShadow: '0 4px 14px 0 rgba(0,0,0,0.39)' }}
          onClick={() => {
            const nextLesson = lessons.find(l => !getLessonProgress(l).isFullyCompleted);
            if (nextLesson) setExpanded(`panel${nextLesson.id}`);
          }}
        >
          Go to Next Task
        </Button>
      </Paper>
    </Container>
  );
};

export default FunctionsPage;
