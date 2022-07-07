import "./style.css";

import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";



const Fav =({setFav,fav})=>{
  const [love, setLove] = useState("");

    const gitFav=()=>{
        const obj= localStorage.getItem("fav");
        JSON.parse(obj);
        setLove( JSON.parse(obj))
        console.log( JSON.parse(obj));
         
    }

    useEffect(() => {
        gitFav();
      }, []);

      console.log(love);
    return(
        <div>
          <h1 className="h12">Favorites Movies</h1>
    <div className="ss1">

           {
            fav?fav.map((e)=>{
              return(
                <div className="mm">
                
                <div className="poster">
                  <Link className="Link" to={`/more/${e.id}`}>
                    <img
                      className="imgg1"
                      src={`http://image.tmdb.org/t/p/w500/${e.poster_path}`}
                    />
                  </Link>
                </div>
                <div>
                  <h6 className="title">{e.original_title}</h6>

                  
                  <p className="p">{e.overview}</p>
                  <div className="span">
                  <span className="p1">{e.release_date}</span>
                  <span className="p1">{e.popularity}Votes</span>
                  </div>
                  <button  className="delete" onClick={()=>{
                 const d=fav.filter((element)=>{
                  return element.id !==e.id
                 })
                 setFav(d)
                }}>Remove From Favorites</button>
                </div>
               
              </div>
        

              )
            }):<></>
           }
           </div>
        </div>
    )
}
export default Fav;
