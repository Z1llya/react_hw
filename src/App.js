import './App.css';

import {useForm} from "react-hook-form";

import {postUser} from "./services/users_api_services";



function App() {
  let {register, handleSubmit} = useForm()

  const submit = (obj)=>{
    postUser(obj).then(value => console.log(value));



  }


  return (
      <div>
        <form onSubmit={handleSubmit(submit)}>
          <input type="text" {...register('name')}/>
          <input type="text" {...register('body')}/>
          <button>create</button>
        </form>




      </div>
  );
}

export default App;