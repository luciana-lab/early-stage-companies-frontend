// import logo from './logo.svg';
import './App.css';
// import Pages from './components/Pages';
import Navbar from './components/Navbar';
import CompanyContainer from './containers/CompaniesContainer'

function App() {
  return (
    <div className="App">
      Hello
      <Navbar />
      <CompanyContainer />
      {/* <Pages /> */}
    </div>
  );
}

export default App;
