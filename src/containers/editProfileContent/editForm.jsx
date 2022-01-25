import { Button } from 'components/Button';
import styled from 'styled-components';
import tw from 'twin.macro';

const FormContainer = styled.div`
  background: #fff;
  padding: 20px 30px;
  input {
    ${tw`px-3 sm:px-4 w-full h-[54px] mt-2 border bg-black text-white placeholder-gray-700 focus:border-gray-700 border border-gray-100 active:border-gray-100 hover:border-gray-100 rounded-md font-medium text-base focus:border-gray-100 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const Content = tw.div`grid grid-cols-1 gap-5 border-b border-gray-600 pb-5`;
const InputContainer = tw.div`relative flex flex-col relative w-full`;
const Input = tw.input`w-full`;
const InputxEmail = tw.input`pr-[85px]`;
const Form = tw.form``;
export const MdHeading = tw.h1`md:text-2xl text-xl font-bold pb-6 text-center uppercase`;
const Label = tw.label`text-base font-semibold text-left text-black tracking-wide`;
const AbsButton = tw.button`absolute top-[41px] right-0 bg-gray-700 text-white px-3 py-2 text-sm`;
const Textarea = tw.textarea`w-full px-3 sm:px-4 py-4 bg-black w-full mt-3 border border-gray-100 placeholder-gray-500 focus:border-gray-100 active:border-gray-100 hover:border-gray-100 rounded-md font-medium text-base`;
const Div = tw.div`mt-5`;
const Paragraph = tw.p`lg:text-lg text-base font-semibold text-gray-800  md:text-left text-center`;
const BtnContainer = tw.div`text-center md:text-left`;

export default function EditForm() {
  return (
    <FormContainer>
      <Form action="#">
        <Content>
          {/* Account Info */}
          <MdHeading>Account Info</MdHeading>
          {/* DIsplay name */}
          <InputContainer>
            <Label htmlFor="displayName">Display Name</Label>
            <Input type="text" name="displayName" id="displayName" placeholder="e.g `Krishnan`" />
          </InputContainer>
          {/* Email */}
          <InputContainer>
            <Label htmlFor="email">Email</Label>
            <InputxEmail type="email" name="email" id="email" placeholder="youremail@domain.com" />
            <AbsButton type="button">Confirm</AbsButton>
          </InputContainer>
          {/* Custom URL */}
          <InputContainer>
            <Label htmlFor="url">Custom URL</Label>
            <Input type="text" name="url" id="url" placeholder="Custom URL" />
          </InputContainer>
          {/* Bio */}
          <InputContainer>
            <Label htmlFor="bio">Bio</Label>
            <Textarea rows="4" id="bio" placeholder="Bio" />
          </InputContainer>
        </Content>
        {/* Submit */}
        <Div>
          <Paragraph>
            To update your setting you should sign message through your wallet. Click "Update profile" then sign the
            message.
          </Paragraph>
          <BtnContainer>
            <Button text="Update profile" />
          </BtnContainer>
        </Div>
      </Form>
    </FormContainer>
  );
}
