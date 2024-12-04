import React, { useEffect, useState, useMemo } from 'react';
import'./Movie.css';
function Movie() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
   fetch('/Movie.json')
     .then(response => response.json())
     .then(setData)
     .catch(console.error);
 }, []);
 
  const filteredData = useMemo(() => {
    return data.filter((item) =>
      item.Title.toLowerCase().includes(search.toLowerCase())
    );
  }, [data, search]);
  return (
    <div>
       <center>
        <h1>Movie Search Application</h1>
          <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search for a movie"/>
          <div className='row'>
            <div className='col-4'>
          {filteredData.map((item) => (
           <div> <li key={item.Title}>
             <img src={item.image} alt={item.Title} className='img'/>
              <h2>Name:{item.Title}</h2>
              <h3>Release Year:{item.Year}</h3>
            </li>
            </div>
          ))}
          </div>
          </div>
          </center>
    </div>
  );
}
export default Movie;

  