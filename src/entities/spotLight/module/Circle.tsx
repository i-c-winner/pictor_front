import "../styles/spotLight.scss"

function Circle(props: {position: {x: number, y: number;}}) {
  return     <div
    className="circle"
    style={{
      left: props.position.x - 800,
      top: props.position.y - 800,
    }}
  />
}

export {Circle};