import styled from 'styled-components';
import upload from '../../assets/svg/upload.svg';
import tw from 'twin.macro';
import { Link } from 'react-router-dom';
import { Wrapper } from '../newProfileContainer/header';
import { PlSpan } from '../newProfileContainer/CardsRow';
import { TextArea } from 'components/Input';

const FormContainer = styled.div`
  input {
    ${tw`px-3 sm:px-4 w-full h-[54px] mt-2 border bg-black text-white placeholder-gray-700 focus:border-gray-700 border-0 active:border-gray-700 hover:border-gray-700 rounded-md font-medium text-base focus:border-blue-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const InputContainer = tw.div`relative flex flex-col relative w-full`;
const Input = tw.input`w-full`;
const Section = tw.section`py-24 bg-gray-800`;
const Grid2 = tw.div`grid md:grid-cols-2 gap-x-5 gap-y-8 bg-white p-4 md:p-8`;
const FlexJustify = tw.div`flex flex-col items-center justify-center space-y-4 mt-8`;
const Box = tw.div`text-center flex flex-col justify-center items-center space-y-8`;
const MarginT = tw.div`pt-6`;
const UploadIcon = tw.img`text-center h-auto max-w-full`;
const H5 = tw.h5`text-black lg:text-lg font-bold text-base font-display`;
const PLight = tw.p`text-gray-700 font-medium`;
const Button = tw.button`bg-black text-white font-bold text-base px-6 py-2 hover:bg-opacity-75 transition duration-300 ease-linear`;
const Label = tw.label`text-base font-semibold text-left text-black tracking-wide`;
const Form = tw.form`flex flex-col space-y-4`;
const Span = tw.span`text-sm text-gray-800`;
export const FlexCol = tw.div`flex flex-col space-y-4`;
const ResFlex = tw.div`flex flex-col sm:flex-row sm:space-x-5 space-y-5 sm:space-y-0`;
const ActionBtn = tw.button`px-5 py-4 bg-black rounded-md text-white w-full sm:w-auto font-semibold text-base`;
const IconWrap = tw.span`rounded-full px-3 py-2 bg-gray-600 text-white`;
const Text = tw.span`text-black font-semibold text-sm`;
export const TextWrap = tw.p`text-gray-900 text-base font-display`;
const FlexRow = tw.div`flex items-center flex-col sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 justify-center items-center mt-10`;
const ActionBtnCan = tw.button`bg-red-800 text-white font-bold text-base px-6 py-2 hover:bg-opacity-75 transition duration-300 ease-linear`;
const ActionBtnPrev = tw.button`bg-gray-900 text-white font-bold text-base px-6 py-2 hover:bg-opacity-75 transition duration-300 ease-linear`;
const ActionBtnCrt = tw.button`bg-primary-100 text-white font-bold text-base px-6 py-2 hover:bg-opacity-75 transition duration-300 ease-linear`;
const Route = tw(Link)``;

export default function CreateCollectionsContent() {
  return (
    <Section>
      <Wrapper>
        <div className="box in__upload">
          <Grid2>
            <div className="left__part upload_file">
              <FlexJustify>
                <Box>
                  <UploadIcon src={upload} alt="icon" />
                  <H5>Drag and drop your file</H5>
                  <PLight>PNG, GIF, WEBP, MP4 or MP3. Max 100mb.</PLight>
                </Box>
                <MarginT>
                  <Box>
                    <PLight>or choose a file</PLight>
                    <Button> Browse files </Button>
                    <input type="file" />
                  </Box>
                </MarginT>
              </FlexJustify>
            </div>
            <FormContainer>
              <Form action="#">
                {/* camaaign */}
                <InputContainer>
                  <Label htmlFor="campaign">Campaign name</Label>
                  <Input id="campaign" type="text" name="campaign" placeholder="e. g. `NFT Global design art`" />
                </InputContainer>
                {/* creator */}
                <InputContainer>
                  <Label htmlFor="creator">Creator</Label>
                  <Input id="creator" type="text" name="creator" placeholder="e. g. `Krishnan R`" />
                </InputContainer>
                {/* description */}
                <InputContainer>
                  <Label htmlFor="desc">
                    Description <Span>(optional)</Span>
                  </Label>
                  <TextArea name="desc" placeholder="e. g. `Add design art description`" rows="4" />
                </InputContainer>
                {/* Loot chest */}
                <InputContainer>
                  <Label htmlFor="loot">Loot chest</Label>
                  <Input id="loot" type="text" name="loot" placeholder="e. g. ``" />
                </InputContainer>
                {/* Time */}
                <InputContainer>
                  <Label htmlFor="time">Time</Label>
                  <Input id="time" type="time" name="time" placeholder="`Time`" />
                </InputContainer>
                <FlexCol>
                  <Label>Choose collection</Label>
                  <ResFlex>
                    <Route to="/create-nft">
                      <ActionBtn>
                        <IconWrap>
                          <span className="fa fa-plus" />
                        </IconWrap>
                        <PlSpan>Create NFT</PlSpan>
                      </ActionBtn>
                    </Route>
                    <ActionBtn>NFT Global Collection</ActionBtn>
                  </ResFlex>
                </FlexCol>
                <FlexCol>
                  <TextWrap>
                    <Text> Service fee : </Text>
                    2.5%
                  </TextWrap>
                  <TextWrap>
                    <Text> You will receive : </Text>
                    22.425 NFTG $41,637.78
                  </TextWrap>
                </FlexCol>
              </Form>
            </FormContainer>
          </Grid2>

          {/*  */}
          <FlexRow>
            <ActionBtnCan>Cancel</ActionBtnCan>
            <ActionBtnPrev>Preview</ActionBtnPrev>
            <ActionBtnCrt>Create Campaign</ActionBtnCrt>
          </FlexRow>
        </div>
      </Wrapper>
    </Section>
  );
}