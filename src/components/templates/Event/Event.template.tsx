import { VideoPlayer } from '../../ui/atoms';
import { Header } from '../../ui/molecules';
import { Sidebar } from '../../ui/organisms';

export const EventTemplate = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex flex-1">
        <VideoPlayer />
        <Sidebar />
      </main>
    </div>
  );
};
