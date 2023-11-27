import Link from "next/link"
import styles from "@styles/error.module.css"

const NotFound = ({
  title = "404",
  description = "We could not find the page you are looking for",
  linkText = "Back to home",
  linkHref = "/"
}) => {
  return (
    <div className={styles.notfound}>
      <div className={styles.notfoundMsg}>
        <h1>{title}</h1>
      </div>
      <h2>{description}</h2>
      <Link className="link" href={linkHref}>{linkText}</Link>
    </div>
  )
}

export default NotFound
