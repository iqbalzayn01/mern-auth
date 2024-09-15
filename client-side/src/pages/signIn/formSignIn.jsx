import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import CButton from '../../components/CButton';
import CInputLabel from '../../components/CInputLabel';

export default function FormSignIn({
  isLoading,
  handleSubmit,
  valueEmail,
  valuePassword,
  onChange,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-2"
    >
      <CInputLabel
        htmlFor="email-address"
        label="Email"
        name="email"
        type="email"
        value={valueEmail}
        className="w-full text-input mt-3"
        classNameLabel="font-medium text-secondarycolor"
        placeholder="Email"
        onChange={onChange}
      />
      <CInputLabel
        htmlFor="password"
        label="Password"
        name="password"
        type="password"
        value={valuePassword}
        className="w-full text-input mt-3 mb-2"
        classNameLabel="font-medium text-secondarycolor"
        placeholder="Password"
        onChange={onChange}
      />
      <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.8 }}>
        <CButton
          type="submit"
          className="bg-zinc-800 hover:bg-black px-5 py-2 text-center text-white mb-2 rounded-lg"
          loading={isLoading}
          disabled={isLoading}
        >
          Sign In
        </CButton>
      </motion.div>
      <p className="font-medium text-secondarycolor">
        Don&apos;t have an account?
        <Link to="/signup" className="font-bold underline">
          Sign Up
        </Link>
      </p>
    </form>
  );
}

FormSignIn.propTypes = {
  isLoading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  valueEmail: PropTypes.string,
  valuePassword: PropTypes.string,
  onChange: PropTypes.func,
};
