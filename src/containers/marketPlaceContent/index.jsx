import tw from 'twin.macro';
import CampaignSection from './campaignSection';
import CreatorsSection from './creatorsSection';

const Section = tw.section`relative bg-gray-100`

export default function MarketPlaceContent () {
  return (
    <Section>
      <CampaignSection />
      <CreatorsSection />
    </Section>
  )
}