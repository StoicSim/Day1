
import './App.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import SideNav from './SideNav';
function App() {
  return (
    <div className="App">

      <Header title="Header" />
      <Footer title="Footer" />

      <MainContent title="MainContent" />
      <SideNav title="SideNav" />

    </div>
  );
}

export default App;
