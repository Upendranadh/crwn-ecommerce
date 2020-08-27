import React from "react";
import "./Home-page.styles.scss";
// import MenuItem from "../../components/Menu-item/Menuitem.component";
import { Directory } from "../../components/Directory/Directory.component";

const HomePage = (props) => (
  <div className="homepage">
    {console.log(props)}
    <Directory></Directory>
  </div>
);

export default HomePage;
