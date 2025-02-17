import { useState } from 'react';

import { SideBar } from './components/SideBar';
import { Content, MovieProps } from './components/Content';

import './styles/global.scss';

export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreId={selectedGenreId} onClick={handleClickButton} />
      <Content selectedGenreId={selectedGenreId} />
    </div>
  )
}