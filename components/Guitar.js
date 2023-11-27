import Image from 'next/image'
import Link from 'next/link'
import styles from '@styles/store.module.css'

const Guitar = ({ guitar }) => {
  const { name, description, price, url, image } = guitar
  const imageUrl = image.data?.attributes?.url

  return (
    <div className={styles.card}>
      <Image src={imageUrl} alt={`${name} Guitar`} width={250} height={300} />
      <div className={styles.content}>
        <h3>{name}</h3>
        <p className={styles.description}>{description}</p>
        <p className={styles.price}>${price}</p>
        <Link className="link" href={`/store/${url}`}>View product</Link>
      </div>
    </div>
  )
}

export default Guitar
