import Modal from "react-modal";
import { DateRangePicker } from "react-date-range";
import { data } from "../../data";
import { DataItem } from "../../interfaces";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { IoCloseSharp } from "react-icons/io5";

const CustomDateRangePicker = () => {
  const [showModal, setShowModal] = useState(false);
  const initialData: DataItem[] = [...data].sort((a: DataItem, b: DataItem) => {
    const [aMonth, aYear] = a.date.split(" ");
    const [bMonth, bYear] = b.date.split(" ");
    const aDate = new Date(`${aYear} ${aMonth}`);
    const bDate = new Date(`${bYear} ${bMonth}`);
    return aDate.getTime() - bDate.getTime();
  });

  const [selectedDateRange, setSelectedDateRange] = useState([
    {
      startDate: new Date(new Date().getTime() - 7 * 24 * 60 * 60 * 1000),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const handleDateRangeChange = (ranges: any) => {
    setSelectedDateRange([ranges.selection]);
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="mb-3 text-end">
      <button
        className="text-md  font-bold rounded-lg p-4 bg-[#F1F1F1]"
        onClick={openModal}
      >
        Select Date
      </button>

      {/* Modal for Date Range Picker */}
      <Modal
        isOpen={showModal}
        onRequestClose={closeModal}
        contentLabel="Date Range Modal"
        style={{
          content: {
            zIndex: 10, // Custom z-index
            top: "55%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)", // Center modal
          },
        }}
      >
        <div className="flex justify-end">
          <button onClick={closeModal}>
            <IoCloseSharp size={30} className="m-4" />
          </button>
        </div>
        <DateRangePicker
          ranges={selectedDateRange}
          onChange={handleDateRangeChange}
        />
        <div className="flex justify-end">
          <button onClick={closeModal}>Submit</button>
        </div>
      </Modal>
    </div>
  );
};

export default CustomDateRangePicker;
