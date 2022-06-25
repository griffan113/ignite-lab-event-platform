import { Route, Routes } from 'react-router-dom';
import { EventTemplate } from '../components/templates';

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/event" element={<EventTemplate />} />
      <Route path="/event/lesson/:slug" element={<EventTemplate />} />
    </Routes>
  );
};
