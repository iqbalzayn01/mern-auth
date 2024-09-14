import { useSelector } from 'react-redux';

export default function Loading() {
  const isLoading = useSelector((state) => state.loadingBar.default > 0);

  return (
    <>
      {isLoading && (
        <>
          <div className="loading absolute inset-0 flex w-full h-screen items-center justify-center bg-neutral-300 text-2xl text-black text-center">
            <span> Loading . . .</span>
          </div>
        </>
      )}
    </>
  );
}
