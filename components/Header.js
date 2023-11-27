import Link from "next/link"
import logo from "@/public/img/logo.svg"
import Navigation from "@components/Navigation"
import Image from "next/image"
import styles from "@styles/header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.nav}`}>
        <Link href="/">
          <Image className={styles.logo} src={logo} alt="logo" />
        </Link>
        <Navigation />
      </div>
    </header>
  )
}

export default Header
