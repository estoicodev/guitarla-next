import { getPosts } from "@/data/getPosts"
import Post from "./Post"
import styles from "@styles/blog.module.css"

const ListOfPosts = async () => {
  const posts = await getPosts()

  return (
    <>
      {posts?.length
        ? <div className={styles.postsGrid}>
            {posts?.map(post => (
              <Post post={post?.attributes} key={post?.id} />
            ))}
          </div>
        : <p className="empty">No posts yet...</p>
      }
    </>
  )
}

export default ListOfPosts
