import styled from 'styled-components';
import tw from 'twin.macro';
import { Formik } from 'formik';
import * as Yup from 'yup';
// import { Alert, TYPE } from 'components/alert';
import swal from 'sweetalert';
// import { useFileUpload } from 'use-file-upload';

const Container = tw.div` sm:mx-24 mx-2 `;
const Content = tw.div` mx-auto sm:py-20 sm:px-12 py-4 px-4 lg:py-2 `;

const FormContainer = styled.div`
  ${tw`p-4 sm:p-12 md:p-10  text-white rounded-lg  w-full`}
  form {
    ${tw`mt-2 grid grid-cols-1 justify-center w-full`}
  }
  h2 {
    ${tw`text-xl  sm:text-3xl font-bold`}
  }
  input,
  textarea {
    ${tw`w-full bg-transparent text-gray-100 text-base font-medium tracking-wide
     border-b-2 py-2 text-gray-100 focus:border-blue-400 focus:outline-none transition duration-200`};

    ::placeholder {
      ${tw`text-gray-500`}
    }
  }
`;

const TwoColumn = tw.div`flex gap-2 sm:flex-row  flex-col `;
const InputContainer = tw.div`relative py-5 sm:mt-6 mt-2 grid grid-cols-1 w-full`;
const Label = tw.label`absolute top-0 left-0 tracking-wide font-semibold text-sm`;
const Input = tw.input`w-full`;
const TextArea = tw.textarea`h-24 sm:h-full resize-none`;
const SubmitButton = tw.button`w-full sm:w-32 mt-6 py-3 bg-white text-black rounded-full font-bold tracking-wide shadow-lg uppercase text-sm transition duration-300 transform focus:outline-none  hover:bg-white hover:text-black focus:-translate-y-px focus:shadow-xl`;
const Err = tw.p`text-xs text-red-500 mt-2`;

const EditProfile = ({ editAccount, profile, setModalIsOpen }) => {
  // const defaultSrc = 'http://www.gravatar.com/avatar/?d=mp';

  // const defaultSrc1 = 'http://www.gravatar.com/avatar/?d=mp';

  // const [avatar, setAvatar] = useFileUpload();

  // const [loaded, setLoaded] = useState(false);
  return (
    <Container>
      <Content>
        <FormContainer>
          <div tw="mx-auto max-w-4xl">
            <h2>Edit Profile</h2>
            <Formik
              enableReinitialize
              initialValues={{
                name: profile?.name,
                email: profile?.email,
                bio: profile?.bio,
                address: profile?.address,
                username: profile?.username,
              }}
              onSubmit={async (state) => {
                await editAccount(state);
                setModalIsOpen(false);
                swal({
                  title: 'Success!',
                  text: 'Profile update successfully!',
                  icon: 'success',
                  button: 'Contiune',
                });
              }}
              validationSchema={Yup.object({
                name: Yup.string().required('Please fill in your name'),
                email: Yup.string().required('Please fill in your email'),
                bio: Yup.string().required('Please fill in your message'),
                address: Yup.string().required('Please fill in your address'),
                username: Yup.string().required('Please fill in your username'),
              })}
            >
              {(formik) => (
                <form className="grid  grid-cols-1 justify-items-center gap-2 " onSubmit={formik.handleSubmit}>
                  <TwoColumn>
                    <InputContainer>
                      <Label htmlFor="name">Your Name</Label>

                      <Input
                        id="name"
                        type="text"
                        name="name"
                        placeholder="E.g. John Doe"
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        {...formik.getFieldProps('name')}
                      />
                      {formik.touched.name && formik.errors.name ? <Err>{formik.errors.name}</Err> : null}
                    </InputContainer>

                    <InputContainer>
                      <Label htmlFor="username">Your username</Label>

                      <Input
                        id="username"
                        type="text"
                        username="username"
                        placeholder="E.g. JohnDoe"
                        value={formik.values.username}
                        onChange={formik.handleChange}
                        {...formik.getFieldProps('username')}
                      />
                      {formik.touched.username && formik.errors.username ? <Err>{formik.errors.username}</Err> : null}
                    </InputContainer>
                  </TwoColumn>
                  <InputContainer>
                    <Label htmlFor="email-input">Your Email Address</Label>
                    <Input
                      id="email-input"
                      type="email"
                      name="email"
                      placeholder="E.g. john@mail.com"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps('email')}
                    />
                    {formik.touched.email && formik.errors.email ? <Err>{formik.errors.email}</Err> : null}
                  </InputContainer>

                  <InputContainer tw="flex-1">
                    <Label htmlFor="message">Your Message</Label>
                    <TextArea
                      id="message"
                      name="bio"
                      placeholder="E.g. Details about yourself"
                      value={formik.values.message}
                      onChange={formik.handleChange}
                      {...formik.getFieldProps('bio')}
                    />
                    {formik.touched.message && formik.errors.message ? <Err>{formik.errors.message}</Err> : null}
                  </InputContainer>
                  <SubmitButton type="submit" value="Submit">
                    Submit
                  </SubmitButton>
                </form>
              )}
            </Formik>
            {/* <TwoColumns>
              <Div>
                <Image src={avatar?.source || defaultSrc} alt="profile" />
                <UploadButton onClick={() => setAvatar()}>Upload Avatar</UploadButton>
              </Div>
              <Div>
                <Image src={Loaded?.source || defaultSrc1} alt="cover" />
                <UploadButton onClick={() => setCover()}>Upload Cover</UploadButton>
              </Div>
            </TwoColumns> */}
          </div>
        </FormContainer>
      </Content>
    </Container>
  );
};

export default EditProfile;
