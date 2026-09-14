import { createBrowserRouter, RouterProvider } from 'react-router';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './ui/AppLayout';
import HomePage from './pages/HomePage';
import AddMilesPage from './pages/AddMilesPage';
import ViewMilesPage from './pages/ViewMilesPage';
import MileageDetails from './pages/MileageDetailsPage';
import LoginPage from './pages/LoginPage';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const router = createBrowserRouter(
  [
    {
      element: <AppLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/add-miles',
          element: <AddMilesPage />,
        },
        {
          path: '/view-miles',
          element: <ViewMilesPage />,
        },
        {
          path: '/view-miles/:timeFrame',
          element: <MileageDetails />,
        },
        {
          path: '/login',
          element: <LoginPage />,
        },
      ],
    },
  ],
  {
    basename: '/mile-metrics',
  },
);

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
