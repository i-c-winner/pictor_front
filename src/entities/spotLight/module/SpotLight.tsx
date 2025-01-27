import '../styles/spotLight.scss'
import {useEffect, useRef, useState} from "react";
import {Circle} from "./Circle.tsx";

function Spotlight() {
  const refBox = useRef<HTMLDivElement | null>(null)
  const [position, setPosition] = useState<{ x: number, y: number }>({x: 0, y: 0})
  useEffect(() => {
    refBox.current?.addEventListener("mousemove", (event) => {
      setPosition({x: event.clientX, y: event.clientY})
    })
    return () => {
      refBox.current?.removeEventListener("mousemove", () => {
      })
    }
  }, [])
  return (
    <div ref={refBox} className="wrapper">
      <Circle position={position}/>
    </div>
  );
}

export {Spotlight};