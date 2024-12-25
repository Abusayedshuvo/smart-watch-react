import product1 from "../../assets/product-1.jpg";
import product2 from "../../assets/blue.jpg";
import product3 from "../../assets/black.jpg";
import product4 from "../../assets/cyan.jpg";
import Cart from "../Cart/Cart";
import Details from "./Details";

const changeImg = () => {
  const product = document.querySelectorAll(".product");
  console.log(product);
};

const Products = () => {
  return (
    <>
      <div className="max-w-[1320px] container mx-auto my-[120px]">
        <div className="flex">
          <div className="min-w-[630px]">
            <img className="product" src={product1} alt="Smart Watch" />
            <img className="product hidden" src={product2} alt="Smart Watch" />
            <img className="product hidden" src={product3} alt="Smart Watch" />
            <img className="product hidden" src={product4} alt="Smart Watch" />
          </div>
          <div className="my-auto ml-[60px]">
            <Details changeImg={changeImg}></Details>
          </div>
        </div>
      </div>
      {/* checkout button */}
      <div className="mb-5 mx-auto text-center">
        <button
          className=" bg-[#FFBB5A] shadow-md rounded-3xl py-2 px-6 font-bold text-sm h-[42px] "
          onClick={() => document.getElementById("my_modal_2").showModal()}
        >
          Checkout
          <span className="bg-white w-[20px] h-[20px] rounded inline-block ml-[10px] leading-[22px]">
            0
          </span>
        </button>
        <Cart></Cart>
      </div>
    </>
  );
};

export default Products;
