import './App.css';
import StyleContext from './StyleContext';
import Child1 from './components/Child1';
import Child2 from './components/Child2';

function App() {
  const grandChild1Style = {
    color:'red',
    backgroundColor:'lightgray'

  }

  const grandChild2Style = {
    color:'orange',
    backgroundColor:'teal'
  }

  return (
    <StyleContext.Provider value={grandChild1Style}>
      <div className="App">
        <h1 style={{color:'purple'}}>Hello World</h1>
        <Child1/>
        <Child2 style={grandChild2Style}/>
      </div>
    </StyleContext.Provider>
  );
}

export default App;
