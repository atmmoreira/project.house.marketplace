import { Link } from "react-router-dom";
import rentCategoryImage from "../assets/jpg/rentCategoryImage.jpg";
import sellCategoryImage from "../assets/jpg/sellCategoryImage.jpg";
import Slider from "../components/Slider";


function Explore() { 
  return (
    <div className="explore">
      <header>
        <p className="pageHeader">Explore</p>
      </header>
      <main>
        {/* Slider */}
        <Slider />

        <p className="exploreCategoryHeading">Categories</p>
        <div className="exploreCategories">
          <Link to="/category/rent">
            <img className="exploreCategoryImg" src={rentCategoryImage} alt="rent" />
            <p className="exploreCateroryName">Places for rent</p>
          </Link>
          <Link to="/category/sale">
            <img className="exploreCategoryImg" src={sellCategoryImage} alt="sell" />
            <p className="exploreCateroryName">Places for sell</p>
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Explore;
