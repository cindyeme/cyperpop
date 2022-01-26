import CreateContent from 'containers/createContent';
import { PageMotion } from 'layout/PageMotion';

export default function Create() {
  return (
    <PageMotion>
      <CreateContent />
    </PageMotion>
  );
}