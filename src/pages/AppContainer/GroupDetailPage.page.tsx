import { useEffect } from "react";
import { FC, memo } from "react";
import { FaSpinner } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchOneGroup } from "../../actions/groups.actions";
import { groupIdSelector, selectedGroupSelector } from "../../selectors/groups.selectors";
import { useAppSelector } from "../../store";

interface Props {
}

const GroupDetailPage: FC<Props> = (Props) => {
    const groupId = +(useParams<{ groupId: string }>().groupId);

    const group = useAppSelector(selectedGroupSelector);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchOneGroup(groupId));
    }, [groupId]);

    if(!group){
        return <FaSpinner className="w-10 h-10 animate-spin"></FaSpinner>
    }

    return (
        <div>
            <div className="text-indigo-400 underline " >
                <Link to="/dashboard">Return to dashboard page.</Link>
            </div>
            <br />

            <br />
            <div> this is detail page for {group.name} (id: {groupId})</div>
            <br />
            <Link to={"/groups/"+ (groupId+1)}>next page</Link>
        </div>
    );
};

GroupDetailPage.defaultProps = {
}

export default memo(GroupDetailPage);