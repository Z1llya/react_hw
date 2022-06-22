
import './App.css';
import Character from "./components/Character";

function App() {


  return (
    <div >
      {
        <Character
            id={'1'}
            name={'Rick Sanchez'}
            status={'Alive'}
            species={'Human'}
            gender={'male'}
            image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}

        />
      }
      {
        <Character
            id={'2'}
            name={'Morty Smith'}
            status={'Alive'}
            species={'Human'}
            gender={'male'}
            image={"https://rickandmortyapi.com/api/character/avatar/2.jpeg"}

        />
      }
      {
        <Character
            id={'3'}
            name={'Summer Smith'}
            status={'Alive'}
            species={'Human'}
            gender={'female'}
            image={"https://rickandmortyapi.com/api/character/avatar/3.jpeg"}

        />
      }
      {
        <Character
            id={'4'}
            name={'Beth Smith'}
            status={'Alive'}
            species={'Human'}
            gender={'female'}
            image={"https://rickandmortyapi.com/api/character/avatar/4.jpeg"}

        />
      }





    </div>
  );
}

export default App;
