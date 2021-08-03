import {FC,memo} from "react";
import { Link } from "react-router-dom";
interface Props{
}
const Recordings: FC<Props> = (Props) =>{
  return (
     <div>
       This is recordings page.
       <Link to="/dashboard"><span className="text-indigo-400 underline">Go to dashboard</span></Link>
     </div>
);
};

Recordings.defaultProps = {
};

export default memo(Recordings);