// import logo from './logo.svg';
import './App.css';
import AssignmentMarks from './components/AssignmentMarks/AssignmentMarks';
import NavBar from './components/NavBar/NavBar';
import Pricing from './components/Pricing/Pricing';

function App() {
  return (
    <div className="App mb-5">
      <NavBar></NavBar>
      <h1 className='text-4xl font-bold mt-5'>------This is Test Header-----</h1>
      <p>This is a testing paragraph</p>
      <Pricing></Pricing>
      <AssignmentMarks></AssignmentMarks>
    </div>
  );
}

export default App;
