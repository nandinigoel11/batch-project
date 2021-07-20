import {FC,memo} from "react";
import { useParams } from "react-router-dom";

interface Props{
}

interface RouteParams{
  lectureNumber: string;
  batchNumber: string;
}

const Lecture: FC<Props> = (Props) =>{
    const {lectureNumber,batchNumber} = useParams<RouteParams>();
  return (
     <div>
       Showing data of lecture #{lectureNumber} of batch #{batchNumber}.
     </div>
);
};

Lecture.defaultProps = {
}

export default memo(Lecture);