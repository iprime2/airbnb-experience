import './App.css';
import Navbar from './components/navbar';
import Main from './components/main'
import Cards from './components/cards'
import data from './data'

function App() {
  const cards = data.map(items =>{
      return(
        <Cards 
            key = {items.id}
            {...items}
      />
      )
    })
  return (
    <div className="App">
      <Navbar />
      <Main />
      <section className='cards-lists'>{cards}</section>
    </div>
  );
}

export default App;
