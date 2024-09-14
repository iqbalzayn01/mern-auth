import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import RequireAuth from './requireAuth';

// ADMIN
import Home from '../pages/home';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/*" element={<SignIn />} />
      <Route path="/signup/*" element={<SignUp />} />
      <Route element={<RequireAuth />}>
        <Route path="/home/*" element={<Home />} />
      </Route>
    </>
  )
);

export default router;
