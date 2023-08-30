import React, { useState } from "react";
import Title from "../../components/Title";
import mamut from "../../assets/images/mamut.jpg";
import {
  AiFillSmile,
  AiFillHeart,
  AiOutlineHeart,
  AiOutlineComment,
} from "react-icons/ai";

const LikeMyPhoto = () => {
  const [like, setLike] = useState(false);
  const [count, setCount] = useState(0);
  const toggleLike = () => {
    if (!like) {
      setLike(true);
      setCount(count+1);
    } else {
      setLike(false);
      setCount(count-1);
    }
  };

  return (
    <div className="container">
      <div className="image-container">
        <Title text="photo name: Mamut" classes="title" />
        <Title text={`Likes:${count}`} classes="title" />
        <div
          className="card card-dark m-auto"
          style={{
            width: 300,
            cursor: "pointer",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <div className="card-header fs-xl">
            <AiFillSmile className="mr-2" />
            <small>Mamut's Huj</small>
          </div>
          <img src={mamut} alt="mamut" style={{ height: "fit-content" }} onDoubleClick={toggleLike}/>
          <div
            className="card-footer fs-xl d-flex"
            style={{ justifyContent: "space-between" }}
          >
            <AiOutlineComment
              className="mr-2"
              style={{ fontSize: "1.5rem", fontWeight: "bolder" }}
            />
            {like ? (
              <AiFillHeart
                className="mr-2"
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "bolder",
                  color: "red",
                }}
                onClick={() => toggleLike()}
              />
            ) : (
              <AiOutlineHeart
                className="mr-2"
                style={{ fontSize: "1.5rem", fontWeight: "bolder" }}
                onClick={() => toggleLike()}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikeMyPhoto;
