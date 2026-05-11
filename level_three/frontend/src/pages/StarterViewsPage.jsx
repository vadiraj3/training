import { Container, Grid, Stack, Typography } from '@mui/material';
import {
  CountCard,
  EmptyCard,
  FlagCard,
  MatrixCard,
  MessageCard,
  ResponseStarterSection,
} from '../components/ResponseStarterCards';

function StarterViewsPage() {
  return (
    <Container sx={{ py: 4 }}>
      <Stack spacing={2} sx={{ mb: 4 }}>
        <Typography variant="h3" component="h1" fontWeight={700}>
          Level 3 Starter Views
        </Typography>
        <Typography variant="body1" color="text.secondary">
          These examples show the intended UI patterns for the non-object API
          responses in tasks 6 to 10. Replace the sample values with the real
          API data when building your task pages.
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <ResponseStarterSection
            title="Task 6: String payload"
            description="Render a plain string in a message banner or content card."
          >
            <MessageCard message="Level 3 text response: practice rendering a plain string from an API." />
          </ResponseStarterSection>
        </Grid>

        <Grid item xs={12} md={6}>
          <ResponseStarterSection
            title="Task 7: Number payload"
            description="Show a single numeric value as a KPI."
          >
            <CountCard count={128} label="Training completions" />
          </ResponseStarterSection>
        </Grid>

        <Grid item xs={12} md={6}>
          <ResponseStarterSection
            title="Task 8: Boolean payload"
            description="Translate true or false into a visual state."
          >
            <FlagCard value={true} label="Automation enabled" />
          </ResponseStarterSection>
        </Grid>

        <Grid item xs={12} md={6}>
          <ResponseStarterSection
            title="Task 9: Null payload"
            description="Use an empty state when the API returns no data."
          >
            <EmptyCard title="No response content" />
          </ResponseStarterSection>
        </Grid>

        <Grid item xs={12}>
          <ResponseStarterSection
            title="Task 10: Matrix payload"
            description="Treat the first row as a table header and the rest as data rows."
          >
            <MatrixCard
              rows={[
                ['stage', 'owner', 'status', 'priority'],
                ['discovery', 'Strategy', 'done', 'Medium'],
                ['build', 'Frontend', 'in-progress', 'High'],
                ['qa', 'Testing', 'blocked', 'Critical'],
              ]}
            />
          </ResponseStarterSection>
        </Grid>
      </Grid>
    </Container>
  );
}

export default StarterViewsPage;
