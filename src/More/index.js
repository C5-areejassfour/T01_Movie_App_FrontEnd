import "./style.css";

import axios from "axios";

import { useParams, useNavigate } from "react-router-dom";

import React, { useEffect, useState } from "react";

import { Button } from "react-bootstrap";

const More = ({setFav , fav}) => {
  const history = useNavigate();

  const { id } = useParams();

  const [more, setMore] = useState("");

  const GitAllMovesId = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?language=en-US&api_key=1bfa430aada4409bfa6a3c5528128e8a`
      )
      .then((result) => {
        setMore(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 
  useEffect(() => {
    GitAllMovesId();
  }, []);

  console.log(more);

  return (
    <div className="div0">
      <h1 className="he1">Movie Details</h1>
      <div className="div1">
        <div className="div2">
          <img
            className="div_img"
            src={`http://image.tmdb.org/t/p/w500/${more.poster_path}`}
          />
        </div>
        <div className="div3">
          <h6>{more.original_title}</h6> <p>{more.overview}</p>
          <div className="bb0">
            <Button
              variant="primary"
              className="bb1"
              onClick={(e) => {
                history("/");
              }}
            >
              Back To Home{" "}
            </Button>{" "}
            <Button
              variant="warning"
              className="bb1"
              onClick={(e) => {
                history("/fav");
              }}
            >
              Go To Favorites
            </Button>{" "}
            <Button
              variant="primary"
              className="bb11"
              onClick={(e) => {
                setFav([...fav,more])
               if(localStorage.getItem("fav")){
                localStorage.setItem("fav", JSON.stringify([...JSON.parse(localStorage.getItem("fav")),more]));

               }else{
                localStorage.setItem("fav",JSON.stringify([more]))
               }

              }}
            >
              Added to Favorites
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};
export default More;
