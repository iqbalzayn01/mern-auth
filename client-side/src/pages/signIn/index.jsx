import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

import { signIn } from '../../redux/auth/actions';

import FormSignIn from './formSignIn';

export default function SignIn() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(showLoading());
    setIsLoading(true);
    try {
      await dispatch(signIn(formData));
      setIsLoading(false);
      dispatch(hideLoading());
      navigate('/home');
    } catch (error) {
      console.error('Error login:', error);
      setError('email atau password salah!');
      setIsLoading(false);
      navigate('/signin');
      dispatch(hideLoading());
    }
  };

  if (token) return <Navigate to="/home" replace />;

  return (
    <section className="2xl:container-base grid h-screen grid-cols-3 p-2">
      <div className="col-span-2 bg-signin-img w-full h-full rounded-xl"></div>
      <div className="col-span-1 w-full flex flex-col place-content-center gap-5 px-8 py-5">
        <div className="self-center flex items-center text-3xl font-medium">
          <svg
            width="126"
            height="126"
            viewBox="0 0 126 126"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-1/4"
          >
            <path
              d="M53.0453 32.2892L53.927 34.0843L53.0453 32.2892ZM20.4142 25.5858C19.6332 24.8047 18.3668 24.8047 17.5858 25.5858L4.85786 38.3137C4.07681 39.0948 4.07681 40.3611 4.85786 41.1421C5.63891 41.9232 6.90524 41.9232 7.68629 41.1421L19 29.8284L30.3137 41.1421C31.0948 41.9232 32.3611 41.9232 33.1421 41.1421C33.9232 40.3611 33.9232 39.0948 33.1421 38.3137L20.4142 25.5858ZM105.516 65.9761C86.029 87.5413 61.1345 84.9731 47.1705 74.2906C40.1559 68.9245 36.1168 61.6981 36.5315 54.6156C36.9407 47.6289 41.7364 40.0722 53.927 34.0843L52.1635 30.494C39.171 36.8758 33.0595 45.482 32.5383 54.3818C32.0228 63.1858 37.0302 71.5695 44.7401 77.4676C60.225 89.3135 87.491 91.8895 108.484 68.658L105.516 65.9761ZM53.927 34.0843C63.8137 29.2281 70.1227 28.5311 73.8473 29.8639C77.2862 31.0945 79.1762 34.3552 79.434 39.6425C79.6918 44.9319 78.2404 51.7235 75.5153 58.8525C72.8018 65.9507 68.8847 73.2286 64.3649 79.4553C59.8279 85.7056 54.777 90.768 49.8465 93.5838C44.9472 96.3817 40.4622 96.8273 36.5815 94.5061C32.5401 92.0887 28.5872 86.3629 25.6726 75.4065C22.7759 64.5176 21 48.8161 21 27L17 27C17 48.9851 18.7847 65.0735 21.8071 76.4348C24.8115 87.7287 29.1361 94.7135 34.5282 97.9388C40.0811 101.26 46.1858 100.281 51.8301 97.0573C57.4432 93.8517 62.8898 88.2966 67.602 81.805C72.3312 75.2899 76.4149 67.7014 79.2516 60.2807C82.0765 52.8908 83.7247 45.5107 83.4292 39.4477C83.1336 33.3825 80.8174 28.1098 75.195 26.0978C69.8582 24.1881 62.2507 25.5394 52.1635 30.494L53.927 34.0843Z"
              fill="black"
            />
          </svg>
          <span className="font-semibold text-3xl">Untitled</span>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold text-2xl text-center">Sign In</h3>
          <p className="text-center">Log in to see what you&apos;ve missed.</p>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        <FormSignIn
          valueEmail={formData.email}
          valuePassword={formData.password}
          handleSubmit={handleSubmit}
          onChange={handleChange}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
}
