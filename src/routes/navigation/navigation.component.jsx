import { Fragment, useContext, useEffect, useState } from 'react';
import { Routes, Route, Outlet, Link, useNavigate } from 'react-router-dom';
import ProfileDropDown from '../../components/profileDropDown/profileDropDown.component';
import { NavBar, SideBar } from '../../ui-components';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { GetCompanyByID } from '../../utils/utilsAmplify';
import { UserDetails } from '../../models';
import { DataStore } from 'aws-amplify';
import TextTruncate from 'react-text-truncate';

import './navigation.styles.scss';
import { useAuthenticator } from '@aws-amplify/ui-react';

const Navigation = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSideBarCollapsed, setIsSideBarCollapsed] = useState(false);
  const [company, setCompany] = useState(null);

  const { user } = useAuthenticator();

  useEffect(() => {
    const getCompany = async () => {
      const userDetails = await DataStore.query(UserDetails, (p) =>
        p.userID.eq(user.username)
      );
      const companyID = userDetails[0].companyID;
      const company = await GetCompanyByID(companyID);
      setCompany(company[0]);
    };
    getCompany();
  }, []);

  const navigate = useNavigate();
  const navOverrides = {
    Home: {
      onClick: () => {
        navigate('/');
      },
      style: {
        cursor: 'pointer',
      },
    },
    Parts: {
      onClick: () => {
        navigate('/Parts');
      },
      style: {
        cursor: 'pointer',
      },
    },
    Inventory: {
      onClick: () => {
        navigate('/Inventory');
      },
      style: {
        cursor: 'pointer',
      },
    },
    RFQs: {
      onClick: () => {
        navigate('/rfq');
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

  const sideBarOverrides = {
    SubHeading1: {
      children: isSideBarCollapsed ? 'Parts' + '' : 'Parts Search',
      // width: isSideBarCollapsed ? 40 : 89,
      // style: {
      //   transition: 'width 0.2s ease-in',
      // },
    },
    SubHeading2: {
      children: isSideBarCollapsed ? 'Co.' : 'Your Company',
      // width: isSideBarCollapsed ? 1 : 120,
      // style: {
      //   transition: 'width 0.2s ease-in',
      // },
    },
    SubHeading3: {
      children: isSideBarCollapsed ? 'Pref.' : 'Preferences',
      // width: isSideBarCollapsed ? 1 : 89,
      // style: {
      //   transition: 'width 0.2s ease-in',
      // },
    },
    SpartanLogo: {},
    // 'Frame 32129767088': {
    //   height: '91%',
    // },
    'Frame 434': {
      onClick: () => {
        navigate('/');
      },
      style: {
        cursor: 'pointer',
      },
    },
    'Spartan Marketplace': {
      isDisabled: isSideBarCollapsed,
      children: isSideBarCollapsed ? '' : 'Spartan\nMarketplace',
      style: {
        transition: 'opacity 0.6s ease-in, transform 0.5s ease-in-out',
        transform: isSideBarCollapsed ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isSideBarCollapsed ? 0 : 1,
      },
    },
    PartsFrame: {
      onClick: () => {
        navigate('/parts', { state: { partTypeSelected: 'part' } });
      },
      style: {
        cursor: 'pointer',
      },
    },
    MROFrame: {
      onClick: () => {
        navigate('/parts', { state: { partTypeSelected: 'mro' } });
      },
      style: {
        cursor: 'pointer',
      },
    },
    InventoryFrame: {
      onClick: () => {
        navigate('/inventory');
      },
      style: {
        cursor: 'pointer',
      },
    },
    RFQFrame: {
      onClick: () => {
        navigate('/rfq');
      },
      style: {
        cursor: 'pointer',
      },
    },
    SettingsFrame: {
      onClick: () => {
        navigate('/settings');
      },
      style: {
        cursor: 'pointer',
      },
    },
    Settings37473431: {
      isDisabled: isSideBarCollapsed,
      children: isSideBarCollapsed ? '' : 'Settings',
      style: {
        transition: 'opacity 0.6s ease-in, transform 0.5s ease-in-out',
        transform: isSideBarCollapsed ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isSideBarCollapsed ? 0 : 1,
      },
    },
    Parts: {
      isDisabled: isSideBarCollapsed,
      children: isSideBarCollapsed ? '' : 'Parts',
      style: {
        transition: 'opacity 0.6s ease-in, transform 0.5s ease-in-out',
        transform: isSideBarCollapsed ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isSideBarCollapsed ? 0 : 1,
      },
    },
    MRO: {
      isDisabled: isSideBarCollapsed,
      children: isSideBarCollapsed ? '' : 'MRO',
      style: {
        transition: 'opacity 0.6s ease-in, transform 0.5s ease-in-out',
        transform: isSideBarCollapsed ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isSideBarCollapsed ? 0 : 1,
      },
    },
    Inventory: {
      isDisabled: isSideBarCollapsed,
      children: isSideBarCollapsed ? '' : 'Inventory',
      style: {
        transition: 'opacity 0.6s ease-in, transform 0.5s ease-in-out',
        transform: isSideBarCollapsed ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isSideBarCollapsed ? 0 : 1,
      },
    },
    RFQs: {
      isDisabled: isSideBarCollapsed,
      children: isSideBarCollapsed ? '' : 'RFQs',
      style: {
        transition: 'opacity 0.6s ease-in, transform 0.5s ease-in-out',
        transform: isSideBarCollapsed ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isSideBarCollapsed ? 0 : 1,
      },
    },
    Name: {
      isDisabled: isSideBarCollapsed,
      children: isSideBarCollapsed ? '' : company ? company.companyName : '',
      style: {
        transition: 'opacity 0.6s ease-in, transform 0.5s ease-in-out',
        transform: isSideBarCollapsed ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isSideBarCollapsed ? 0 : 1,
      },
    },
    Description: {
      isDisabled: isSideBarCollapsed,
      children: isSideBarCollapsed
        ? ''
        : // : company
          // ? company.companyDescription
          '',
      style: {
        transition: 'opacity 0.6s ease-in, transform 0.5s ease-in-out',
        transform: isSideBarCollapsed ? 'translateY(-100%)' : 'translateY(0)',
        opacity: isSideBarCollapsed ? 0 : 1,
      },
    },
    Settings: {
      isDisabled: isSideBarCollapsed,
      width: isSideBarCollapsed ? 0 : 19.45,
      height: isSideBarCollapsed ? 0 : 20,
    },
    Divider1: {
      width: isSideBarCollapsed ? 35 : 192,
      padding: 10,
      style: {
        transition: 'width 0.2s ease-in-out',
      },
    },
    Divider2: {
      width: isSideBarCollapsed ? 35 : 192,
      padding: 10,
      style: {
        transition: 'width 0.2s ease-in-out',
      },
    },
  };
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      {/* <NavBar width={'100vw'} minWidth={'1100px'} overrides={navOverrides} />
      {isProfileOpen && <ProfileDropDown />} */}
      <div
        style={{
          position: 'relative',
          paddingRight: isSideBarCollapsed ? 84 : 245,
          transition: 'padding 0.2s ease-in-out',
        }}
      ></div>
      <div
        style={{
          // width: isSideBarCollapsed ? 84 : 245,
          transition: 'width 0.2s ease-in-out',
          border: '1 solid black',
          zIndex: 11,
        }}
        // className='sub-heading'
      >
        <SideBar
          height='100%'
          position='fixed'
          // overrides={sideBarOverrides}
          overrides={sideBarOverrides}
          width={isSideBarCollapsed ? 84 : 245}
          className='sub-heading'
          left={0}
          style={{ transition: 'width 0.2s ease-in-out' }}
          arrowSlot={
            <div
              style={{
                display: 'flex',
                width: isSideBarCollapsed ? 20 : 25,
              }}
            >
              {isSideBarCollapsed ? (
                <NavigateNextIcon
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => setIsSideBarCollapsed(!isSideBarCollapsed)}
                />
              ) : (
                <NavigateBeforeIcon
                  style={{
                    cursor: 'pointer',
                  }}
                  onClick={() => setIsSideBarCollapsed(!isSideBarCollapsed)}
                />
              )}
            </div>
          }
        />
      </div>
      <div
        style={{
          display: 'flex',
          paddingTop: 10,
          paddingLeft: 10,
          width: '100%',
          justifyContent: 'center',
          minWidth: 1500,
          zIndex: 10,
        }}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
