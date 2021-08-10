import { useEffect } from "react";
import { useState } from "react";
import { FC, memo } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { fetchGroups } from "../../api/groups";
import Input from "../../components/Input/Input";
import { useAppSelector } from "../../store";
import { HiSearch } from "react-icons/hi";
import { groupsActions } from "../../actions/groups.actions";

interface Props {
}

const Dashboard: FC<Props> = () => {
  const userFirstName = useAppSelector((state) => state.users.byId[state.auth.id!].first_name);

  const query = useAppSelector(state => state.groups.query);

  const groups = useAppSelector(state => {
    const groupIds = state.groups.queryMap[state.groups.query] || [];
    const groups = groupIds.map(id => state.groups.byId[id]);
    return groups;
  });

  useEffect(() => {
    fetchGroups({ status: "all-groups", query }).then(groups => groupsActions.queryCompleted(query, groups));
  }, [query]);

  return (
    <div className="mx-auto">
      <div className="items-center h-10 py-1 mx-4 my-2 text-lg font-semibold text-black bg-gray-200 border rounded-lg ">Welcome! {userFirstName}</div>
      <Input Icon={HiSearch} type="text" placeholder="Search" value={query} onChange={(e) => {
        groupsActions.query(e.target.value);
      }}
      ></Input>
      <div>
        {groups.map((group) => (
          <div className="px-2 py-4 my-2 bg-gray-200 border border-black rounded-lg ">{group.name} <br /> {group.description}</div>
        ))}
      </div>
      <Link to="/recordings"><span className="mt-4 text-indigo-400 underline">Go to recordings section</span></Link>
    </div>
  );
};

Dashboard.defaultProps = {
};

export default memo(Dashboard);