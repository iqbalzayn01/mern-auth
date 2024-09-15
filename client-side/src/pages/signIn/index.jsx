import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { motion } from 'framer-motion';

import { signIn } from '../../redux/auth/actions';

import Logo from '../../components/Logo';
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

  const open = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: -10,
      opacity: 1,
    },
  };

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
      navigate('/user-profile');
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
    <section className="2xl:container-base grid h-screen md:grid-cols-4 lg:grid-cols-3 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="hidden md:col-span-2 lg:col-span-2 md:flex flex-col-reverse bg-signin-img w-full h-full rounded-xl"
      >
        <div className="bg-[rgba(16,16,16,0.4)] backdrop-blur-xl px-10 py-10 rounded-xl">
          <motion.h2
            variants={open}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              duration: 2,
              y: { velocity: -100 },
            }}
            className="font-medium text-3xl text-white mb-2"
          >
            Escape the negativity and immerse yourself in a world of good vibes
            and inspiring stories.
          </motion.h2>
          <motion.p
            variants={open}
            initial="hidden"
            animate="visible"
            exit="hidden"
            transition={{
              delay: 1,
              duration: 2,
              y: { velocity: -100 },
            }}
            className="font-normal text-lg text-white"
          >
            Connect with like-minded people who lift you up and inspire you to
            be your best self.
          </motion.p>
        </div>
      </motion.div>
      <div className="md:col-span-2 lg:col-span-1 w-full flex flex-col place-content-center gap-5 px-8 py-5">
        <div className="flex items-center justify-center">
          <Logo />
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
