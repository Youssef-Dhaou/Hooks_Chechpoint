import './App.css';
import MovieList from './Component/MovieList/MovieList';
import {tabldata} from './data.js'
import AddMovie from './Component/AddMovies/AddMovie';
import { useState } from 'react';
import Filter from './Component/Filter/Filter';

function App() {
  
  const [tabldataM, setTabldataM]= useState(tabldata)
  const addCard =(newMov)=>{newMov.title? setTabldataM([...tabldataM, {...newMov, id:tabldataM.length}]):alert("The title is required")}

  const [searchTitle, setSeachTitle]= useState("")
  const [rate, setRate]=useState(0)
  

  const filterMovies = (movie)=>{
    setSeachTitle(movie)
  }
  const rateFilter=(newRate)=>{
    setRate(newRate)
  }

   const delMovie=(delID)=>{setTabldataM(tabldataM.filter((el)=>el.id!==delID))}

  return (
    <div className="App"> 
    <Filter  rateFilter={rateFilter} filterMovies={filterMovies}/> 
    <AddMovie addCard={addCard}/>
    <MovieList delMovie={delMovie} rate={rate} searchTitle={searchTitle} tabldata={tabldataM}/>
    </div>
  );
}

export default App;
