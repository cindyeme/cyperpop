import NftCard from 'components/cards/nftCard';
import { Wrapper } from 'containers/newProfileContainer/header';
import tw from 'twin.macro';

const Section = tw.section`relative py-24`;
export const Heading = tw.h1`lg:text-3xl sm:text-2xl text-xl text-gray-900 font-bold mb-4 text-center md:text-left`;
const Grid = tw.div`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-8 gap-x-5 gap-y-8`

export default function ArtWork() {
  return (
    <Section>
      <Wrapper>
        <Heading>Art Work</Heading>
        <Grid>
          {[0, 1, 2, 3, 4, 5].map((idx) => (
            <NftCard key={idx} />
          ))}
        </Grid>
      </Wrapper>
    </Section>
  );
}
