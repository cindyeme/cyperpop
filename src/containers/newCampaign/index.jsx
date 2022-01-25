import CampaignCard from 'components/cards/campaignCard.js';
import { Wrapper } from 'containers/newProfileContainer/header';
import tw from 'twin.macro';

const Section = tw.section`relative py-24`;
export const Heading = tw.h1`lg:text-3xl sm:text-2xl text-xl text-gray-900 font-bold mb-4 text-center md:text-left`;
const Paragraph = tw.p`text-center md:text-left text-base font-semibold text-gray-600`;
export const Grid = tw.div`grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-x-5 gap-y-6 mt-10`;

export default function NewCampaign() {
  return (
    <Section>
      <Wrapper>
        <Heading>Collections</Heading>
        <Paragraph>More Description here...</Paragraph>
        <Grid>
          {[0, 1, 2, 3, 4,5,6,7].map((idx) => (
            <CampaignCard key={idx} link="/campaign-details" />
          ))}
        </Grid>
      </Wrapper>
    </Section>
  );
}
