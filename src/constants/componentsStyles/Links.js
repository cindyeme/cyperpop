import { Link } from 'react-router-dom';
import tw from 'twin.macro';

export const PrimaryLink = tw(
  Link
)`cursor-pointer focus:outline-none font-bold text-blue-500 border-b-2 border-transparent focus:border-blue-500 focus:text-blue-800 transition duration-300`;
