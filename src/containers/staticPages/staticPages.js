import { PrimaryButton } from 'constants/componentsStyles/Buttons';
import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import empty from 'assets/images/empty.png';
import no from 'assets/images/no.png';
import search from 'assets/images/search.png';
import error from 'assets/images/error.png';
import NoError from 'assets/images/unauthorized.png';
import history from 'utils/history';

const Main = tw.div`bg-white  grid grid-cols-1 justify-items-center items-center gap-4 mb-6 py-20`;
const Content = tw.div`  grid grid-cols-1 justify-items-center items-center  `;
const MainFull = tw.div`bg-white h-screen grid grid-cols-1 justify-items-center items-center content-center gap-4 `;
const H1 = tw.p`font-display font-bold sm:text-base text-sm text-center text-gray-600 italic`;
const H2 = tw.p`font-display font-bold sm:text-base text-sm text-center text-gray-700 italic mt-8`;
const H3 = tw.p`font-display font-bold sm:text-base text-xs text-center text-gray-600 italic`;
const H4 = tw.p`font-display font-bold sm:text-sm text-xs text-center text-gray-600 hover:text-gray-900 italic`;
const Image = tw.img`sm:h-32 sm:w-32 h-20 w-20 `;
const ErrorImage = tw.img`h-80 w-80`;

export const NoArt = () => {
  return (
    <Main>
      <Content>
        <Image src={empty} alt="No collection" />
        <H1>Collection is empty!!</H1>
      </Content>

      <Link to="/">
        <PrimaryButton>Go Home</PrimaryButton>
      </Link>
    </Main>
  );
};

export const NoConnection = () => {
  return (
    <Main>
      <Content>
        <Image src={no} alt="No internet connection" />
        <H1>No internet connection!!</H1>
      </Content>

      <Link to="/">
        <PrimaryButton>Refresh</PrimaryButton>
      </Link>
    </Main>
  );
};

export const NotFound = () => {
  return (
    <Main>
      <Content>
        <Image src={search} alt="Not found" />
        <H1>Not found!!</H1>
      </Content>
    </Main>
  );
};

export const AccountNotFound = () => {
  const handleBack = () => history.goBack();
  return (
    <MainFull>
      <Content>
        <Image src={search} alt="Not found" />
        <H2>Sorry please connect to wallet!!</H2>
        <H3>Connect and refresh page.</H3>
      </Content>
      <PrimaryButton onClick={handleBack}>Go Back</PrimaryButton>
      <Link to="/">
        <H4>Home</H4>
      </Link>
    </MainFull>
  );
};
export const Unauthorized = () => {
  const handleBack = () => history.goBack();
  return (
    <MainFull>
      <Content>
        <Image src={NoError} alt="Not found" />
        <H2>Unauthorized access!!</H2>
      </Content>
      <PrimaryButton onClick={handleBack}>Go Back</PrimaryButton>
      <Link to="/">
        <H4>Home</H4>
      </Link>
    </MainFull>
  );
};

export const CreatorAccountNotFound = () => {
  const handleBack = () => history.goBack();
  return (
    <MainFull>
      <Content>
        <Image src={search} alt="Not found" />
        <H2>Creator account not found!!</H2>
      </Content>
      <PrimaryButton onClick={handleBack}>Go Back</PrimaryButton>
      <Link to="/">
        <H4>Home</H4>
      </Link>
    </MainFull>
  );
};

export const ErrorPage = () => {
  return (
    <MainFull>
      <Content>
        <ErrorImage src={error} alt="Page not found" />
        <H1>Page not found!!</H1>
      </Content>

      <Link to="/">
        <PrimaryButton>Go Home</PrimaryButton>
      </Link>
    </MainFull>
  );
};
