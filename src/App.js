import { BrowserRouter as Router, Route} from 'react-router-dom';
import { Provider } from 'react-redux';
import LoginView from './components/LoginView';
import NoteController from './components/NoteController';
import store from './redux/store';

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Route path='/login' component={LoginView}/>
        <Route path='/notes' component={NoteController}/>
      </Provider>
    </Router>
  );
}

export default App;
