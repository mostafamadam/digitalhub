import './App.css';
import Landing from './components/landing/Landing';
import NavBar from './components/navBar/NavBar';
import SideMenu from './components/sideMenu/SideMenu';
import { Layout } from 'antd';


function App() {
  return (
    <div className="App">
      <Layout>
        <Layout>
          <NavBar />
          <Layout style={{background:'#F4F6F9'}}>
            <SideMenu />
            <Landing />
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
}

export default App;
