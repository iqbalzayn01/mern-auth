import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PiClock, PiCalendarDots } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import moment from 'moment';
import 'moment-timezone';

import { userLogged, clearToken } from '../../redux/auth/actions';
import { fetchAllUsers, fetchDeleteUser } from '../../redux/users/actions';
import PopUp from '../../components/PopUp';
import CButton from '../../components/CButton';

const UserProfile = () => {
  const { token, user } = useSelector((state) => state.auth);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popUpDelete, setPopUpDelete] = useState(false);
  const [currentTime, setCurrentTime] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const userTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    setCurrentTime(moment().tz(userTimeZone));

    const intervalId = setInterval(() => {
      setCurrentTime(moment().tz(userTimeZone));
    }, 1000);

    if (token) {
      dispatch(userLogged());
      dispatch(fetchAllUsers());
    }

    return () => clearInterval(intervalId);
  }, [token, dispatch]);

  const formattedDate = currentTime
    ? currentTime.format('dddd, DD MMMM YYYY')
    : '';

  const formattedTime = currentTime ? currentTime.format('h:mm:ss A') : '';

  const handlePopUpLogout = () => {
    setIsPopUpOpen(true);
  };

  const handlePopUpDeleteAccount = () => {
    setPopUpDelete(true);
  };

  const handleDeleteAccount = (id) => {
    dispatch(fetchDeleteUser(id));
    dispatch(clearToken());
    setPopUpDelete(false);
    navigate('/signin');
  };

  const handleLogout = () => {
    dispatch(clearToken());
    setIsPopUpOpen(false);
    navigate('/signin');
  };

  return (
    <div className="container mx-auto flex items-center justify-center max-w-[900px] h-screen">
      <main className="flex-1 px-5 py-5">
        <div className="grid md:grid-cols-2 gap-5 md:gap-0 items-start justify-between mb-5">
          <div>
            <h1 className="font-semibold text-5xl mb-1">Hello!</h1>
            <p className="max-w-[400px] text-lg mb-5">
              Share your thoughts, feelings, and experiences with the world.
            </p>
            {token && (
              <>
                <div className="flex items-start gap-2">
                  <img
                    src={user?.avatar}
                    alt="User Profile"
                    className="object-cover rounded-full"
                  />
                  <div className="mb-5">
                    <h1 className="font-medium text-2xl">{user?.name || ''}</h1>
                    <p className="text-base">Role</p>
                  </div>
                </div>
                <p className="w-full text-base">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Illum similique aliquam quibusdam! Odit repellat fugit
                  sapiente expedita veritatis, itaque blanditiis illo voluptate
                  doloribus quia dignissimos fuga debitis quidem maiores
                  architecto.
                </p>
              </>
            )}
          </div>
          <div className="order-first md:order-last flex flex-col md:items-end justify-between md:justify-normal gap-1">
            <div className="flex items-center gap-1">
              <PiCalendarDots size={18} />
              <div className="flex flex-col items-start">
                <span>{formattedDate}</span>
              </div>
            </div>
            <div className="flex items-center gap-1">
              <PiClock size={18} />
              <span>{formattedTime}</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <CButton
            type="button"
            onClick={handlePopUpLogout}
            className="w-full md:w-auto bg-zinc-800 hover:bg-black text-white px-5 py-3 rounded-xl"
          >
            Log out
          </CButton>
          <CButton
            type="button"
            onClick={handlePopUpDeleteAccount}
            className="w-full md:w-auto bg-rose-400 hover:bg-rose-500 text-white px-5 py-3 rounded-xl"
          >
            Delete account
          </CButton>
        </div>
      </main>
      <AnimatePresence>
        {isPopUpOpen && (
          <PopUp
            handle={handleLogout}
            onClose={() => setIsPopUpOpen(false)}
            textPopUp="Are you sure want to logout?"
            classNameBtn="bg-rose-400 hover:bg-rose-500"
            textBtn="Log out"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {popUpDelete && (
          <PopUp
            handle={() => handleDeleteAccount(user._id)}
            onClose={() => setPopUpDelete(false)}
            textPopUp="Are you sure want to delete account?"
            classNameBtn="bg-rose-400 hover:bg-rose-500"
            textBtn="Delete account"
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserProfile;
