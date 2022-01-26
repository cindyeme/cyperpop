import tw from 'twin.macro';
import { Link } from 'react-router-dom';
import add from '../assets/images/add.png';
import collec from '../assets/images/collection.png';
import camp from '../assets/images/campaign.png';
import { Wrapper } from './newProfileContainer/header';

const Section = tw.section`bg-gray-200 sm:py-24 py-20 flex items-center justify-items-center`;
const Content = tw.div`flex flex-col space-y-8`;
const TitleContent = tw.div`flex flex-col space-y-6 mx-auto items-center max-w-2xl`;
const H1 = tw.h1`lg:text-3xl text-xl font-bold`;
const Paragraph = tw.p`text-center`;
const Image = tw.img`h-24 w-24 `;
const CardContainer = tw.div`mt-8`;
const CardContent = tw.div`grid md:grid-cols-2 gap-y-6 gap-x-8 px-4 py-6 justify-center items-center`;
const ItemLink = tw(Link)`border self-stretch bg-white p-6 bg-white
 hover:-translate-y-2 duration-300 ease-linear shadow-lg hover:shadow hover:text-black`;
const MainContent = tw.div`flex flex-col space-y-4 justify-center items-center`
const H3 = tw.h2`text-xl font-semibold py-2`

const CreateContent = () => {
  return (
    <Section>
      <Wrapper>
        <Content>
          <TitleContent>
            <Image src={add} alt="create" />
            <H1>Create</H1>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat.
            </Paragraph>
          </TitleContent>

          {/*   */}
          <CardContainer>
            <CardContent>
              {/* Collections */}
              <ItemLink to="/create-campaign">
                <MainContent>
                  <Image src={collec} alt="" />
                  <H3>Campaign</H3>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </Paragraph>
                </MainContent>
              </ItemLink>
              {/* Campaign */}
              <ItemLink to="/create-collections" tw="border self-stretch bg-white p-6">
                <MainContent>
                  <Image src={camp} alt="" />
                  <H3>Collections</H3>
                  <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                  </Paragraph>
                </MainContent>
              </ItemLink>
            </CardContent>
          </CardContainer>
        </Content>
      </Wrapper>
    </Section>
  );
};

export default CreateContent;
