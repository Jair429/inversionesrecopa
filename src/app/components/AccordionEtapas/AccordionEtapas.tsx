'use client'
import { useState } from "react"
import Image from 'next/image';

interface Props {
  title:string
  image:string
  size: number
}

export const AccordionEtapas = (props: Props) => {

  const [isActive, setIsActive] = useState(false)

  return (
    <div className="accordion-item ">
      <div className="flex justify-between py-2 px-2 border-gray-300 border-b-1  text-gray-400 font-bold " onClick={() => setIsActive(!isActive)}>
        <div className="uppercase text-sm md:text-base" >{props.title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content bg-gray-50 p-2 flex justify-center">
        <Image src={`/assets/distribucion/${props.image}.png`} alt={props.title} width={props.size} height={props.size}/>
        </div>}
    </div>
  )
}
