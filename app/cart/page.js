"use client"
import styles from "@styles/cart.module.css"
import { useGlobalState } from "@/context/GlobalContext"
import { useEffect, useState } from "react"
import ListOfCart from "@/components/ListOfCart"

const Cart = () => {
  const { cart } = useGlobalState()
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const total = cart?.reduce((acc, guitar) => {
      return acc + (guitar.price * guitar.quantity)
    }, 0)

    setTotal(total)
  }, [cart])

  return (
    <main className="container main">
      <h1 className="heading">Shopping Cart</h1>
      <div className={styles.shoppingCart}>
        <div>
          <h2>Articles</h2>
          <ListOfCart />
        </div>
        <aside className={styles.resume}>
          <h3>Order Resume</h3>
          <p>Total to pay: ${total}</p>
        </aside>
      </div>
    </main>
  )
}

export default Cart
