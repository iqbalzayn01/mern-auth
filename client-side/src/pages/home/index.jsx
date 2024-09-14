import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { PiClock, PiCalendarDots } from 'react-icons/pi';
import { useNavigate } from 'react-router-dom';

import moment from 'moment';
import 'moment-timezone';

import { clearToken } from '../../redux/auth/actions';
import { userLogged } from '../../redux/auth/actions';
import { fetchAllUsers } from '../../redux/users/actions';
import PopUp from '../../components/PopUp';
import CButton from '../../components/CButton';

const Home = () => {
  const { token, user } = useSelector((state) => state.auth);
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
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

  const handleLogout = () => {
    dispatch(clearToken());
    setIsPopUpOpen(false);
    navigate('/signin');
  };

  return (
    <div className="flex w-full h-screen">
      <main className="flex-1 px-5 py-5">
        <div className="flex items-start justify-between">
          <div>
            <h1 className="font-bold text-3xl mb-1">Dashboard</h1>
            <p className="text-lg mb-3">Welcome to the admin dashboard!</p>
            {token && (
              <>
                <h1 className="font-medium text-2xl">{`Hello, ${
                  user?.name || ''
                }`}</h1>
              </>
            )}
          </div>
          <div className="flex flex-col items-end gap-0">
            <div className="flex items-center gap-1">
              <PiCalendarDots />
              <span>{formattedDate}</span>
            </div>
            <div className="flex items-center gap-1">
              <PiClock />
              <span>{formattedTime}</span>
            </div>
            <CButton
              type="button"
              onClick={handlePopUpLogout}
              className="text-black"
            >
              Log out
            </CButton>
          </div>
        </div>
      </main>
      {isPopUpOpen && (
        <PopUp
          handle={handleLogout}
          onClose={() => setIsPopUpOpen(false)}
          textPopUp="Apakah anda yakin ingin keluar?"
          classNameBtn="bg-red-500"
          textBtn="Log out"
        />
      )}
    </div>
  );
};

export default Home;
