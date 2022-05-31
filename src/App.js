import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Movies from './components/Movies';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Movies />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
