import React from 'react';
import {PageMotion} from 'layout/PageMotion.js';
import { Container, ContentWithPaddingXl } from 'constants/componentsStyles/Layouts';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro';
// import { SectionHeading } from 'components/styles/Headings';
import { PrimaryButton as PrimaryButtonBase } from 'constants/componentsStyles/Buttons.js';
// import Price from 'components/cards/Price.js';
import { ReactComponent as Heart } from 'feather-icons/dist/icons/heart.svg';
import { ReactComponent as Views } from 'feather-icons/dist/icons/eye.svg';
import { ReactComponent as Icon } from 'assets/svg/ethereum.svg';

// const HeadingRow = tw.div`flex`;
// const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw` w-full sm:w-full lg:w-full sm:pr-8`}
  ${(props) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`lg:flex-row! lg:h-3/4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-full border-2 lg:w-1/2 sm:rounded-t-none rounded-lg`}
      }
      ${Info} {
        ${tw` sm:pl-8 sm:flex-1 sm:rounded-none  `}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium whitespace-pre-line`}
      }
    `}
`;
const Post = tw.div`flex flex-col rounded-lg`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url('${props.imageSrc}');
    `}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-2 rounded-lg rounded-t-none`;
// const Category = tw.div`uppercase text-blue-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-blue-500 after:w-8`;
// const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div` text-4xl font-black group-hover:text-blue-600 transition duration-300`;
const Description = tw.div`whitespace-pre-line`;

// const ButtonContainer = tw.div`flex justify-center`;
const Owned = styled.div`
  ${tw`text-black flex items-center mt-4`}
`;

const CardMetaFeature = styled.div`
  ${tw`flex text-black items-center lg:ml-4 sm: ml-0 mt-4`}
  svg {
    ${tw`w-5 h-5 mr-1`}
  }
`;
const Link = tw.a`pl-2 font-bold text-blue-600`;
const OfferDesc = tw.span`block pl-3 mb-3 text-sm`;
const OfferPrice = tw.span`block pl-10 pt-0 mb-5 text-base`;
const PriceButton = tw.div`mt-3 rounded-xl bg-gray-100 px-3 py-3 font-bold border-2`;
const CardMeta = styled.div`
  ${tw`lg:flex md:flex sm:block font-semibold text-gray-600 uppercase text-xs`}
`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;

const EthIcon = styled(Icon)`
  ${tw`h-10 w-20 absolute -ml-5 -mt-2`}
`;
const PrimaryPriceButton = tw(PrimaryButtonBase)`lg:w-3/4 md:w-3/4 sm:w-full`;
// const Video = styled.img((props) => [
//   props.videoRounded && tw`rounded`,
//   props.videoBorder && tw`border`,
//   props.videoShadow && tw`shadow`,
// ]);
const VideoColumn = tw(Column)`md:w-6/12 sm:w-full flex-shrink-0 relative`;

const NFTSingleImage = ({
  heading = 'Lions Episode #2',
  owned = 'Lions Football club',
  views = '5.2k views',
  favourites = '2.1k likes',
  primaryButtonUrl = '#',
  primaryButtonText = 'Make Offer',
  offerDesc = 'Highest Offer',
  offerPrice = '1.03',
  inDollar = ' ($140)',
  featured = true,
  description = '',
  imageSrc = '',
  videoSrc = '',
  videoRounded = true,
  videoBorder = false,
  videoShadow = false,
  videoCss = null,
  creatorId = '',
  creator = '/creator/' + creatorId,
  mintCyberPopToken,
}) => {
  // const [visible, setVisible] = useState(7);
  // const onLoadMoreClick = () => {
  //   setVisible((v) => v + 6);
  // };
  return (
    <PageMotion>
      <Container>
        <ContentWithPaddingXl>
          <Posts>
            <PostContainer featured={featured}>
              <Post className="group">
                <VideoColumn>
                  <video
                    css={videoCss}
                    src={videoSrc}
                    controls
                    autoplay
                    loop
                    videoBorder={videoBorder}
                    videoShadow={videoShadow}
                    videoRounded={videoRounded}
                  />
                </VideoColumn>
                <Info>
                  <Title>{heading}</Title>
                  <CardMeta>
                    <Owned>
                      Owned By<Link href={creator}>{owned}</Link>
                    </Owned>
                    <CardMetaFeature>
                      <Views /> {views}
                    </CardMetaFeature>
                    <CardMetaFeature>
                      <Heart /> {favourites}
                    </CardMetaFeature>
                  </CardMeta>
                  <PriceButton>
                    <OfferDesc>{offerDesc}</OfferDesc>
                    <EthIcon />
                    <OfferPrice>
                      {offerPrice}
                      {inDollar}
                    </OfferPrice>
                    <PrimaryPriceButton
                      onClick={() => {
                        console.log('clicked');
                        mintCyberPopToken(videoSrc, offerPrice);
                      }}
                      href={primaryButtonUrl}
                    >
                      {primaryButtonText}
                    </PrimaryPriceButton>
                  </PriceButton>

                  <Description>{description}</Description>
                </Info>
              </Post>
            </PostContainer>
          </Posts>
        </ContentWithPaddingXl>
      </Container>
    </PageMotion>
  );
};

export default NFTSingleImage;
