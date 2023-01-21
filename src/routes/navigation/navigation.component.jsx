import { Fragment, useContext, useState } from 'react';
import { Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom';
import ProfileDropDown from '../../components/profileDropDown/profileDropDown.component';
import { NavBar } from '../../ui-components';

const Navigation = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navigate = useNavigate();
  const navOverrides = {
    Dashboard: {
      onClick: () => {
        navigate('/');
      },
      style: {
        cursor: 'pointer',
      },
    },
    Jobs: {
      onClick: () => {
        navigate('/Parts');
      },
      style: {
        cursor: 'pointer',
      },
    },
    Applicants: {
      onClick: () => {
        navigate('/Inventory');
      },
      style: {
        cursor: 'pointer',
      },
    },
    Company: {
      onClick: () => {
        navigate('/Parts');
      },
      style: {
        cursor: 'pointer',
      },
    },
    image: {
      onClick: () => {
        setIsProfileOpen(!isProfileOpen);
      },
      style: {
        cursor: 'pointer',
      },
    },
  };
  return (
    <Fragment>
      <NavBar width={'100vw'} minWidth={'1100px'} overrides={navOverrides} />
      {isProfileOpen && <ProfileDropDown />}
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
