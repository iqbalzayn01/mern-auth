import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { motion } from 'framer-motion';

import { signUp } from '../../redux/users/actions';

import Logo from '../../components/Logo';
import FormSignUp from './formSignUp';

export default function SignUp() {
  const getToken = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    no_telp: '',
    password: '',
    confirmPassword: '',
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
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(showLoading());
    setIsLoading(true);

    if (formData.password !== formData.confirmPassword) {
      setPasswordMatchError(true);
      return;
    }

    try {
      await dispatch(signUp(formData));
      setIsLoading(false);
      dispatch(hideLoading());
      navigate('/signin');
    } catch (error) {
      console.error('Sign Up Error:', error);
      setError('Sign up error');
      setIsLoading(false);
      dispatch(hideLoading());
    }
  };

  if (getToken) return <Navigate to="/dashboard-peserta" replace />;

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
        className="hidden md:col-span-2 lg:col-span-2 md:flex flex-col-reverse bg-signup-img w-full h-full rounded-xl"
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
            Express yourself freely, connect with your passions, and unlock your
            full potential on Vibely.
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
            A safe space to share your journey, embrace your authentic self, and
            grow alongside a supportive community.
          </motion.p>
        </div>
      </motion.div>
      <div className="md:col-span-2 lg:col-span-1 w-full flex flex-col place-content-center gap-5 px-8 py-5">
        <div className="flex items-center justify-center">
          <Logo />
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="font-bold text-2xl text-center">Sign Up</h3>
          <p className="text-center">
            Create an account to connect with friends and share your world.
          </p>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>}
        {passwordMatchError && (
          <p className="bg-red-400 text-center text-white px-5 py-2 rounded-lg">
            Password tidak cocok. Silakan coba lagi.
          </p>
        )}
        <FormSignUp
          valueName={formData.name}
          valueEmail={formData.email}
          valueNoTelp={formData.no_telp}
          valuePassword={formData.password}
          valueConfirmPassword={formData.confirmPassword}
          handleSubmit={handleSubmit}
          onChange={handleChange}
          isLoading={isLoading}
        />
      </div>
    </section>
  );
}
