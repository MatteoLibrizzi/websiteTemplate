import { InfoWithImages } from "../../components/infoWithImages";
import { PagesPresentation } from "../../components/pagesPresentation";
import { PersonalIntroduction } from "../../components/personalIntroduction";
import "./styles.css";

export const LandingPage = () => {
  return (
    <div className="landing-page">
      <div className="section">
        <PersonalIntroduction />
      </div>
      <div className="section">
        <InfoWithImages />
      </div>
      <div className="section">
        <PagesPresentation />
      </div>
    </div>
  );
};
