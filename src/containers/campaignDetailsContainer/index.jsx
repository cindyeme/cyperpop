import tw from 'twin.macro';
import ArtWork from './artWork';
import Hero from './Hero';

const Section = tw.section`relative bg-gray-100`;

export default function CampaignDetailsContent() {
  return (
    <Section>
      <Hero />
      <ArtWork />
    </Section>
  );
}
