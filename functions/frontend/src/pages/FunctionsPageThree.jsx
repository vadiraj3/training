import { useState } from 'react';
import { Link } from 'react-router-dom';
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
  Cancel as CancelIcon,
  ArrowBack as ArrowBackIcon,
  Stars as StarsIcon
} from '@mui/icons-material';

import { lessons } from '../data/lessons';
import CodeBlock from '../components/CodeBlock';
import { traineeExercises } from '../exercises';

const FunctionsPageThree = () => {
  const [expanded, setExpanded] = useState('panel23');

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
            background: 'linear-gradient(45deg, #7C4DFF 30%, #00B0FF 90%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            mb: 1
          }}
        >
          Functions Level 3: Real-World Engineering
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '800px', mx: 'auto', mb: 4 }}>
          Mastering production-grade Javascript techniques: nesting, destructuring, optional chaining, and advanced array manipulation.
        </Typography>
        
        <Alert severity="info" icon={<StarsIcon />} sx={{ borderRadius: 2, textAlign: 'left', mb: 4, bgcolor: 'rgba(124, 77, 255, 0.08)', border: '1px solid rgba(124, 77, 255, 0.2)' }}>
          <AlertTitle sx={{ color: '#7C4DFF', fontWeight: 700 }}>Production-Ready Engineering Track</AlertTitle>
          These 10 exercises focus on real-world engineering paradigms. You will learn to clean inputs, safely traverse nested objects, dynamic properties, and run array calculations.
          <br />
          Each task requires you to call the function in <code>src/exercises/index.js</code> to complete the lesson!
        </Alert>
      </Box>

      {/* Lessons Accordion */}
      <Box sx={{ mb: 4 }}>
        {lessons.filter(l => l.id >= 23 && l.id <= 32).map((lesson) => {
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
                borderColor: expanded === `panel${lesson.id}` ? '#7C4DFF' : 'divider'
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{ 
                  px: 3,
                  py: 1,
                  bgcolor: expanded === `panel${lesson.id}` ? 'rgba(124, 77, 255, 0.04)' : 'transparent'
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
                    sx={{ fontWeight: 600, color: '#7C4DFF', borderColor: '#7C4DFF' }} 
                    variant="outlined" 
                  />
                  <Chip 
                    label={lesson.difficulty} 
                    size="small" 
                    color="error"
                    sx={{ fontWeight: 600 }}
                  />
                </Box>
              </AccordionSummary>
              
              <AccordionDetails sx={{ p: 4, pt: 0 }}>
                <Divider sx={{ mb: 3 }} />
                
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box sx={{ mb: 4 }}>
                      <Typography variant="subtitle1" sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 700, mb: 2, color: '#7C4DFF' }}>
                        <SchoolIcon fontSize="small" /> Teacher's Explanation
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.7, color: 'text.secondary' }}>
                        {lesson.explanation}
                      </Typography>
                      
                      {lesson.syntax && (
                        <Box sx={{ mb: 3 }}>
                          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>Syntax Guide:</Typography>
                          {Object.entries(lesson.syntax).map(([key, code]) => (
                            <CodeBlock key={key} code={code} label={key.charAt(0).toUpperCase() + key.slice(1)} />
                          ))}
                        </Box>
                      )}

                      {lesson.teacherExample && (
                        <Box>
                          <Typography variant="subtitle2" gutterBottom sx={{ fontWeight: 700 }}>Example Case:</Typography>
                          <Typography variant="body2" sx={{ mb: 1, fontStyle: 'italic' }}>{lesson.teacherExample.description}</Typography>
                          {lesson.teacherExample.code && <CodeBlock code={lesson.teacherExample.code} label="Implementation" />}
                          {lesson.teacherExample.normal && <CodeBlock code={lesson.teacherExample.normal} label="Normal" />}
                          {lesson.teacherExample.arrow && <CodeBlock code={lesson.teacherExample.arrow} label="Arrow" />}
                        </Box>
                      )}
                    </Box>
                  </Grid>

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
                          src/exercises/third_level/Lesson{lesson.id}.js
                        </Paper>
                        
                        <Alert 
                          severity={progress.isFullyCompleted ? "success" : "warning"} 
                          icon={<PlayArrowIcon />} 
                          sx={{ mt: 2 }}
                        >
                          {progress.isFullyCompleted ? "Task Completed! Great work." : `Expected Result: ${lesson.traineeTask.expectedResult}`}
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
      <Paper sx={{ p: 4, borderRadius: 4, bgcolor: '#7C4DFF', color: 'white', textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 700 }}>
          You've Arrived at Level 3!
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, opacity: 0.9 }}>
          Congratulations on tackling real-world code structures and deep manipulation.
        </Typography>
        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
          <Button 
            variant="contained" 
            color="inherit" 
            size="large" 
            component={Link}
            to="/level-two"
            startIcon={<ArrowBackIcon />}
            sx={{ borderRadius: 10, px: 4, py: 1.5, fontWeight: 700, color: '#7C4DFF' }}
          >
            Back to Level 2
          </Button>
          <Button 
            variant="contained" 
            color="secondary" 
            size="large" 
            sx={{ borderRadius: 10, px: 4, py: 1.5, fontWeight: 700, boxShadow: '0 4px 14px 0 rgba(0,0,0,0.39)' }}
            onClick={() => {
              const nextLesson = lessons.filter(l => l.id >= 23 && l.id <= 32).find(l => !getLessonProgress(l).isFullyCompleted);
              if (nextLesson) setExpanded(`panel${nextLesson.id}`);
            }}
          >
            Next Challenge
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default FunctionsPageThree;
