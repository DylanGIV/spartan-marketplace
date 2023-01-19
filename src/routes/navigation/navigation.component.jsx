import { Fragment, useContext } from 'react';
import { Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom';
import { NavBar } from '../../ui-components';

const Navigation = () => {
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
  };
  return (
    <Fragment>
      <NavBar width={'100vw'} minWidth={'1000px'} overrides={navOverrides} />
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
