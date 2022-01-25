import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { css } from 'styled-components/macro'; //eslint-disable-line
import {PageMotion} from 'layout/PageMotion.js';
import Header from 'components/headers/light.js';
import Footer from 'components/footers/MiniCenteredFooter.js';

const Container = tw.div`relative`;
const Content = tw.div`w-3/4 mx-auto py-20 lg:py-24`;
const Heading = tw.span`text-blue-800`;
const Span = tw.span`text-red-600`;
const Desc = tw.p`text-gray-600 text-xs mt-2`;
const FileContainer = tw.div`rounded-lg border-2 border-dashed border-gray-600 relative sm:mt-6 md:mt-4 lg:mt-2 mt-6 focus:border-blue-400 focus:outline-none transition duration-200`;
const FileDesc = tw.div`text-center text-gray-500 p-10 absolute top-0 right-0 left-0 m-auto`;
const Image = tw.img`sm:w-1/2 md:w-1/3 lg:w-1/4 mt-2 py-2 px-2`;
const Video = tw.video`sm:w-full md:w-1/3 lg:w-2/4 mt-2 py-2 px-2`;

const ImageDesc = tw.p`text-gray-600 text-xs mt-8 sm:mt-4 md:mt-3 lg:mt-2`;
const Div = tw.div`lg:flex lg:flex-row`;
const FormContainer = styled.div`
  ${tw`p-10 sm:p-12 md:p-16 bg-gray-200 text-blue-500 rounded-lg relative`}
  form {
    ${tw`mt-4`}
  }
  h2 {
    ${tw`text-3xl sm:text-4xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-black text-sm border-gray-600 tracking-wide border px-2 py-2 text-black focus:border-blue-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex flex-col sm:flex-row justify-between`;
const Column = tw.div`sm:w-full flex flex-col`;
const InputContainer = tw.div`relative py-5 mt-2`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-base`;
const Input = tw.input`rounded-lg mt-2`;
const File = tw.input`cursor-pointer relative block opacity-0 w-3/4 h-32 p-20 z-50`;
const TextArea = tw.textarea`rounded-lg mt-2 h-10 sm:h-20 resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-8 py-3 bg-gray-100 text-blue-500 rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none focus:outline-none hover:bg-gray-300 hover:text-blue-700 focus:-translate-y-px focus:shadow-xl`;

export default () => {
  const [selectedFile, setSelectedFile] = useState();
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [isSelected, setIsSelected] = useState(false);
  const [isVideo, setIsVideo] = useState();
  const [file, setFile] = useState();
  const [name, setName] = useState();
  const [link, setLink] = useState();
  const [desc, setDesc] = useState();
  const [account, setAccount] = useState({
    file: '',
    name: '',
    link: '',
    desc: '',
  });

  const changeHandler = (event) => {
    console.log(event);
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
    const value = event.target.files[0];
    account['file'] = value;
    setAccount(account);

    if (event.target.files[0].type == 'video/mp4' || event.target.files[0].type == 'video/webm') {
      setIsVideo(event.target.files[0]);
    }
  };

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    account[name] = value;
    setAccount(account);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(account);
  };

  return (
    <PageMotion>
      <Container>
        <Content>
          <FormContainer>
            <div tw="mx-auto max-w-4xl">
              <Heading>
                <h2>Create new item</h2>
              </Heading>
              <form method="post" onSubmit={handleSubmit}>
                <TwoColumn>
                  <Column>
                    <InputContainer>
                      <Label htmlFor="name-input">
                        Image, Video or Audio <Span>*</Span>
                      </Label>
                      <ImageDesc>File types supported: JPG, PNG, GIF, SVG, MP4, WEBM. Max size: 100 MB</ImageDesc>

                      <>
                        {isSelected ? (
                          isVideo ? (
                            <Div>
                              <Video src={URL.createObjectURL(selectedFile)} controls />
                              <FileContainer>
                                <File
                                  id="name-input"
                                  type="file"
                                  name="name"
                                  onChange={function (event) {
                                    changeHandler();
                                    handleChange();
                                  }}
                                />
                                <FileDesc>Drop files anywhere to upload</FileDesc>
                              </FileContainer>
                            </Div>
                          ) : (
                            <Div>
                              <Image src={URL.createObjectURL(selectedFile)} />
                              <FileContainer>
                                <File
                                  id="name-input"
                                  type="file"
                                  name="name"
                                  onChange={function (event) {
                                    changeHandler();
                                    handleChange();
                                  }}
                                />
                                <FileDesc>Drop files anywhere to upload</FileDesc>
                              </FileContainer>
                            </Div>
                          )
                        ) : (
                          <FileContainer>
                            <File
                              id="name-input"
                              type="file"
                              name="name"
                              onChange={changeHandler}
                              accept="image/*, video/*"
                              required
                            />
                            <FileDesc>Drop files anywhere to upload</FileDesc>
                          </FileContainer>
                        )}
                      </>
                    </InputContainer>

                    <InputContainer>
                      <Label htmlFor="name-input">
                        Name <Span>*</Span>
                      </Label>
                      <Input
                        id="name-input"
                        type="text"
                        name="name"
                        placeholder="Item name"
                        onChange={handleChange}
                        required
                      />
                    </InputContainer>

                    <InputContainer>
                      <Label htmlFor="link-input">External Link</Label>
                      <Desc>
                        CyberPop will include a link to this URL on this item's detail page, so that users can click to
                        learn more about it. You are welcome to link to your own webpage with more details.
                      </Desc>
                      <Input
                        id="link-input"
                        type="text"
                        name="link"
                        placeholder="https://yoursite.io/item/350"
                        onChange={handleChange}
                      />
                    </InputContainer>

                    <InputContainer>
                      <Label htmlFor="desc-input">Description</Label>
                      <Desc>The description will be included on the item's detail page underneath its image. </Desc>
                      <TextArea
                        id="desc-input"
                        name="desc"
                        placeholder="Description of the item"
                        onChange={handleChange}
                      />
                    </InputContainer>
                  </Column>
                </TwoColumn>

                <SubmitButton type="submit" value="Submit">
                  Submit
                </SubmitButton>
              </form>
            </div>
          </FormContainer>
        </Content>
      </Container>
    </PageMotion>
  );
};
