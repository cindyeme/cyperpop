import Loader from 'react-loader-spinner';
import tw from 'twin.macro';
const Div = tw.div`flex justify-center items-center h-screen `;
const DivFull = tw.div`flex justify-center items-center h-80 `;
const DivSmall = tw.div` sm:px-8 mt-8 sm:py-3 px-6 py-2`;
const DivIn = tw.div`flex justify-center items-center h-20 bg-gray-100`;
export const LoaderSpin = () => {
  return (
    <Div>
      <Loader type="Oval" color="#000" height={50} width={100} />
    </Div>
  );
};

export const InPageSpin = () => {
  return (
    <DivIn>
      <Loader type="Oval" color="#000" height={30} width={30} />
    </DivIn>
  );
};

export const SmallSpinner = () => {
  return (
    <DivSmall>
      <Loader type="Oval" color="#000" height={20} width={20} />
    </DivSmall>
  );
};
export const SmallSpinnerWhite = () => {
  return (
    <DivSmall>
      <Loader type="Oval" color="#fff" height={20} width={20} />
    </DivSmall>
  );
};

export const SmallSpinnerBlack = () => {
  return <Loader type="Oval" color="#000" height={19} width={19} />;
};

export const SmallSpinnerFull = () => {
  return (
    <DivFull>
      <Loader type="Oval" color="#fff" height={40} width={40} />
    </DivFull>
  );
};