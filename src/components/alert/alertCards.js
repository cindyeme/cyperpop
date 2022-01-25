import { ModalPic } from 'constants/styles/joint';
import React from 'react';
import success from 'assets/svg/success.svg';
import errorImg from 'assets/svg/error.svg';
import tw from 'twin.macro';

const Content = tw.div`grid grid-cols-1 py-6 w-80 shadow-md rounded gap-4 justify-items-center bg-white relative`;
const CloseModalButton = tw.button`absolute top-0 right-0 mt-2 mr-4 text-gray-400 hover:text-red-500 font-bold focus:text-red-500`;
const Button = tw.button` py-2 px-5 font-bold text-white bg-black hover:bg-gray-900 transition duration-300 transform focus:outline-none rounded-full`;
const Image = tw.img`h-32 w-32 my-8`;
const Head = tw.p`text-gray-900 text-2xl text-center`;
const Text = tw.p`text-gray-500 text-sm text-center`;
export const SuccessCard = ({ setOpen, open }) => {
  return (
      <Content>
        <CloseModalButton onClick={() => setOpen(false)}>X</CloseModalButton>
        <Image src={success} alt="successfull" />
        <Head>Success!</Head>
        <Text>Everthing went well.</Text>
        <Button onClick={() => setOpen(false)}>Continue</Button>
      </Content>
  );
};

export const ErrorCard = ({ setError, error }) => {
  return (
    <ModalPic visible={error}>
      <Content>
        <CloseModalButton onClick={() => setError(false)}>X</CloseModalButton>
        <Head>Error!</Head>
        <Image src={errorImg} alt="error" />
        <Text>
          Ooops! something went
          <br /> wrong
        </Text>
        <Button onClick={() => setError(false)}>Try Again</Button>
      </Content>
    </ModalPic>
  );
};
