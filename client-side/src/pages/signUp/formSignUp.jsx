import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import CButton from '../../components/CButton';
import CInputLabel from '../../components/CInputLabel';

export default function FormSignUp({
  isLoading,
  handleSubmit,
  valueName,
  valueEmail,
  valueNoTelp,
  valuePassword,
  valueConfirmPassword,
  onChange,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col items-center justify-center gap-2"
    >
      <CInputLabel
        htmlFor="name"
        label="Name"
        name="name"
        type="text"
        value={valueName}
        className="w-full text-input mt-3"
        classNameLabel="font-medium text-secondarycolor"
        placeholder="Name"
        onChange={onChange}
      />
      <div className="flex flex-col md:flex-row w-full items-center justify-between gap-2">
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
          htmlFor="no-telp"
          label="Phone Number"
          name="no_telp"
          type="text"
          value={valueNoTelp}
          className="w-full text-input mt-3"
          classNameLabel="font-medium text-secondarycolor"
          placeholder="Phone Number"
          onChange={onChange}
        />
      </div>
      <CInputLabel
        htmlFor="password"
        label="Password"
        name="password"
        type="password"
        value={valuePassword}
        className="w-full text-input mt-3"
        classNameLabel="font-medium text-secondarycolor"
        placeholder="Password"
        onChange={onChange}
      />
      <CInputLabel
        htmlFor="confirmPassword"
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={valueConfirmPassword}
        className="w-full text-input mt-3 mb-2"
        classNameLabel="font-medium text-secondarycolor"
        placeholder="Confirm Password"
        onChange={onChange}
      />
      <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.8 }}>
        <CButton
          type="submit"
          className="bg-zinc-800 hover:bg-black px-5 py-2 text-center text-white mb-2 rounded-lg"
          loading={isLoading}
          disabled={isLoading}
        >
          Create account
        </CButton>
      </motion.div>
      <p className="text-secondarycolor">
        Already have an account?
        <Link to="/signin" className="font-bold underline">
          Sign In
        </Link>
      </p>
    </form>
  );
}

FormSignUp.propTypes = {
  isLoading: PropTypes.bool,
  handleSubmit: PropTypes.func,
  valueName: PropTypes.string,
  valueEmail: PropTypes.string,
  valueNoTelp: PropTypes.string,
  valuePassword: PropTypes.string,
  valueConfirmPassword: PropTypes.string,
  onChange: PropTypes.func,
};
