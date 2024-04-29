import Banner from "./Banner";
import Category from "./Category";
import FamilySection from "./FamilySection";
import FeatureSection from "./FeatureSection";
import HomeCraft from "./HomeCraft";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeCraft></HomeCraft>
            <Category></Category>
            <FamilySection></FamilySection>
            <FeatureSection></FeatureSection>
        </div>
    );
};

export default Home;