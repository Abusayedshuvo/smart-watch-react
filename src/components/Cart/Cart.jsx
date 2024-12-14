const Cart = () => {
  return (
    <>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box text-left min-w-[650px]">
          <p className="font-bold text-[22px]"> Your Cart</p>
          <div className="overflow-x-auto">
            <table className="table text-sm">
              {/* head */}
              <thead>
                <tr className="text-sm text-grey">
                  <th className="font-normal">Item</th>
                  <th className="font-normal">Color</th>
                  <th className="font-normal">Size </th>
                  <th className="font-normal">Qnt</th>
                  <th className="font-normal text-right">Price</th>
                </tr>
              </thead>
              <tbody className="text-dark">
                {/* row 1 */}
                <tr>
                  <td>
                    <img src="" alt="" />
                    <span>Classy Modern Smart watch</span>
                  </td>
                  <td>Black</td>
                  <td className="font-bold">XL</td>
                  <td className="font-bold">1</td>
                  <td className="text-right font-bold">$99.00</td>
                </tr>
              </tbody>
              <tfoot>
                <tr className="pt-5 text-dark">
                  <td className="text-base font-bold">Total</td>
                  <td></td>
                  <td></td>
                  <td className="text-sm">4</td>
                  <td className="text-right text-lg">$356.00</td>
                </tr>
              </tfoot>
            </table>
            <div className="text-right mt-6">
              <button className="py-2 px-[18px] rounded-[3px] text-dark font-bold text-[13px] border border-[#DBDFEA] mr-6">
                Continue Shopping
              </button>
              <button className="bg-blue py-2 px-[18px] rounded-[3px] text-white font-bold text-[13px]">
                Checkout
              </button>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default Cart;
