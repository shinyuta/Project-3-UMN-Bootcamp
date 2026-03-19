import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App.jsx';
import NoMatch from './pages/NoMatch';
import Account from './pages/Account.jsx';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TypingTest from './pages/TypingTest.jsx';
import Contact from './pages/Contact.jsx';

// When deployed to GitHub Pages, the app is served from a sub-path like:
// /<user>/<repo>/.
// createBrowserRouter needs a basename so "/" inside the router matches "/<repo>/"
function getGitHubPagesBasename() {
  if (typeof window === "undefined") return "";
  const parts = window.location.pathname.split("/").filter(Boolean);
  // On GitHub Pages root: ["Project-3-UMN-Bootcamp", ...optional route parts]
  if (parts.length === 0) return "";
  return `/${parts[0]}`;
}

const basename = getGitHubPagesBasename();

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
      }, {
        path: '/contact',
        element: <Contact />
      }
    ],
  },
], { basename });

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
