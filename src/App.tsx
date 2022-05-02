import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Mari from './components/Mari';

var rootStyle = {
  background: '#131924',
  color: '#131924',
  height: '100%'
}

function App() {
  return (
    <div style={rootStyle}>
      <Header />
      <Mari />
      <Footer />
    </div>
  );
}

export default App;
