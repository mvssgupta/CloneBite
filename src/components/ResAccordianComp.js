import { useState } from "react";
import AccordianList from "./AcoordianList";

const ResAccordianComp = ({ data }) => {

  const [showData, setShowData] = useState(false)
  const handleClick = () => {
    setShowData(!showData);
  }
  // console.log(data);
  return (
    <div>
      <div className="mx-auto my-3 border bg-gray-100 rounded-md p-2 w-6/12 shadow-lg">
        <div className="flex justify-between"  onClick={handleClick}>
          <span className="font-extrabold" key={data?.card?.card?.title} >
            {data?.card?.card?.title}({data?.card?.card?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>
        {showData && <AccordianList data={data}/>}
      </div>
    </div>
  );
};

export default ResAccordianComp;
