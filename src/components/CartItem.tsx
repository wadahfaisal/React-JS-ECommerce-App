import { formatPrice } from "../utils/helpers";
import AmountButtons from "./AmountButtons";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cart_context";
import { CartItemProps as Props } from "../types/propsTypes";
import styles from "../scss/components/cartItem.module.scss";

const CartItem = ({ id, image, name, color, price, amount }: Props) => {
  const { removeItem, toggleAmount } = useCartContext();

  const increase = () => {
    toggleAmount(id, "inc");
  };
  const decrease = () => {
    toggleAmount(id, "dec");
  };

  return (
    <article className={styles.cartItem}>
      <div className={styles.title}>
        <img src={`http://localhost:5000${image}`} alt={name} />
        <div>
          <h5 className={styles.name}>{name}</h5>
          <p className={styles.color}>
            color : <span style={{ background: color }}></span>
          </p>
          <h5 className={styles.priceSmall}>{formatPrice(price)}</h5>
        </div>
      </div>
      <h5 className={styles.price}>{formatPrice(price)}</h5>
      <AmountButtons amount={amount} increase={increase} decrease={decrease} />
      <h5 className={styles.subtotal}>{formatPrice(price)}</h5>

      <button
        type="button"
        className={styles.removeBtn}
        onClick={() => removeItem(id)}
      >
        <FaTrash />
      </button>
    </article>
  );
};

export default CartItem;
