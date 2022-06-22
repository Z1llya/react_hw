
import './App.css';
import Character from "./components/Character";

function App() {


  return (
    <div >
        {
           <Character
               id={'1'}
               name={'Rick Sanchez'}
               status ={'Alive'}
               species={'Human'}
               gender ={'male'}
               image = {"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}

           />
        }


    </div>
  );
}

export default App;
