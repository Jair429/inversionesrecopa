'use client'
import { useState } from "react"

interface Props {
  title:string
  content:string
}

export const Accordion = (props: Props) => {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion-item ">
      <div className="flex justify-between py-2 px-2 border-gray-300 border-b-1  text-gray-400 font-bold " onClick={() => setIsActive(!isActive)}>
        <div className="uppercase" >{props.title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content bg-gray-50 p-2 ">{props.content}</div>}
    </div>
  )
}
