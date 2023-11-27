import { useGlobalState } from '@/context/GlobalContext'
import Image from 'next/image'
import styles from "@styles/cart.module.css"

const ListOfCart = () => {
  const { cart, updateQuantity, deleteFromCart } = useGlobalState()

  return (
    <>
    {
      cart?.length
        ? cart?.map((guitar) => {
          return (
            <article key={guitar.id} className={styles.product}>
              <div className={styles.imgCtn}>
                <Image src={guitar.image} alt={`${guitar.name} Guitar`} width={200} height={200} />
              </div>
              <div className={styles.content}>
                <h3 className={styles.name}>{guitar.name}</h3>

                <div className={styles.quantity}>
                  <label htmlFor="quantity">Quantity:</label>
                  <select
                    id="quantity"
                    name="quantity"
                    value={guitar.quantity}
                    onChange={e => updateQuantity({
                      guitarId: guitar.id,
                      quantity: e.target.value
                    })}
                  >
                    {[...Array(10)].map((_, index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </select>
                </div>

                <p className={styles.price}>Price: <span>${guitar.price}</span></p>
                <p className={styles.subtotal}>Subtotal: <span>${guitar.price * guitar.quantity}</span></p>
              </div>

              <button
                className={styles.btnDelete}
                onClick={() => deleteFromCart(guitar.id)}
              >
                X
              </button>
            </article>
          )})
        : <p className="empty">Your cart is empty...</p>
    }
    </>
  )
}

export default ListOfCart
