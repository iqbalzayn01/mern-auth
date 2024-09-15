import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';

export default function Loading() {
  const isLoading = useSelector((state) => state.loadingBar.default > 0);

  return (
    <>
      {isLoading && (
        <>
          <div className="loading absolute inset-0 flex w-full h-screen items-center justify-center bg-[rgba(16,16,16,0.4)] backdrop-blur-xl z-50">
            <motion.span
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ['0%', '0%', '50%', '50%', '0%'],
              }}
              transition={{
                duration: 1,
                ease: 'easeInOut',
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 0,
              }}
              className="bg-white w-[100px] h-[100px]"
            ></motion.span>
          </div>
        </>
      )}
    </>
  );
}
