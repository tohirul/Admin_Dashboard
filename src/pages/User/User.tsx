import { singleUser } from "../../Data";
import SingleUser from "../../components/SingleUser/SingleUser";
import "./User.scss";

const User = () => {
  //Fetch data and send to Single Component

  return (
    <div className="user">
      <SingleUser {...singleUser} />
    </div>
  );
};

export default User;
