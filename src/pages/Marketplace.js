import { PageMotion } from "layout/PageMotion";
import MarketPlaceContent from "../containers/marketPlaceContent";
import Hero from 'containers/mainLandingPgContainers/hero/TwoColumnWithOneVideo';
import video from 'assets/images/bg.jpeg';

export default function MarketPlace () {
  return (
    <PageMotion>
      <Hero
        heading="Market Place"
        descriptionOne="Rapidly generate thousands of NFTs with art engines"
        descriptionTwo="Promote NFTs through contests &amp; giveaways"
        descriptionThree="Provide exclusive access areas to NFT holders"
        imageDecoratorBlob={true}
        videoSrc={video}
      />
      <MarketPlaceContent />
    </PageMotion>
  );
}