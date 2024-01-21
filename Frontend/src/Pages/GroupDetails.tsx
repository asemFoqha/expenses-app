import { useParams } from "react-router-dom";

const GroupDetails = () => {
  const { id } = useParams();
  return <div>hi {id}</div>;
};
export default GroupDetails;
