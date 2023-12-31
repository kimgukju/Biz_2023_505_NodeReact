import { NavLink } from "react-router-dom";
import dImage from "../assets/default.png";

const BucketItem = ({ item }) => {
  return (
    <li>
      <NavLink to={`content/${item.id}`}>
        <img src={item.img_src || dImage} alt="" width="30px" height="30px" />
        <span>{item.bucket}</span>
      </NavLink>
    </li>
  );
};
export default BucketItem;
