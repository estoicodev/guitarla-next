import Image from "next/image"
import Link from "next/link"
import { getSinglePost } from "@/data/getPosts"
import { formatDate } from "@/utils/helpers"
import styles from "@styles/blog.module.css"
import NotFound from "@/app/not-found"

const Page = async ({ params }) => {
  const post = await getSinglePost(params.slug)
  if (post.length === 0) {
    return (
      <NotFound
        description="The post does not exist"
        linkText="Back to blog"
        linkHref="/blog"
      />
    )
  }
  console.log("PARAMS ----->", params)
  console.log("POST ----->", post)
  const { title, content, image, publishedAt } = post[0]?.attributes
  const imageUrl = image?.data?.attributes?.url

  return (
    <article className={`container main ${styles.post} ${styles.column}`}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.date}>{formatDate(publishedAt)}</p>
      <Image src={imageUrl} alt={title} width={400} height={400}/>
      <p>{content}</p>
      <Link className="link" href={`/blog`}>Go to blog</Link>
    </article>
  )
}

export default Page
