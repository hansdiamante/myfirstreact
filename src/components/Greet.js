const Greet = (props) => {
    return (
            <div>
            <h2>Hello {props.name} aka {props.nickname}</h2> {props.children}
            </div>
           )
        }

export default Greet