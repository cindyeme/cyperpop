import tw from 'twin.macro';
import { Link } from 'react-router-dom';
import truncate from 'truncate';
import bg from '../../assets/images/item_3.png';
import avatar from '../../assets/images/avatar_11.png';

const Section = tw.section`w-full `;
const ContentWrapper = tw.div`container px-4 lg:px-10 pt-24 pb-[140px]`;
const Content = tw.div`flex flex-col space-y-6`;
const Image = tw.img`border-8 border-gray-400 rounded-md w-40 h-32 mb-4`;
const Linkk = tw(
  Link
)`rounded-full text-base py-2 px-5 bg-gray-900 text-gray-500 hover:bg-opacity-75 transition duration-300 ease-linear hover:text-white`;
const Span = tw.span`uppercase tracking-wide pr-2 text-white`;
const H1 = tw.h1`xl:text-6xl lg:text-4xl text-3xl text-white font-bold uppercase`;
const CreatorBox = tw(Link)`flex items-center space-x-3 bg-gray-900 text-white rounded-full py-2 px-4 hover:text-white hover:bg-black`;
const Avatar = tw.img`h-10 w-10 rounded-full object-cover`;
const Creator = tw.span`font-semibold tracking-wide`;
const Wrap = tw.div`pt-6`;
const CreatorWrap = tw.div`inline-flex`;
const InfoSectionContainer = tw.div`px-4 lg:px-10 -mt-16`;
const InfoSection = tw.div`bg-white py-5 px-8 shadow-lg max-w-lg rounded-md`;
const InfoSectionWrap = tw.div`flex justify-between flex-wrap`;
const SmallSecContentWrap = tw.div`flex flex-col space-y-3 mb-4 sm:mb-0`;
const InfoSectionHead = tw.h3`text-lg text-gray-600 font-bold`;
const InfoSectionText = tw.p`font-bold text-2xl text-black flex`;
const Owners = tw.img`h-8 w-8 rounded-full object-cover ml-3`;

export default function Hero({
  link = '/campaign',
  address = 'eye',
  artName = 'Digital eyes',
  creator = 'canaksu',
  colecOf = '2',
  owners = '1',
  price = '0.50',
}) {
  return (
    <>
      <Section
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
        <ContentWrapper>
          <Content>
            <Image src={bg} alt="art" />
            <Wrap>
              <Linkk to={link}>
                <Span>{address}</Span>
                <span className="fa fa-external-link" />
              </Linkk>
            </Wrap>
            <H1>{artName}</H1>
            <CreatorWrap>
              <CreatorBox>
                <Avatar src={avatar} alt="avatar" />
                <Creator>{`@${truncate(creator, 15)}`}</Creator>
              </CreatorBox>
            </CreatorWrap>
          </Content>
        </ContentWrapper>
      </Section>
      <InfoSectionContainer>
        <InfoSection>
          <InfoSectionWrap>
            {/* Collection of */}
            <SmallSecContentWrap>
              <InfoSectionHead>Collection of</InfoSectionHead>
              <InfoSectionText>{colecOf}</InfoSectionText>
            </SmallSecContentWrap>
            {/* Owned by */}
            <SmallSecContentWrap>
              <InfoSectionHead>Owned by</InfoSectionHead>
              <InfoSectionText>
                {owners} <Owners src={avatar} alt="avatar" />
              </InfoSectionText>
            </SmallSecContentWrap>
            {/* Price */}
            <SmallSecContentWrap>
              <InfoSectionHead>Floor Price</InfoSectionHead>
              <InfoSectionText>{`${price} MAT`}</InfoSectionText>
            </SmallSecContentWrap>
          </InfoSectionWrap>
        </InfoSection>
      </InfoSectionContainer>
    </>
  );
}
