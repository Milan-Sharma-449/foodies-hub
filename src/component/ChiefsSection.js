import ChiefCard from "./ChiefCard"
import IMG1 from '../img/top-chiefs/img_1.jpg'
import IMG2 from '../img/top-chiefs/img_2.jpg'
import IMG3 from '../img/top-chiefs/img_3.jpg'
import IMG4 from '../img/top-chiefs/img_4.jpg'
import IMG5 from '../img/top-chiefs/img_5.jpg'
import IMG6 from '../img/top-chiefs/img_6.jpg'

export default function ChiefsSection(){
    const chiefs = [
        {
            name: "Juan Carlos",
            img: IMG1,
            recipesCount: "10",
            cuisine: "Mexican",
        },
        {
            name: "John Doe",
            img: IMG2,
            recipesCount: "05",
            cuisine: "Japanese",
        },
        {
            name: "Erich Maria",
            img: IMG3,
            recipesCount: "13",
            cuisine: "Italian",
        },
        {
            name: "Chris Brown",
            img: IMG4,
            recipesCount: "08",
            cuisine: "American"
        },
        {
            name: "Blake Lively",
            img: IMG5,
            recipesCount: "09",
            cuisine: "French"
        },
        {
            name: "Ben Affleck",
            img: IMG6,
            recipesCount: "04",
            cuisine: "Indian"
        }
    ]
    return (
        <div className="section chiefs">
            <h1 className="title">Our Top Chiefs</h1>
            <div className="top-chiefs-container">
                {/* <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard />
                <ChiefCard /> */}
                { chiefs.map(chief => <ChiefCard key={chief.name} chief={chief} />) }
            </div>
        </div>
    )
}