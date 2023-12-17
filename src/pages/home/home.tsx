import { useEffect, useRef, useState } from "react"
import {Link} from 'react-scroll'

import './homestyle.css'


export function Home(){

    const target = useRef<HTMLDivElement>(null)
    const [isInView,setIsInView] = useState(false)

    useEffect(() => {
        if(target.current === null){
            console.log("theres no elment inside targetRef...")
            return 
        }
        const observer = new IntersectionObserver((entries) => {
            setIsInView(entries[0].isIntersecting)
            
        })


        observer.observe(target.current!)

    },[isInView])

    const generateDirection = () => {
        
        const getRandInt = (max: number) =>{
            return Math.floor(Math.random() * max)
        }

        const randomNum = getRandInt(4)

        switch(randomNum){
            case 0:
                return "left"
            case 1:
                return "right"
            case 2:
                return "top"
            case 3:
                return "bottom"
        }
    }
    
    return(
        <>
            <div className={isInView ? `home-container visible ${generateDirection()}`: "home-container"} ref={target} id="home">
            
            
                <div className="hero-container" >
            
                <div className="bigTitle">
                        CONNECT TECH&LIFE
                    </div>
                    
                    <div className="briefExplain">
                        <span>
                        私達は、モダンな技術をより身近に感じてもらえるための橋渡し役となり、世の中にイノベーションを起こします。

                        </span>
                    </div>
                </div>

                <div className="navbtn-container">
                    <Link to='form' smooth={true} offset={0} duration={500}>
                        <span className="navbtn">
                            申し込みへ
                        </span>
                    </Link>
                </div>
            </div>
        </>
    )
}


