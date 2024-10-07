import './App.css';
import { Box, Container, Typography } from '@mui/material';
import TaskForm from './Components/TaskForm';
import TaskFilter from './Components/TaskFilter';
import TaskList from './Components/TaskList';

function App() {
  return (
    <Container maxWidth="sm">
      <Box display="flex" justifyContent="center" alignItems="center" my={1}>
        <Typography variant="h3">
          Task Manager
        </Typography>
      </Box>
      <TaskForm />
      <TaskFilter />
      <TaskList />
    </Container>
  );
}

export default App;
