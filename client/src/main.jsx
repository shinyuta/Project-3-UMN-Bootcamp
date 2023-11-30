import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import NoMatch from './pages/NoMatch';
import Account from './pages/Account.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TypingTest from './pages/TypingTest.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <TypingTest />
      }, {
        path: '/login',
        element: <Login />
      }, {
        path: '/signup',
        element: <Signup />
      }, {
        path: '/test',
        element: <TypingTest />
      }, {
        path: '/account',
        element: <Account />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
