import React, {Component} from 'react';

import {Posts} from "./components/PostsComponent/Posts";
import {Comments} from "./components/CommentsComponent/Comments";




class App extends Component {
  render() {
    return (
        <div>
          <Posts/>
            <Comments/>

        </div>
    );
  }
}

export default App;