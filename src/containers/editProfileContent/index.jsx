import tw from 'twin.macro';
import EditForm from './editForm';
import EditHeader from './editHeader';

const Main = tw.main`pb-2 bg-gray-200`;
const Container = tw.div`pb-24 md:pt-16 pt-20`;
const Content = tw.div`max-w-6xl mx-auto px-4 lg:px-0`;

const EditProfileContent = () => (
  <Main>
    <EditHeader />
    <Container>
      <Content>
        <EditForm />
      </Content>
    </Container>
  </Main>
);

export default EditProfileContent;
