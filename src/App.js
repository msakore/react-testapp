import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      {/* <Greet name='Raj' lastName = 'Malhotra'>
        <p>This is Children components</p>
        </Greet>
      <Greet name='Mahesh' lastName = 'Sakore'>
      <button>Upload</button> </Greet>
      <Greet name='Pooja' lastName = 'Sakore'/>
      <Welcome name='Mahesh' lastName = 'Sakore'>
        <p id='child1'>This is Children1</p>
        <p id='child2'>This is Children2</p>
      </Welcome> */}
      {/* <Hello/> */}
      <Message> <h1>Thank you for subscribing</h1> </Message>

    </div>
  );
}

export default App;
