import tw from 'twin.macro';
import styled from 'styled-components';
import { css } from 'styled-components/macro'; //eslint-disable-line
// import { SectionHeading, Subheading as SubheadingBase } from 'constants/componentsStyles/Headings.js';
import { PrimaryButton as PrimaryButtonBase } from 'constants/componentsStyles/Buttons.js';
import React, { useState, useEffect } from 'react';
import { API_BASE_URL, BASE_URL } from '../../config';
import { ReactComponent as Briefcase } from 'feather-icons/dist/icons/briefcase.svg';
import { ReactComponent as Calendar } from 'feather-icons/dist/icons/calendar.svg';
import ReadMoreReact from 'read-more-react';
import { Link } from 'react-router-dom';

const Container = tw.div`relative`;
const Content = tw.div`max-w-screen-xl mx-auto pb-20 lg:pb-24`;
const ThreeColumn = tw.div`flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap`;
const Column = tw.div`mt-10 lg:w-1/3`


const Card = tw.div`lg:mx-4 xl:mx-8 max-w-sm flex flex-col h-full shadow-2xl hover:cursor-pointer`;
const Image = styled.div((props) => [
  `background-image: url("${props.imageSrc}");`,
  tw`bg-cover bg-center h-80 lg:h-64 rounded rounded-b-none`,
]);

const Details = tw.div`p-6 rounded-full flex-1 flex flex-col items-center text-center lg:block lg:text-left`;
const MetaContainer = tw.div`items-center mt-3`;
const Meta = styled.div`
  ${tw`text-black font-medium mt-4 text-xs flex items-center leading-none mr-6 font-bold last:mr-0`}
`;
const LootDesc = tw.div`text-xs ml-8 mt-2 text-black`;
const Div = tw.div`ml-3 mt-1`;

const Title = tw.h5`mt-4 leading-snug font-bold text-black text-lg`;
const Description = tw.p`mt-3 text-xs text-gray-600`;
const TextLink = tw(Link)`pl-1 text-sm text-black`;
const PrimaryButton = styled(PrimaryButtonBase)((props) => [
  tw`mt-8 md:mt-8 text-sm inline-block mx-auto md:mx-0 bg-black rounded-full`,
  props.buttonRounded && tw`rounded-full`,
]);

const MainFeature = ({
  subheading = 'Blog',
  heading = (
    <>
      We Love <span tw="text-primary-500">Writing.</span>
    </>
  ),
  description = 'Some amazing blog posts that are written by even more amazing people.',
  primaryButtonText = 'Join this campaign',
  primaryButtonUrl = '',
  buttonRounded = true,
}) => {
  const [projects, setProjects] = useState('');

  useEffect(() => {
    const url = API_BASE_URL + '/projects';

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        console.log(json.data);
        setProjects(json.data);
      } catch (error) {
        console.log('error', error);
      }
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Content>
        <ThreeColumn>
          {Object.keys(projects).map((project, index) => (
            <Column key={index}>
              <Card>
                <Image imageSrc={BASE_URL + 'admin/project/' + projects[project].video} />
                <Details>
                  <Title>{projects[project].title}</Title> by
                  <TextLink to={'creator/' + projects[project].creatorId}>{projects[project].name}</TextLink>
                  <Description>
                    <ReadMoreReact text={projects[project].summary} max={100} readMoreText="...read more" />
                  </Description>
                  <MetaContainer>
                    <Meta>
                      <Briefcase />
                      <Div>Loot Chest</Div>
                    </Meta>
                    <LootDesc>1st 50 mints wins a free physical Jersey</LootDesc>
                    <Meta>
                      <Calendar />
                      <Div>15 Dec 2021 at 12pm</Div>
                    </Meta>
                    <Link to={'campaign/' + projects[project].id}>
                      <PrimaryButton buttonRounded={buttonRounded}>{primaryButtonText}</PrimaryButton>
                    </Link>
                  </MetaContainer>
                </Details>
              </Card>
            </Column>
          ))}
        </ThreeColumn>
      </Content>
    </Container>
  );
};

export default MainFeature;
