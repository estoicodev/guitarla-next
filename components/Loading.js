import styles from "@styles/loading.module.css"

const Loading = () => {
  return (
    <div className={`${styles.ctn}`}>
      <div className={styles.lds_dual_ring}></div>
    </div>
  )
}

export default Loading
