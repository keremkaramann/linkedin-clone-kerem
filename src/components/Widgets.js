import { Avatar } from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import "./css/Widgets.css";

function Widget() {
  const newsArticle = (heading, subtitle) => {
    <div className="widgets_people">
      <div className="avatar_place">
        <Avatar />
      </div>
      <div className="widget_right">
        <h4>{heading} </h4>
        <p>{subtitle} </p>
      </div>
    </div>;
  };
  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>Add to your feed</h2>
        <InfoIcon />
      </div>
      {newsArticle("Javascript", "e-learning")}
      {newsArticle("React", "e-learning")}
      {newsArticle("Redux", "e-learning")}
    </div>
  );
}
export default Widget;
