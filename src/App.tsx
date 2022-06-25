import AppProvider from './contexts';
import { Router } from './routes/Router';

function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  );
}

export default App;
