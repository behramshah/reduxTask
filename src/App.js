import { Routes, Route } from 'react-router-dom';
import List from './components/list/List';
import Favorites from './components/favorites/Favorites';

function App() {
  return (
    <Routes>
      <Route path='/' element={<List/>}/>
      <Route index path='favorites' element={<Favorites/>}/>
    </Routes>
  );
}

export default App;
