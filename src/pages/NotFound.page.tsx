import {FC,memo} from "react";
interface Props{
}
const NotFound: FC<Props> = (Props) =>{
  return (
     <div className="w-screen h-screen text-white bg-red-500">
       Sorry the page you are looking for does not exist.
     </div>
);
};

NotFound.defaultProps = {
}

export default memo(NotFound);