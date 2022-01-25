import React from 'react';
import { Link } from 'react-router-dom';
import tw from 'twin.macro';
import styled from 'styled-components';
import { SmallSpinnerFull } from 'components/loader/loader';

const CollectionName = tw.p`text-left  text-sm font-bold text-gray-800`;
const Owner = tw.p`text-left text-sm text-indigo-900`;
const Text = tw.p`text-left text-xs text-gray-500 `;
const Container = styled.div`
  height: 20rem;
  box-shdow: 0 0 3px 0 rgba(0,0,0,0.4);
`;
const Main = styled.div`
  background: #edf2f7;
  display: grid;
  grid-template-column: 1fr;

  padding: 0.2rem;
  border-radius: 10px;
  overflow: hidden;
  transition: all 0.2s cubic-bezier(0.39, 0.575, 0.565, 1);
  overflow: hidden;
  &:hover {
    padding: 0;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  }
`;
const Info = styled.div`
  background: #edf2f7;
  display: grid;
  grid-template-column: 1fr;
  grid-row: 1/-1;
  grid-column: 1/-1;
  gap: 1;
  padding: 1rem;
  margin: 0.5rem;
  align-self: flex-end;
  border-radius: 10px;
`;
const NftImage = styled.img`
  width: 100%;
  grid-row: 1/-1;
  grid-column: 1/-1;
  border-radius: 10px;
  height: 20rem;
  overflow: hidden;
  object-fit: cover;
  &:hover {
    height: 20rem;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  }
`;
const NftSpin = styled.div`
  width: 100%;
  grid-row: 1/-1;
  grid-column: 1/-1;
  border-radius: 10px;
  height: 20rem;
  overflow: hidden;
  object-fit: cover;
  &:hover {
    height: 20rem;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 3px 12px;
  }
`;
const NftCard = ({ collectionName, nftowner, link, card, imageLoad, imagesrc, currentProfile }) => {
  return (
    <Link
      to={{
        pathname: link,

        state: nftowner ? { ...{ ...nftowner, ...card } } : { ...card, currentProfile },
      }}
    >
      <Container>
        <Main
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
          {imageLoad ? (
            <NftImage src={imagesrc} alt="nft" />
          ) : (
            <NftSpin>
              <SmallSpinnerFull />
            </NftSpin>
          )}
          <Info>
            <Text>Details</Text>
            <CollectionName>{collectionName}</CollectionName>

            <Owner>{`@${nftowner?.name || card?.name}  ${nftowner ? card.edition : ''}`}</Owner>
          </Info>
        </Main>
      </Container>
    </Link>
  );
};

export default NftCard;
