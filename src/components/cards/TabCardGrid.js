import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { Container, ContentWithPaddingXl } from 'constants/componentsStyles/Layouts.js';
import { SectionHeading } from 'constants/componentsStyles/Headings.js';
import { PrimaryButton as PrimaryButtonBase } from 'constants/componentsStyles/Buttons.js';
import { ReactComponent as StarIcon } from 'assets/svg/star-icon.svg';
import { ReactComponent as Icon } from 'assets/svg/ethereum.svg';
import { API_BASE_URL, BASE_URL } from '../../config';
import { Link } from 'react-router-dom';

const HeaderRow = tw.div`flex justify-between items-center flex-col xl:flex-row`;
const Header = tw(SectionHeading)``;
const TabsControl = tw.div`flex flex-wrap bg-gray-200 px-2 py-2 rounded leading-none mt-12 xl:mt-0`;
const EthIcon = styled(Icon)`
  ${tw`h-10 w-20 absolute ml-32 -mt-16`}
`;
const TabControl = styled.div`
  ${tw`cursor-pointer px-6 py-3 mt-2 sm:mt-0 sm:mr-2 last:mr-0 text-gray-600 font-medium rounded-sm transition duration-300 text-sm sm:text-base w-1/2 sm:w-auto text-center`}
  &:hover {
    ${tw`bg-blue-600 text-white`}
  }
  ${(props) => props.active && tw`bg-blue-600! text-gray-100!`}
  }
`;

const TabContent = tw(motion.div)`mt-6 flex flex-wrap sm:-mr-10 md:-mr-6 lg:-mr-12`;
const CardContainer = tw.div`mt-10 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12`;
const Card = tw(motion(Link))`bg-gray-200 rounded-b focus:outline-none block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer = styled.div`
  ${(props) =>
    css`
      background-image: url('${props.imageSrc}');
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover relative rounded-t`}
`;
const CardRatingContainer = tw.div`leading-none absolute inline-flex bg-gray-100 bottom-0 left-0 ml-4 mb-4 rounded-full px-5 py-2 items-end`;
const CardRating = styled.div`
  ${tw`mr-1 text-sm font-bold flex items-end`}
  svg {
    ${tw`w-4 h-4 fill-current text-orange-400 mr-1`}
  }
`;

const CardHoverOverlay = styled(motion.div)`
  background-color: rgba(255, 255, 255, 0.5);
  ${tw`absolute inset-0 flex justify-center items-center`}
`;
const CardButton = tw(PrimaryButtonBase)`text-sm`;

const CardReview = tw.div`font-medium text-xs text-gray-600`;

const CardText = tw.div`p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-blue-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600 truncate`;
const CardPrice = tw.p`mt-4 text-xl font-bold absolute -mt-16 ml-40 pt-2 pl-6`;

export default TabGrid => {
  const data = {
    heading : '',
    tabs : {
      BuyNow: [
        {
          imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
          title: 'CyberPop',
          content: 'Lorem Ipsum cotet',
          price: '5.99',
          rating: '5.0',
          reviews: '87',
          url: '/nft',
        },
        {
          imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
          title: 'CyberPop',
          content: 'Lorem Ipsum cotet',
          price: '5.99',
          rating: '5.0',
          reviews: '87',
          url: '/nft',
        },
        {
          imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
          title: 'CyberPop',
          content: 'Lorem Ipsum cotet',
          price: '5.99',
          rating: '5.0',
          reviews: '87',
          url: '/nft',
        },
        {
          imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
          title: 'CyberPop',
          content: 'Lorem Ipsum cotet',
          price: '5.99',
          rating: '5.0',
          reviews: '87',
          url: '/nft',
        },
        {
          imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
          title: 'CyberPop',
          content: 'Lorem Ipsum cotet',
          price: '5.99',
          rating: '5.0',
          reviews: '87',
          url: '/nft',
        },
        {
          imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
          title: 'CyberPop',
          content: 'Lorem Ipsum cotet',
          price: '5.99',
          rating: '5.0',
          reviews: '87',
          url: '/nft',
        },
        {
          imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
          title: 'CyberPop',
          content: 'Lorem Ipsum cotet',
          price: '5.99',
          rating: '5.0',
          reviews: '87',
          url: '/nft',
        },
        {
          imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
          title: 'CyberPop',
          content: 'Lorem Ipsum cotet',
          price: '5.99',
          rating: '5.0',
          reviews: '87',
          url: '/nft',
        },
      ],
      OnAuction: getRandomCards(),
      New: getRandomCards(),
      HasOffers: getRandomCards(),
    },
  }
  const [marketPlace, setMarketPlace] = useState('');

  useEffect(() => {
    const url = API_BASE_URL + '/marketplace';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json);
        setMarketPlace(json);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  /*
   * To customize the tabs, pass in data using the `tabs` prop. It should be an object which contains the name of the tab
   * as the key and value of the key will be its content (as an array of objects).
   * To see what attributes are configurable of each object inside this array see the example above for "Starters".
   */
  const tabsKeys = data.Object.keys(data.tabs);
  const [activeTab, setActiveTab] = useState(tabsKeys[0]);

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeaderRow>
          <Header>{data.heading}</Header>

          <TabsControl>
            {Object.keys(data.url).map((tabName, index) => (
              <TabControl key={index} active={activeTab === tabName} onClick={() => setActiveTab(tabName)}>
                {tabName}
              </TabControl>
            ))}
          </TabsControl>
        </HeaderRow>
        {Object.keys(marketPlace).map((mp, index) => (
          <TabContent
            key={index}
            variants={{
              current: {
                opacity: 1,
                scale: 1,
                display: 'flex',
              },
              hidden: {
                opacity: 0,
                scale: 0.8,
                display: 'none',
              },
            }}
            transition={{ duration: 0.4 }}
            initial={activeTab === marketPlace[mp].MpTitle ? 'current' : 'hidden'}
            animate={activeTab === marketPlace[mp].MpTitle ? 'current' : 'hidden'}
          >
            <CardContainer key={index}>
              <Card
                className="group"
                to={'/nft/' + marketPlace[mp].id}
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <CardImageContainer imageSrc={marketPlace[mp].title}>
                  <video src={BASE_URL + 'admin/nft/' + marketPlace[mp].video} />
                  <CardRatingContainer>
                    <CardRating>
                      <StarIcon />
                      {5.0}
                    </CardRating>
                    <CardReview>({12})</CardReview>
                  </CardRatingContainer>
                  <CardHoverOverlay
                    variants={{
                      hover: {
                        opacity: 1,
                        height: 'auto',
                      },
                      rest: {
                        opacity: 0,
                        height: 0,
                      },
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <CardButton>Buy Now</CardButton>
                  </CardHoverOverlay>
                </CardImageContainer>
                <CardText>
                  <CardTitle>{marketPlace[mp].title}</CardTitle>
                  <CardContent>{marketPlace[mp].summary}</CardContent>
                  <EthIcon />
                  <CardPrice>{marketPlace[mp].price}</CardPrice>
                </CardText>
              </Card>
            </CardContainer>
          </TabContent>
        ))}
      </ContentWithPaddingXl>
    </Container>
  );
};

/* This function is only there for demo purposes. It populates placeholder cards */
const getRandomCards = () => {
  const cards = [
    {
      imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
      title: 'CyberPop',
      content: 'Lorem Ipsum cotet',
      price: '5.99',
      rating: '5.0',
      reviews: '87',
      url: '/nft',
    },
    {
      imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
      title: 'CyberPop',
      content: 'Lorem Ipsum cotet',
      price: '5.99',
      rating: '5.0',
      reviews: '87',
      url: '/nft',
    },
    {
      imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
      title: 'CyberPop',
      content: 'Lorem Ipsum cotet',
      price: '5.99',
      rating: '5.0',
      reviews: '87',
      url: '/nft',
    },
    {
      imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
      title: 'CyberPop',
      content: 'Lorem Ipsum cotet',
      price: '5.99',
      rating: '5.0',
      reviews: '87',
      url: '/nft',
    },
    {
      imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
      title: 'CyberPop',
      content: 'Lorem Ipsum cotet',
      price: '5.99',
      rating: '5.0',
      reviews: '87',
      url: '/nft',
    },
    {
      imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
      title: 'CyberPop',
      content: 'Lorem Ipsum cotet',
      price: '5.99',
      rating: '5.0',
      reviews: '87',
      url: '/nft',
    },
    {
      imageSrc: 'https://atlas-content-cdn.pixelsquid.com/stock-images/ethereum-coin-Je1DD2C-600.jpg',
      title: 'CyberPop',
      content: 'Lorem Ipsum cotet',
      price: '5.99',
      rating: '5.0',
      reviews: '87',
      url: '/nft',
    },
  ];

  // Shuffle array
  return cards.sort(() => Math.random() - 0.5);
};
