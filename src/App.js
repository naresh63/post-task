import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';


function App() {

  return (
    <div className="App">
     <div className='layoutContainer'> 
      <div className='sidebar'> <Sidebar/> </div>
      <div className='content'> content </div>

     </div>
    
    </div>
  );
}

export default App;
