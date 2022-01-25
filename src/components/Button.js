import tw from 'twin.macro';

const PrimaryButton = tw.button`bg-black text-white font-bold text-base px-6 py-3 hover:bg-opacity-75 transition duration-300 ease-linear mt-5`;

export const Button = ({ text, children, type, ...rest }) => (
  <PrimaryButton type={type || 'button'} {...rest}>
    {text ? text : children}
  </PrimaryButton>
);
