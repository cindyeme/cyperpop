import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import tw from 'twin.macro';
import styled from 'styled-components';
import ReactPaginate from 'react-paginate';
import { css } from 'styled-components/macro'; //eslint-disable-line
import { Container } from 'constants/componentsStyles/Layouts.js';
import NftCard from 'components/cards/nftCard';
import { BASE_URL } from '../../config';
import { NoArt } from 'containers/staticPages/staticPages';
import './paginationStyle.css';
import { InPageSpin } from 'components/loader/loader';
const TabContent = tw(motion.div)`grid md:gap-4 gap-2 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 my-4`;
const Contain = styled.div`
  display: flex;
  justify-content: center;
`;

const CreatorGrid = ({ creator: { creatorJson: arts, ...nftowner }, metadata }) => {
  // const [nft, setNft] = useState([]);

  // const [collected, setCollected] = useState([]);
  const [loaded, setLoaded] = useState(true);
  const [created, setCreated] = useState([]);

  const [offset, setOffset] = useState(1);
  const [data, setData] = useState([]);
  const [perPage] = useState(16);
  const [pageCount, setPageCount] = useState(1);

  const getData = async ({ value } = { value: offset }) => {
    console.log(value * perPage - perPage, value * perPage);
    const slice = created.slice(value * perPage - perPage, value * perPage);
    const postData = slice.map((card, index) => (
      <NftCard
        card={card}
        key={index}
        imageLoad={card.image}
        imagesrc={`${card.image}`}
        collectionName={card.title}
        nftowner={nftowner}
        link={`/nft-info/${card.dna}`}
      />
    ));
    setData(postData);
    setPageCount(Math.ceil(created.length / perPage));
  };

  const handlePageClick = (e) => {
    const selectedPage = +e.selected + 1;
    setOffset(+selectedPage + 1);
    getData({ value: selectedPage });
  };
  console.log(created);
  useEffect(() => {
    setLoaded(true);

    getData();

    setLoaded(false);

    // eslint-disable-next-line
  }, [created]);
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       await Contract.methods
  //         .walletOfOwner('0x4920a2499d9ba4d37d6595733f899571183f8216')
  //         .call()
  //         .then((data) => {
  //           data.map((nft) => {
  //             fetch(`https://gateway.pinata.cloud/ipfs/QmWg2ETLuB9EKEKxPa1aMZnyxevbXss5gkQYwKWrYbCQiW/${nft}.json`)
  //               .then((response) => response.json())
  //               .then((data) => {
  //                 setCollected((prev) => [...prev, data]);
  //               })
  //               .catch((err) => console.error(err));
  //           });
  //         });
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   })();
  // }, []);

  useEffect(() => {
    (async () => {
      arts.map((nft) => {
        setCreated((prev) => [...prev, nft]);
      });
    })();
  }, [setCreated]);

  // console.log(creator);

  return (
    <Container>
      {loaded ? (
        <InPageSpin />
      ) : (
        <>
          {arts.length >= 1 ? (
            <>
              <TabContent
                variants={{
                  current: {
                    opacity: 1,
                    scale: 1,
                  },
                  hidden: {
                    opacity: 0,
                    scale: 0.8,
                  },
                }}
                transition={{ duration: 0.4 }}
              >
                <>{data}</>
              </TabContent>
              <Contain>
                <ReactPaginate
                  previousLabel={'Prev'}
                  nextLabel={'Next'}
                  breakLabel={'..'}
                  breakClassName={'break-me'}
                  pageCount={pageCount}
                  marginPagesDisplayed={1}
                  pageRangeDisplayed={2}
                  onPageChange={handlePageClick}
                  containerClassName={'pagination'}
                  subContainerClassName={'pages pagination'}
                  activeClassName={'active'}
                />
              </Contain>
            </>
          ) : (
            <NoArt />
          )}
        </>
      )}
    </Container>
  );
};

export default CreatorGrid;
