
import { Provider } from 'react-redux';
import './App.css';
import {store} from './features/map/components/VesselsModel'
import UpdateMap from './features/map/components/UpdateMap'


function App() {
  return (
    < Provider store={store}>
      <UpdateMap/>
    </Provider>
      
  );
}

export default App;
