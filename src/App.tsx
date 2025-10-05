import { TaskContextProvider } from './contexts/task-context';
import { Home } from './pages/home';
import './styles/global.css';
import './styles/theme.css';

export function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  );
}
