import PreviousSearches from "../component/PreviousSearches"
import RecipeCard from "../component/RecipeCard"
import IMG1 from '../img/gallery/img_1.jpg'
import IMG2 from '../img/gallery/img_2.jpg'
import IMG3 from '../img/gallery/img_3.jpg'
import IMG4 from '../img/gallery/img_4.jpg'
import IMG5 from '../img/gallery/img_5.jpg'
import IMG6 from '../img/gallery/img_6.jpg'
import IMG7 from '../img/gallery/img_7.jpg'
import IMG8 from '../img/gallery/img_8.jpg'
import IMG9 from '../img/gallery/img_9.jpg'
import IMG10 from '../img/gallery/img_10.jpg'
import CIMG1 from '../img/top-chiefs/img_1.jpg'
import CIMG2 from '../img/top-chiefs/img_2.jpg'
import CIMG3 from '../img/top-chiefs/img_3.jpg'
import CIMG4 from '../img/top-chiefs/img_4.jpg'
import CIMG5 from '../img/top-chiefs/img_5.jpg'
import CIMG6 from '../img/top-chiefs/img_6.jpg'

export default function Recipes(){
    const recipes = [
        {
            title: "Chicken Pan Pizza",
            image: IMG1,
            authorImg: CIMG1,
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: IMG4,
            authorImg: CIMG2,
        },
        {
            title: "American Cheese Burger",
            image: IMG5,
            authorImg: CIMG3,
        },
        {
            title: "Mutton Biriyani",
            image: IMG6,
            authorImg: CIMG5,
        },
        {
            title: "Japanese Sushi",
            image: IMG10,
            authorImg: CIMG6,
        },
        {
            title: "Chicken Pan Pizza",
            image: IMG1,
            authorImg: CIMG1,
        }, 
        {
            title: "Spaghetti and Meatballs",
            image: IMG4,
            authorImg: CIMG2,
        },
        {
            title: "American Cheese Burger",
            image: IMG5,
            authorImg: CIMG3,
        },
        {
            title: "Mutton Biriyani",
            image: IMG6,
            authorImg: CIMG5,
        },
        {
            title: "Japanese Sushi",
            image: IMG10,
            authorImg: CIMG6,
        },
        {
            title: "American Cheese Burger",
            image: IMG5,
            authorImg: CIMG3,
        },
        {
            title: "Mutton Biriyani",
            image: IMG6,
            authorImg: CIMG5,
        }
    ].sort(() => Math.random() - 0.5)

    return (
        <div>
            <PreviousSearches />
            <div className="recipes-container">
                {/* <RecipeCard /> */}
                {recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
            </div>
        </div>
    )
}