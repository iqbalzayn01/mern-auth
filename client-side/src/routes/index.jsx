import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import SignIn from '../pages/signIn';
import SignUp from '../pages/signUp';
import RequireAuth from './requireAuth';
import UserProfile from '../pages/userProfile';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/*" element={<SignIn />} />
      <Route path="/signup/*" element={<SignUp />} />
      <Route element={<RequireAuth />}>
        <Route path="/user-profile/*" element={<UserProfile />} />
      </Route>
    </>
  )
);

export default router;
