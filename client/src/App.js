import React, { useState } from 'react';
import {Route} from "react-router-dom";
import SavedList from './Movies/SavedList';
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";


const App = () => {
  const [savedList, setSavedList] = useState( [] );
// eslint-disable-next-line 
  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path = "/" component={MovieList}/>
      <Route exact path = "/movies/:id" render={(props)=> <Movie {...props}/>}/>
      {/* component={Movie}/> */}
      {/* <div>Replace this Div with your Routes</div> */}
    </div>
  );
};
export default App;