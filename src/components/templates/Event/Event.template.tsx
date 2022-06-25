import { useParams } from 'react-router-dom';

import { Header, LessonContent } from '../../ui/molecules';
import { Sidebar } from '../../ui/organisms';

export const EventTemplate = () => {
  const { slug } = useParams<{ slug: string }>();

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        {slug ? <LessonContent slug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
};
