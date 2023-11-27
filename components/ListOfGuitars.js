import { getGuitars } from "@/data/getGuitars"
import Guitar from "./Guitar"
import styles from "@styles/store.module.css"

const ListOfGuitars = async () => {
  const guitars = await getGuitars()

  return (
    <>
      {guitars?.length
        ? <div className={styles.guitarsGrid}>
            {guitars?.map((guitar) => (
              <Guitar guitar={guitar?.attributes} key={guitar?.id} />
            ))}
          </div>
        : <p className="empty">No guitars yet...</p>
  }
    </>
)
}

export default ListOfGuitars
