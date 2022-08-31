import { useState } from "react"

// את מקבלת ערכים
const MovieRow = (props) => {

    const [counter, setCounter] = useState(0)
    const [trailer, setTrailer] = useState(props.iframe)

    return (
        <tr>

            <td><img height="100px" width="100px" src={props.img} ></img></td>
            <td>{props.movieTitle}</td>
            <td>
                <button onClick={() => setCounter(counter + 1)}>add</button>
                <button onClick={() => setCounter(counter - 1)}>reduce</button>
                <span>{counter}</span>
            </td>
            <td> <button>❎</button></td>
        </tr >

    )
}

export default MovieRow