import React from "react";
import "./Home-page.styles.scss";
// import MenuItem from "../../components/Menu-item/Menuitem.component";
import { Directory } from "../../components/Directory/Directory.component";
import { HeaderComponent } from "../../components/HeaderComponent/HeaderComponent";

const HomePage = (props) => (
  // {console.log(props)}
  <div className="homepage">
    <Directory></Directory>
  </div>
);

export default HomePage;
