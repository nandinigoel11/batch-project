import {FC,memo} from "react";

interface Props{
    status?: "online"|"offline",
}

const Avatar: FC<Props> = ({status}) =>{
    const statusclass = status === "online" ? "bg-green-600 border-2 border-white" : "bg-gray-400 border-2 border-white";
  return (
      <>
     <div className="static inline-block">
       <img className="rounded-full " src="https://designreset.com/cork/ltr/demo4/assets/img/profile-12.jpeg" />
       
     </div>
     <span className={"rounded-full w-4 h-4 absolute bottom-48 top-22 left-20 " + statusclass}> </span>
     
     </>
);
};

Avatar.defaultProps = {
    status: "online",
}

export default memo(Avatar);