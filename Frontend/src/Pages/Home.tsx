import { useEffect, useState } from "react";
import { Group, getGroups } from "../services/homeService/groupService";
import Card from "../components/Home/Card";
import AddGroupModal from "../components/AddGroupModal";

const Home = () => {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    try {
      getGroups().then((res) => {
        if (res.data.data.length > 0) setGroups(res.data.data);
      });
    } catch (ex) {
      console.log(ex);
    }
  }, []);

  return (
    <div className="home-wrapper">
      <div className="home__header">
        <span>
          <strong>Groups</strong>
        </span>
        <AddGroupModal setGroups={setGroups} groups={groups} />
      </div>
      <div className="home">
        {groups.map((group) => (
          <Card key={group._id} group={group} />
        ))}
      </div>
    </div>
  );
};
export default Home;
