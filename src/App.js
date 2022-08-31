import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import MovieRow from './components/MovieRow';
import Iframe from './components/Iframe';

function App() {
  const [titleInput, setTitleInput] = useState("")
  const [imageInput, setImageInput] = useState("")
  const [iframe, setIframe] = useState();
  //  אנחנו רוצים לדלחוף למערך הישן כל פעם אובייקט חדש עם שתי ערכים שאפשר לשנות ואז בסוף בגלל שיש לנו מאפ אז הוא יעבור על הכל וידפיס לנו
  const addNewMovie = () => {
    // יצרתי העתק של המערך הישן
    const newMovieArray = [...moviesArray]
    // אני דוחף את אובייקט לתוך המערך
    newMovieArray.push({
      movieTitle: titleInput,
      img: imageInput,
      iframe: iframe,
    })
    setMoviesArray(newMovieArray)
  }


  // מערך המאפ מדפיס אותו כל פעם
  const [isOpen, setIsOpen] = useState(false)
  const [moviesArray, setMoviesArray] = useState([{
    movieTitle: "lion-king",
    img: "https://www.jenmansafaris.com/wp-content/uploads/2018/04/37069384-lion-king-pictures.jpg"
  },
  {
    movieTitle: "shrek",
    img: "https://play-lh.googleusercontent.com/7APInWaw6_71QDXRmfoBK72mZ812FqQd6pUuoa5HcqXEGi0_lN-E6_3aTUygItE0gwk=w240-h480-rw"
  },
  {
    movieTitle: "harrypotter",
    img: "https://m.media-amazon.com/images/M/MV5BMzkyZGFlOWQtZjFlMi00N2YwLWE2OWQtYTgxY2NkNmM1NjMwXkEyXkFqcGdeQXVyNjY1NTM1MzA@._V1_FMjpg_UX1000_.jpg"
  },
  ])




  return (
    <div className="App">
      <h1>my favorite movie</h1>
      {/* פונקציה שהופכת את הסטייט להפך שלה ברגע שלוחצים על הפכתור */}
      <button onClick={() => setIsOpen(!isOpen)}>add new movie</button>
      {
        isOpen ? (
          <div>
            <input type="text" placeholder='title' onChange={(e) => setTitleInput(e.target.value)}></input>
            <input type="text" placeholder='image' onChange={(e) => setImageInput(e.target.value)}></input>
            <input type="text" placeholder='trailer-iframe' onChange={(e) => setIframe(e.target.value)}></input>
            <button onClick={() => addNewMovie()}>save</button>
          </div>) : (<div></div>)}
      <table>
        <tr>
          <th>image</th>
          <th>title</th>
          <th>rating</th>
        </tr>
        {moviesArray.map((movie, index) => {
          return (
            <MovieRow movieTitle={movie.movieTitle} img={movie.img}  ></MovieRow>

          );

        }

        )
        }
      </table>

      <Iframe iframe={iframe}></Iframe>

    </div >
  );
}

export default App;
