import './App.css';
import Header from './components/Header';
import Mari from './components/Mari';

var rootStyle = {
  background: '#131924',
  color: '#131924',
  height: '1000vh'
}

function App() {
  return (
    <div style={rootStyle}>
      <Header />
      <Mari />
    </div>
  );
}

export default App;
