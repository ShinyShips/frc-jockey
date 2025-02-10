import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { SystemProvider } from '../components/providers/SystemProvider';
import { ThemeProvider } from '../components/providers/ThemeProvider';
import { router } from '../app/router';

const root = createRoot(document.getElementById('app')!);
root.render(<App />);

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <SystemProvider>
        <RouterProvider router={router}/>
      </SystemProvider>
    </ThemeProvider>
  );
}