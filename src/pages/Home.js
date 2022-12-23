import HeroSection from "../component/HeroSection";
import ImproveSkills from "../component/ImproveSkills";
import QouteSection from "../component/QuoteSection";
import ChiefsSection from "../component/ChiefsSection";


export default function Home(){
    return (
        <div>
            <HeroSection />
            <ImproveSkills />
            <QouteSection />
            <ChiefsSection />
        </div>
    )
}