import CustomImage from "./CustomImage"
import IMG1 from '../img/gallery/img_1.jpg'
import IMG2 from '../img/gallery/img_2.jpg'
import IMG3 from '../img/gallery/img_3.jpg'
import IMG4 from '../img/gallery/img_4.jpg'
import IMG5 from '../img/gallery/img_5.jpg'
import IMG6 from '../img/gallery/img_6.jpg'
import IMG7 from '../img/gallery/img_7.jpg'
import IMG8 from '../img/gallery/img_8.jpg'
import IMG9 from '../img/gallery/img_9.jpg'

export default function HeroSection(){
    const images = [
        IMG1,IMG2,IMG3,IMG4,IMG5,IMG6,IMG7,IMG8,IMG9
    ]
    return (
        <div className="section hero">
            <div className="col typography">
                <h1 className="title">What Are We About</h1>
                <p className="info">FoodiesHub is a place where you can please your soul and tummy with delicious food recepies of all cuisine. And our service is absolutely free. So start exploring now.</p>
                <button className="btn">explore now</button>
            </div>
            <div className="col gallery">
                { images.map((src, index) => (
                    <CustomImage key={index} imgSrc={src} pt={"90%"} />
                )) }
            </div>
        </div>
    )
}