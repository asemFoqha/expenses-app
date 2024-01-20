import { Group } from "../../services/homeService/groupService";

const Card = ({ group }: { group: Group }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{group.title}</h5>

        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
export default Card;
