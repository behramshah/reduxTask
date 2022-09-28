import { Routes, Route } from 'react-router-dom';
import List from './components/list/List';
import Favorites from './components/favorites/Favorites';
import reducer from './redux/reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer)

function App() {
  return (
    <Provider store={store}>
      <Routes>
        <Route path='/' element={<List/>}/>
        <Route index path='favorites' element={<Favorites/>}/>
      </Routes>
    </Provider>
  );
}

export default App;
