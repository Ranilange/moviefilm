import { useState } from "react"
import "./movierow.css"
// את מקבלת ערכים
const MovieRow = (props) => {
    const [closed, setClosed] = useState(true)
    const [counter, setCounter] = useState(0)
    // const [trailer, setTrailer] = useState("")

    return (
        <>
            {closed ? (<tr className="row">

                <td><img onClick={() => props.setOpen(true)} height="100px" width="100px" src={props.img} ></img></td>
                <td className="titlesection">{props.movieTitle}</td>
                <td>
                    <button onClick={() => setCounter(counter + 1)}>👍</button>
                    <span className="count">{counter}</span>
                    <button onClick={() => setCounter(counter - 1)}>👎</button>


                </td>
                <td onClick={() => setClosed(false)}> ❎</td>


            </tr >
            ) : (<div></div>)}
        </>

    )
}

export default MovieRow