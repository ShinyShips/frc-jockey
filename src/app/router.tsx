import { Outlet, createBrowserRouter, useNavigate } from 'react-router-dom';
import LoginPage from '../app/auth/login/page';
import RegisterPage from '../app/auth/register/page';
import EntryPage from '../app/page';
import TodoEditPage from '../app/views/todo-lists/edit/page';
import TodoListsPage from '../app/views/todo-lists/page';
import ViewsLayout from '../app/views/layout';
import SQLConsolePage from '../app/views/sql-console/page';
import { useSupabase } from '../components/providers/SystemProvider';
import React from 'react';
import TeamListPage from './views/team-list/page';
import StatsPage from './views/stats/page';
import SearchPage from './views/search/page';

export const TODO_LISTS_ROUTE = '/views/todo-lists';
export const TODO_EDIT_ROUTE = '/views/todo-lists/:id';
export const LOGIN_ROUTE = '/auth/login';
export const REGISTER_ROUTE = '/auth/register';
export const SQL_CONSOLE_ROUTE = '/sql-console';
export const TEAM_LIST_ROUTE = '/views/team-list';
export const STATS_ROUTE = '/views/stats';
export const SEARCH_ROUTE = '/views/search';


interface AuthGuardProps {
  children: JSX.Element;
}

const AuthGuard = ({ children }: AuthGuardProps) => {
  const connector = useSupabase()

  const navigate = useNavigate();
  React.useEffect(() => {
    if (!connector) {
      console.error(`No Supabase connector has been created yet.`);
      return;
    }

    connector.client.auth.onAuthStateChange(async (event, _session) => {
      if (event === 'SIGNED_OUT') {
        navigate(LOGIN_ROUTE);
      }
    });

    const loginGuard = () => {
      if (!connector.currentSession) {
        navigate(LOGIN_ROUTE);
      }
    }
    if (connector.ready) {
      loginGuard();
    } else {
      const l = connector.registerListener({
        initialized: () => {
          loginGuard();
        }
      });
      return () => l?.();
    }

  }, []);
  return children;
};

/**
 * Navigate to this route after authentication
 */
export const DEFAULT_ENTRY_ROUTE = '/views/todo-lists';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <EntryPage />
  },
  {
    path: LOGIN_ROUTE,
    element: <LoginPage />
  },
  {
    path: REGISTER_ROUTE,
    element: <RegisterPage />
  },
  {
    element: (
      <AuthGuard>
        <ViewsLayout>
          <Outlet />
        </ViewsLayout>
      </AuthGuard>
    ),
    children: [
      {
        path: TODO_LISTS_ROUTE,
        element: <TodoListsPage />
      },
      {
        path: TODO_EDIT_ROUTE,
        element: <TodoEditPage />
      },
      {
        path: SQL_CONSOLE_ROUTE,
        element: <SQLConsolePage />
      }
    ]
  },
  {
    path: TEAM_LIST_ROUTE,
    element: <TeamListPage />
  },
  {
    path: STATS_ROUTE,
    element: <StatsPage />
  },
  {
    path: SEARCH_ROUTE,
    element: <SearchPage />
  }
]);