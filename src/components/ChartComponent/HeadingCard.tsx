import { HeadingData } from "../../data/index";
import { HeadingItems } from "./HeadingItems";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

const HeadingCard = ({ SetActive, ActiveStore }: any) => {
  const handleActive = () => {
    SetActive((prev: any) => !prev);
  };

  return (
    <div className="w-[90%] m-auto   sm:px-8 py-6 flex flex-col sm:flex-row gap-4 lg:gap-8">
      {HeadingData.map((heading, index) => (
        <HeadingItems
          key={index}
          index={index}
          title={heading.Title}
          total={heading.total}
          per={heading.per}
        />
      ))}

      <div className="m-auto">
        <button onClick={handleActive} className="m-auto">
          {ActiveStore ? (
            <MdOutlineKeyboardArrowDown className="text-3xl text-[##E7E7E7]" />
          ) : (
            <MdOutlineKeyboardArrowUp className="text-3xl text-[##E7E7E7]" />
          )}
        </button>
      </div>
    </div>
  );
};

export default HeadingCard;
