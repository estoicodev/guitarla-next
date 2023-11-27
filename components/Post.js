import Image from "next/image"
import Link from "next/link"
import { formatDate } from "@utils/helpers"
import styles from "@styles/blog.module.css"

const Post = ({ post }) => {
  const { title, content, image, url, publishedAt } = post
  const imageUrl = image.data?.attributes?.url
  return (
    <article className={`${styles.post} shadow rounded`}>
      <Image src={imageUrl} alt={title} width={250} height={250} />
      <div className={styles.content}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.date}>{formatDate(publishedAt)}</p>
        <p className={styles.resume}>{content}</p>
        <Link className="link" href={`/blog/${url}`}>Read more</Link>
      </div>
    </article>
  )
}

export default Post
