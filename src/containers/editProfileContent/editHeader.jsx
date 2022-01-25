import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import bg from '../../assets/images/bg.png';
import avatar from '../../assets/images/avatar_11.png';
import { Wrapper } from 'containers/newProfileContainer/header';
import { Nav } from 'containers/newProfileContainer/header';
import { H3 } from 'components/cards/creatorCard';
import { WalletAddress } from 'containers/newProfileContainer/header';

const Section = tw.section`grid grid-cols-1 p-0 m-0 w-full items-center relative`;
const Wrap = tw.div`pb-32 pt-10`;
const FlexBox = tw.div`sm:flex items-center sm:space-x-8 md:space-x-12`;
const UploadBox = tw.div`relative`;
const FlexJustify = tw.div`flex flex-col items-center justify-center text-center`;
const ProfileImg = tw.img`relative border-4 h-32 w-32 object-cover rounded-full`;
const AvatarUploadIcon = tw.div`absolute bottom-0 bg-white text-black text-xl rounded-full shadow px-2 py-1 right-0 cursor-pointer`;
const BgUploadIcon = tw.div`absolute bottom-[30px] bg-white text-black text-xl rounded-full shadow px-2 py-1 right-[30px] cursor-pointer`;
const FlexCol = tw.div`flex flex-col mt-12 items-center sm:items-start justify-center sm:justify-start`;
const H4 = tw.h4`text-white text-base font-bold`;
const Paragraph = tw.p`text-white text-sm`;
const Span = tw.span`text-gray-600`;
const FlexRoow = tw.div`flex items-center space-x-8 pt-5`;
const FlexCool = tw.div`flex flex-col space-y-1 items-center mt-3`;
const InfoBox = tw.div`flex flex-col items-center sm:items-start space-y-3`;

const EditHeader = ({
  username = 'indaboski',
  address = '0x2345667764456764',
  followers = '504',
  following = '45',
}) => (
  <>
    <Section
      className=""
      style={{
        background: `linear-gradient(
    to left,
    rgba(0,0,0, 0.5),
    rgba(0,0,0, 0.8)
  ), url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
      }}
    >
      {/* cover pictures  */}
      <Wrapper>
        <Wrap>
          <Nav>
            <Link to="/new-profile">Profile</Link>
            <span className="fa fa-angle-right" />
            <Span>Edit Profile</Span>
          </Nav>
          <FlexCol>
            <FlexBox>
              <FlexJustify>
                <UploadBox>
                  <ProfileImg src={avatar} alt="avatar" />
                  <AvatarUploadIcon>
                    <span className="fa fa-camera" />
                    <input type="file" />
                  </AvatarUploadIcon>
                </UploadBox>
              </FlexJustify>
              <InfoBox>
                <H3>{`@${username}`}</H3>
                <WalletAddress address={address} />
              </InfoBox>
            </FlexBox>
            <FlexRoow>
              <FlexCool>
                <H4>{`${followers}`}</H4>
                <Paragraph>Followers</Paragraph>
              </FlexCool>
              <FlexCool>
                <H4>{`${following}`}</H4>
                <Paragraph>Following</Paragraph>
              </FlexCool>
            </FlexRoow>
          </FlexCol>
        </Wrap>
      </Wrapper>
      <BgUploadIcon>
        <span className="fa fa-camera" />
        <input type="file" />
      </BgUploadIcon>
    </Section>
  </>
);

export default EditHeader;
