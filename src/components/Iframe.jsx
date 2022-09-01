const Iframe = (props) => {
    return (
        <div>
            {props.open ? (<div><button onClick={() => props.setOpen(false)}>x</button>
                <p><iframe width="560" height="315" src={`https://www.youtube.com/embed/${props.trailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
            </div >) : (<div></div>)}
        </div>
    )
}
export default Iframe