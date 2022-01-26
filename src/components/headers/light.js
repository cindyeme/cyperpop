import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { NavLink, useHistory } from 'react-router-dom';

// import { useMoralis } from 'react-moralis';
import useAnimatedNavToggler from '../../layout/useAnimatedNavToggler.js';
// import PricingPage from 'pages/Pricing.js';
import MetamaskProvider from '../../store/provider/status';
import logo from '../../assets/images/logo.png';
import { ReactComponent as MenuIcon } from 'feather-icons/dist/icons/menu.svg';
import { ReactComponent as CloseIcon } from 'feather-icons/dist/icons/x.svg';
import { currentAccount } from '../../store/components/users/auth';
// import {Button} from '../Button'

const Header = tw.header`
  flex justify-between items-center
    bg-white sm:py-4 sm:px-8 py-3 px-2 w-full font-display
`;

export const NavLinks = tw.div`inline-block`;
const BtnLink = tw(Link)`md:mr-4`;
const Button = tw.button`bg-black text-white font-bold text-base px-6 py-2 
hover:bg-opacity-75 transition duration-300 ease-linear rounded-full`;

/* focus: stands for "on hover or focus"
 * focus:bg-blue-600 will apply the bg-blue-600 class on hover or focus
 */
export const NavLinkk = tw(NavLink)`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-blue-500 focus:text-blue-500
`;
export const Profile = tw.button`
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-blue-500 focus:text-blue-500
`;

export const PrimaryLink = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-teal-400 text-gray-100 cursor-pointer
  focus:bg-teal-400 focus:text-white focus:outline-none
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};

  img {
    ${tw`w-full mr-3`}
  }
`;

export const MobileNavLinksContainer = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none focus:text-blue-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks = tw.nav`
  hidden lg:flex flex-1 justify-between items-center pb-3
`;
const Image = tw.img`w-full object-contain`;

const HeaderLite = ({ account, roundedHeaderButton = false, logoLink, className, collapseBreakpointClass = 'lg' }) => {
  // const [wallet, setWallet] = useState('');
  // let [address, setAddress] = useState('');
  // const connectWallet = async () => {
  //   if (window.ethereum) {
  //     //check if Metamask is installed
  //     try {
  //       const address = await window.ethereum.enable(); //connect Metamask
  //       const obj = {
  //         connectedStatus: true,
  //         status: '',
  //         address: address,
  //       };
  //       setWallet(obj);

  //       return obj;
  //     } catch (error) {
  //       return {
  //         connectedStatus: false,
  //         status: '🦊 Connect to Metamask using the button on the top right.',
  //       };
  //     }
  //   } else {
  //     return {
  //       connectedStatus: false,
  //       status: '🦊 You must install Metamask into your browser: https://metamask.io/download.html',
  //     };
  //   }
  // };

  // const defaultLinks = [
  //   <NavLinks key={1}>
  //     <NavLinkk to="/create">Create</NavLinkk>
  //     <NavLinkk to="/campaign">Campaign</NavLinkk>
  //     <NavLinkk to={`/profile/${getLibrary().currentProvider.selectedAddress}`}>Profile</NavLinkk>
  //     <MetamaskProvider roundedHeaderButton={roundedHeaderButton} />
  //   </NavLinks>,
  // ];

  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss = collapseBreakPointCssMap[collapseBreakpointClass];

  const defaultLogoLink = (
    <LogoLink to="/">
      <Image src={logo} alt="logo" />
    </LogoLink>
  );
  // let history = useHistory();
  logoLink = logoLink || defaultLogoLink;
  // links = links || defaultLinks;
  // const push = () => history.replace({ pathname: `/profile/${account}` });
  return (
    <Header className={className || 'header-light'}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        <NavLinks>
          <NavLinkk to="/marketplace">Marketplace</NavLinkk>
          <NavLinkk to="/campaign">Campaign</NavLinkk>
          <NavLinkk to={`/new-profile`}>Profile</NavLinkk>
          {/* <Profile onClick={push}>Profile</Profile> */}
          <BtnLink to="/create">
            <Button type="button">Create</Button>
          </BtnLink>
          <MetamaskProvider account={account} roundedHeaderButton={roundedHeaderButton} />
        </NavLinks>
      </DesktopNavLinks>

      <MobileNavLinksContainer css={collapseBreakpointCss.mobileNavLinksContainer}>
        {logoLink}
        <MobileNavLinks
          initial={{ x: '150%', display: 'none' }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          <NavLinks>
            <NavLinkk to="/marketplace">Marketplace</NavLinkk>
            {/* <NavLinkk to="/campaign">Campaign</NavLinkk> */}
            <NavLinkk to={`/new-profile`}>Profile</NavLinkk>
            {/* <Profile onClick={push}>Profile</Profile> */}
            <MetamaskProvider account={account} roundedHeaderButton={roundedHeaderButton} />
          </NavLinks>
        </MobileNavLinks>
        <NavToggle onClick={toggleNavbar} className={showNavLinks ? 'open' : 'closed'}>
          {showNavLinks ? <CloseIcon tw="w-6 h-6" /> : <MenuIcon tw="w-6 h-6" />}
        </NavToggle>
      </MobileNavLinksContainer>
    </Header>
  );
};

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};

// mapping the cuurent state as a component prop
const mapStateToProps = createStructuredSelector({
  account: currentAccount,
});

export default connect(mapStateToProps)(HeaderLite);
