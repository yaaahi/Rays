
import { useEffect, useRef, useState } from "react"
import "./serviceStyle.css"

export function Service(){

    const target = useRef<HTMLDivElement>(null)
    const [isInView,setIsInView] = useState(false)

    useEffect(() => {
        if(target.current === null){
            console.log("theres no elment inside targetRef...")
            return 
        }
        console.log(isInView)
        const observer = new IntersectionObserver((entries) => {
            setIsInView(entries[0].isIntersecting)
            
        })


        observer.observe(target.current!)

    },[isInView])

    return(
        <div className={isInView ? "service-container visible" : "service-container"}  ref={target} id="service">
            Other services coming soon...
        </div>
    )
}