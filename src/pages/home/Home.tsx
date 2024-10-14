import { useState } from 'react';
import { HomeProps } from '../../props/HomeProps';
import CurseList from "../components/CurseList";
import FilterCurse from "../components/FilterCurse";

function Home({ curses, removeCurse }: HomeProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  const filteredCurses = curses.filter(curse =>
    curse.titulo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <FilterCurse onSearchChange={handleSearchChange} />
      <CurseList curses={filteredCurses} removeCurse={removeCurse} />
    </div>
  );
}
export default Home;
