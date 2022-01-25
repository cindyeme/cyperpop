import { PageMotion } from 'layout/PageMotion';
import Hero from 'containers/mainLandingPgContainers/hero/TwoColumnWithOneVideo';
import video from 'assets/images/bg.jpeg';
import NewCampaign from 'containers/newCampaign';

export default function Campaign() {
  return (
    <PageMotion>
      <Hero
        heading="Campaign"
        descriptionOne="Rapidly generate thousands of NFTs with art engines"
        descriptionTwo="Promote NFTs through contests &amp; giveaways"
        descriptionThree="Provide exclusive access areas to NFT holders"
        imageDecoratorBlob={true}
        videoSrc={video}
      />
      <NewCampaign />
    </PageMotion>
  );
}
