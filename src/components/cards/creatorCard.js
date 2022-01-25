import tw from 'twin.macro';
import { Link } from 'react-router-dom';
import truncate from 'truncate'

const Container = tw.div`relative bg-white p-5 shadow-lg hover:shadow-none transition duration-300 ease-linear border`;
const ImgBox = tw.div``;
const BgImage = tw.img`object-cover w-full h-[150px]`;
const ContentLink = tw(Link)`flex flex-col justify-center items-center  bg-gray-700 p-5 mt-4`;
const Avatar = tw.img`object-cover h-24 w-24 rounded-full border-2 border-gray-400 -mt-20`;
export const H3 = tw.h3`text-lg text-center text-white font-semibold py-5`;

export default function CreatorCard({ bg, link, avatar, creator }) {
  return (
    <Container>
      <ImgBox>
        <BgImage src={bg} alt="art" />
        <ContentLink to={link}>
          <Link to={link}>
            <Avatar src={avatar} alt="avatar" />
            <H3>{`@${truncate(creator, 20)}`}</H3>
          </Link>
        </ContentLink>
      </ImgBox>
    </Container>
  );
}
