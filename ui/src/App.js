import './App.css';
import { Route } from 'react-router-dom';
import { Home } from './Pages/Home/Home';
import { Chats } from './Pages/Chats/Chats';

function App() {
  return (
    <div className="App">
      <Route path='/' component={Home} exact></Route>
      <Route path='/chats' component={Chats}></Route>
    </div>
  );
}

export default App;
