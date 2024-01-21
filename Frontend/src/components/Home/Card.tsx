import { Link } from "react-router-dom";
import { Group } from "../../services/homeService/groupService";

const Card = ({ group }: { group: Group }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{group.title}</h5>

        <Link to={group._id} className="btn btn-primary">
          Go
        </Link>
      </div>
    </div>
  );
};
export default Card;
