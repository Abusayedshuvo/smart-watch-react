import { FaRegStar, FaRegStarHalfStroke, FaStar } from "react-icons/fa6";

const Details = () => {
  return (
    <>
      <h1 className="text-dark text-[40px] font-bold py-3">
        Classy Modern Smart watch
      </h1>
      <div className="flex text-lg text-[#FFD200] gap-[5px]">
        <FaStar />
        <FaStar />
        <FaStar />
        <FaRegStarHalfStroke />
        <FaRegStar />
        <span className="text-[#8091A7] text-sm ms-1">(2 Reviews)</span>
      </div>
      <p className="pt-5">
        <del className="text-grey text-[20px]">$99.00</del>
        <span className="text-blue text-2xl font-bold pl-[5px]">$79.00</span>
      </p>
      <p className="text-lg text-grey leading-[30px] pt-[20px]">
        I must explain to you how all this mistaken idea of denoun cing ple
        praising pain was born and I will give you a complete account of the
        system, and expound the actual teaching.
      </p>
      <div className="pt-[20px] flex">
        <div>
          <p className="text-grey text-sm">Type</p>
          <p className="text-dark font-bold">Watch</p>
        </div>
        <div className="ms-11">
          <p className="text-grey text-sm">Model Number</p>
          <p className="text-dark font-bold">Forerunner 290XT</p>
        </div>
      </div>
      <div className="pt-[20px]">
        <p className="text-dark font-bold text-lg">Band Color</p>
        <div className="mt-[10px] space-x-5">
          <button className="one w-4 h-4 rounded-full bg-[#816BFF]"></button>
          <button className="two w-4 h-4 rounded-full bg-[#1FCEC9]"></button>
          <button className="three w-4 h-4 rounded-full bg-[#4B97D3]"></button>
          <button className="three w-4 h-4 rounded-full bg-[#3B4747]"></button>
        </div>
      </div>
      <div className="pt-[20px]">
        <p className="text-dark font-bold text-lg">Wrist Size</p>
        <div className="mt-[10px] space-x-3">
          <button className="border border-[#DBDFEA] px-[18px] py-2 rounded-[3px]">
            <span className="text-dark text-[20px] font-bold">S</span>
            <span className="text-grey text-[13px] font-bold pl-3">$69</span>
          </button>
          <button className="border border-[#DBDFEA] px-[18px] py-2 rounded-[3px]">
            <span className="text-dark text-[20px] font-bold">M</span>
            <span className="text-grey text-[13px] font-bold pl-3">$79</span>
          </button>
          <button className="border border-[#DBDFEA] px-[18px] py-2 rounded-[3px]">
            <span className="text-dark text-[20px] font-bold">L</span>
            <span className="text-grey text-[13px] font-bold pl-3">$89</span>
          </button>
          <button className="border border-[#DBDFEA] px-[18px] py-2 rounded-[3px]">
            <span className="text-dark text-[20px] font-bold">XL</span>
            <span className="text-grey text-[13px] font-bold pl-3">$99</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Details;