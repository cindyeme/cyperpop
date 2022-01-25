import tw from 'twin.macro';
// import NftCard from 'components/cards/nftCard';
import art from '../../assets/images/item_11.png';
import { Wrapper } from './header';
import { Link } from 'react-router-dom';

export const Collection = tw.h1`text-2xl text-gray-900 font-bold`;
const FlexContainer = tw.div`flex space-y-3 flex-col justify-center sm:space-y-0 sm:flex-row sm:justify-between items-center`;
const AddBtn = tw(
  Link
)`bg-black text-base focus:outline-none rounded text-white px-4 py-2 font-bold font-display hover:text-white hover:bg-opacity-75 transition duration-300 ease-linear`;
const Grid3 = tw.div`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-8 mt-8`;
export const PlSpan = tw.span`pl-3`;
const Container = tw.section`sm:py-16 lg:pb-32 py-8`;
const CardBtn = tw.button`focus:outline-none text-4xl text-center  p-10 text-black shadow-lg w-full h-full`;
const ColSpan = tw.div`rounded border hover:shadow-xl transition duration-300 ease-out`;
const IconWrap = tw(
  Link
)`bg-gray-700 hover:bg-black hover:text-white transition duration-300 ease-linear px-5 py-3 text-white rounded-full`;
const Image = tw.img`h-[200px] max-h-full object-cover w-full rounded-t`;
const FlexCol = tw.div`flex flex-col space-y-3 p-4`;
const H2 = tw.h2`lg:text-lg text-base font-semibold`;
const Paragraph = tw.p`leading-relaxed text-sm mt-3 text-gray-900`;

const CardsRow = () => {
  return (
    <Container>
      <Wrapper>
        <FlexContainer>
          <Collection>Collections</Collection>
          <AddBtn to="/create-nft">
            <span className={`fa fa-plus`} />
            <PlSpan>Add More</PlSpan>
          </AddBtn>
        </FlexContainer>
        <div>
          <Grid3>
            {/* Single item => plus */}
            <ColSpan>
              <CardBtn>
                <IconWrap to="/create-campaign">
                  <span className="fa fa-plus" />
                </IconWrap>
              </CardBtn>
            </ColSpan>
            {/* Single item */}
            {[...Array(3)].map(() => (
              <ColSpan>
                <Image src={art} alt="art" />
                <FlexCol>
                  <H2>Design Title</H2>
                  <Paragraph>Some descriptions here...</Paragraph>
                </FlexCol>
              </ColSpan>
            ))}
          </Grid3>
        </div>
      </Wrapper>
    </Container>
  );
};

export default CardsRow;
