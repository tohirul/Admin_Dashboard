import { Link } from "react-router-dom";
// import { menu } from "../../Data";
import "./Menu.scss";
import useMenu from "../../Hooks/useMenu";
import { MenuItem } from "./Menu.types";

const Menu = () => {
  const [data] = useMenu();
  // console.log(data)
  return (
    <div className="menu">
      {data.map((item: MenuItem) => (
        <div className="item" key={item.id}>
          <span className="title">{item.title}</span>
          {item.listItems.map((listItem) => (
            <Link to={listItem.url} className="listItem" key={listItem.id}>
              <img src={listItem.icon} alt="" />
              <span className="listItemTitle">{listItem.title}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
