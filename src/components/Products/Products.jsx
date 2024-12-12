import product1 from "../../assets/product-1.jpg";
import Details from "./Details";

const Products = () => {
  return (
    <>
      <div className="max-w-[1320px] container mx-auto mt-[120px]">
        <div className="flex">
          <div className="min-w-[630px]">
            <img src={product1} alt="Smart Watch" />
          </div>
          <div className="my-auto ml-[60px]">
            <Details></Details>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
