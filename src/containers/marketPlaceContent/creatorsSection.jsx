import CreatorCard from 'components/cards/creatorCard.js';
import { Wrapper } from 'containers/newProfileContainer/header';
import tw from 'twin.macro';
import avatar from '../../assets/images/avatar_11.png';
import bg from '../../assets/images/item_8.png';
import { ViewLink } from './campaignSection';
import { ViewWrap } from './campaignSection';

const Section = tw.section`relative pb-24`;
export const Heading = tw.h1`lg:text-3xl sm:text-2xl text-xl text-gray-900 font-bold mb-4 text-center md:text-left`;
const Paragraph = tw.p`text-center md:text-left text-base font-semibold text-gray-600`;
export const Grid = tw.div`grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-5 gap-y-6 mt-10`;

export default function CreatorsSection() {
  return (
    <Section>
      <Wrapper>
        <Heading>Creators</Heading>
        <Paragraph>More description here...</Paragraph>
        <Grid>
          {[0, 1, 2].map((idx) => (
            <CreatorCard link="/new-profile" avatar={avatar} bg={bg} creator="jaxon_duffy" />
          ))}
        </Grid>
        <ViewWrap>
          <ViewLink to="/creators">View All</ViewLink>
        </ViewWrap>
      </Wrapper>
    </Section>
  );
}
