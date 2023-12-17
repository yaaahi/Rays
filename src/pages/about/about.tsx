import "./aboutStyle.css"
import portrait from "../../assets/ryosuke_portrait2.jpg"
import { useEffect, useRef, useState } from "react"

export function About(){

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
        <div className={isInView ? "about-container visible" : "about-container"} ref={target} id="about">
            <div className="sentence">
                <h1>About Us</h1>
                <p>
                    <div>
                        高校生の時から、会社を起こして何か挑戦したいという夢がありました。大学に入り、実践的な学びを得ることで、自分の中での起業に対するビジョンが固まり、本格的に考え始めました。学生起業ということもあり、多くの壁がありましたが、一つ一つ乗り越えて活動できており、現在、新規事業の開拓や、既存のHPビジネスを通してさまざまな学びを得て成長し続けています。Rays株式会社は、私の仲間と共に、残りの学生生活において様々なことに挑戦するプラットフォームです。
                    </div>
                </p>
            </div>

            <div className="img-container">
                <img src={portrait} alt="顔写真" />
            </div>
        </div>
    )
}