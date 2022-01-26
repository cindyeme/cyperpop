import tw from 'twin.macro';
import { Link } from 'react-router-dom';
import CampaignCard from 'components/cards/campaignCard.js';
import CollectionCard from 'components/cards/collectionCard';
import { Wrapper } from 'containers/newProfileContainer/header';
import item1 from 'assets/images/item_5.png';
import item2 from 'assets/images/item_8.png';
import item3 from 'assets/images/item_11.png';
import { Button } from 'components/Button';

const data = [item1, item2, item3];

const Section = tw.section`relative py-24`;
const SectionWrap = tw.div`mt-16`;
export const Heading = tw.h1`lg:text-3xl sm:text-2xl text-xl text-gray-900 font-bold mb-4 text-center md:text-left`;
const Paragraph = tw.p`text-center md:text-left text-base font-semibold text-gray-600`;
export const Grid = tw.div`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-6 mt-10`;
export const Grid3 = tw.div`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-6 mt-10`;
const FlexBox = tw.div`flex justify-between items-center`;
const TextWrap = tw.div``;
const ViewLink  = tw(Link)`bg-black text-white font-bold text-base px-4 py-2 hover:bg-opacity-75 transition duration-300 ease-linear`

export default function NewCampaign() {
  return (
    <Section>
      <Wrapper>
        <FlexBox>
          <TextWrap>
            <Heading>Collections</Heading>
            <Paragraph>More Description here...</Paragraph>
          </TextWrap>
          <ViewLink to="/campaign">View All</ViewLink>
        </FlexBox>
        <Grid3>
          {[...Array(3)].map((el) => (
            <CollectionCard key={el} images={[...data]} link="/campaign-details" />
          ))}
        </Grid3>
        <SectionWrap>
          <Heading>Top Work</Heading>
          <Paragraph>More Description here...</Paragraph>
          <Grid>
            {[...Array(4)].map((idx) => (
              <CampaignCard key={idx} link="/campaign-details" />
            ))}
          </Grid>
        </SectionWrap>
        <SectionWrap>
          <Heading>Recently Listed</Heading>
          <Paragraph>More Description here...</Paragraph>
          <Grid>
            {[...Array(4)].map((idx) => (
              <CampaignCard key={idx} link="/campaign-details" />
            ))}
          </Grid>
        </SectionWrap>
      </Wrapper>
    </Section>
  );
}
