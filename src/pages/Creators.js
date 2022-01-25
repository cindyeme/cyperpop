import { PageMotion } from 'layout/PageMotion';
import Hero from 'containers/mainLandingPgContainers/hero/TwoColumnWithOneVideo';
import video from 'assets/images/bg.jpeg';
import CreatorsPageContent from 'containers/creatorContainers/CreatorsPage';

export default function Creators() {
  return (
    <PageMotion>
      <Hero
        heading="Creators"
        descriptionOne="Rapidly generate thousands of NFTs with art engines"
        descriptionTwo="Promote NFTs through contests &amp; giveaways"
        descriptionThree="Provide exclusive access areas to NFT holders"
        imageDecoratorBlob={true}
        videoSrc={video}
      />
      <CreatorsPageContent />
    </PageMotion>
  );
}
