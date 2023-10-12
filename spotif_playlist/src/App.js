import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/header'
import SearchBar from './Components/SearchBar/SearchBar';
import Cards from './Components/Track/cards'
import Player from './Components/Player/Player'


function App() {
  return (
    <div className='background'>
      <div>
        <Header />
        <SearchBar />
    
     </div>
    <div>

      <Cards 
      title='Tiny dancer'
      image='https://th.bing.com/th/id/OIP.DNIqI2Bj2kxYzhGgCnPKmwAAAA?pid=ImgDet&rs=1'/>
    </div>
    </div>
   
  );
}

export default App;
