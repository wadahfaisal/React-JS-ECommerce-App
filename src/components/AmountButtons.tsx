import { FaPlus, FaMinus } from "react-icons/fa";

const AmountButtons = ({ amount, increase, decrease }: Props) => {
  return (
    <div className="amount-btns">
      <button type="button" className="amount-btn" onClick={decrease}>
        <FaMinus />
      </button>
      <h2 className="amount">{amount}</h2>
      <button type="button" className="amount-btn" onClick={increase}>
        <FaPlus />
      </button>
    </div>
  );
};

type Props = {
  increase: () => void;
  decrease: () => void;
  amount: number;
};

export default AmountButtons;
