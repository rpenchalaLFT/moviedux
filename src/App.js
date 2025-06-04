
import './App.css';
import './styles.css';

import Header from './components/Header';
import Footer from './components/Footer';
import MovieGrid from './components/MovieGrid';

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header></Header>
      </div>
      <div>
        <MovieGrid />
      </div>  
       <Footer></Footer>
    </div>
  );
}

export default App;
