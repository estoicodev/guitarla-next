"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "@styles/store.module.css"
import { getSingleGuitar } from "@/data/getGuitars"
import Loading from "@/components/Loading"
import { useGlobalState } from "@/context/GlobalContext"

const GuitarUrl = ({ params }) => {
  const [guitar, setGuitar] = useState({})
  const [quantity, setQuantity] = useState(0)

  const { addToCart } = useGlobalState()

  useEffect(() => {
    const loadGuitar = async () => {
      const result = await getSingleGuitar(params?.slug)
      const guitar = result[0]
      console.log(guitar)
      return {
        id: guitar.id,
        name: guitar.attributes.name,
        price: guitar.attributes.price,
        description: guitar.attributes.description,
        image: guitar.attributes.image?.data?.attributes?.url
      }
    }

    loadGuitar()
    .then(guitar => {
      setGuitar(guitar)
    })
    .catch(err => console.error(err))
  }, [params.slug])
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if (quantity < 1) {
      alert("Please select a quantity")
      return
    }

    const guitarSelected = {
      id: guitar.id,
      name: guitar.name,
      price: guitar.price,
      quantity,
      image: guitar.image
    }

    addToCart(guitarSelected)
    console.log(`You added ${quantity} ${guitar.name} to your cart`)
  }

  return (
    <main className={`container main`}>
      {Object.keys(guitar).length === 0 && <Loading />}
      {Object.keys(guitar).length > 0
        && <div className={styles.card}>
            <Image src={guitar.image} alt={`${guitar.name} Guitar`} width={250} height={250} priority/>
            <div className={styles.content}>
              <h3>{guitar.name}</h3>
              <p className={styles.description}>{guitar.description}</p>
              <p className={styles.price}>${guitar.price}</p>

              <form className={styles.form} onSubmit={handleSubmit}>
                <label htmlFor="quantity">Quantity</label>

                <select
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={e => setQuantity(+e.target.value)}
                >
                  <option value="">-- Select --</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>

                <input className="link" type="submit" value="Add to cart"/>
              </form>

              <Link className="link" href="/store">Back to store</Link>
            </div>
          </div>
      }
    </main>
  )
}

export default GuitarUrl
