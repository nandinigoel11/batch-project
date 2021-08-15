import { FC, memo } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAppSelector } from "../../store";
import { HiOutlineEmojiSad, HiSearch } from "react-icons/hi";
import { groupsLoadingSelector, groupQuerySelector, groupsCurrentQuerySelector } from "../../selectors/groups.selectors";
import { meSelector } from "../../selectors/auth.selectors";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { queryChangedAction } from "../../actions/groups.actions";
import Input from "../../components/Input/Input";

interface Props {
}

const Dashboard: FC<Props> = () => {
  const user = useAppSelector(meSelector);

  const loading = useAppSelector(groupsLoadingSelector);

  const query = useAppSelector(groupQuerySelector);

  const groups = useAppSelector(groupsCurrentQuerySelector);

  const dispatch = useDispatch();

  const history = useHistory();


  return (
    <div className="mx-auto">
      <div className="items-center h-10 py-1 mx-4 my-2 text-lg font-semibold text-black bg-gray-200 border rounded-lg ">Welcome! {user!.first_name}</div>
      <Input Icon={HiSearch} type="text" placeholder="Search" value={query} onChange={(e) => {
        dispatch(queryChangedAction(e.target.value));
      }}
      ></Input>
      <div>
        {loading && <FaSpinner className="w-10 h-10 mx-auto animate-spin"></FaSpinner>}</div>
      <div>
        {groups.map((group) => (
          <div key={group.id}
            className="px-2 py-4 my-2 bg-gray-200 border border-black rounded-lg ">
              <Link to={"/groups/"+group.id}>
            {group.name}</Link>
            <br />
            {group.description}</div>
        ))}
        {!loading && groups.length === 0 && <div className="py-4 my-4 border border-black rounded-full px-7">   <div> <HiOutlineEmojiSad className="mx-auto w-7 h-7"></HiOutlineEmojiSad></div> Oops! The data you are looking for does not exist.</div>}
      </div>
      <Link to="/recordings"><span className="mt-4 text-indigo-400 underline">Go to recordings section</span></Link>
    </div>
  );
};

Dashboard.defaultProps = {
};

export default memo(Dashboard);