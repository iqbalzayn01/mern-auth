import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

export default function PopUp({
  handle,
  onClose,
  textPopUp,
  classNameBtn,
  textBtn,
}) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[rgba(16,16,16,0.4)] backdrop-blur-sm">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
        transition={{
          duration: 0.8,
          delay: 0.1,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="bg-black p-8 rounded-xl shadow-md w-1/3"
      >
        <h2 className="text-xl text-white text-center mb-5">{textPopUp}</h2>
        <div className="grid grid-cols-2 gap-5">
          <button
            type="button"
            onClick={onClose}
            className="bg-transparent text-white border border-white px-4 py-2 rounded-lg"
          >
            Cencel
          </button>
          <button
            type="button"
            onClick={handle}
            className={`text-white px-4 py-2 rounded-lg ${classNameBtn}`}
          >
            {textBtn}
          </button>
        </div>
      </motion.div>
    </div>
  );
}

PopUp.propTypes = {
  handle: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
  textPopUp: PropTypes.string,
  classNameBtn: PropTypes.string,
  textBtn: PropTypes.string,
};
