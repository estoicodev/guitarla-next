"use client"

import Link from "next/link"
import cartImage from "@/public/img/cart.png"
import Image from "next/image"
import { usePathname } from 'next/navigation'
import headerStyles from "@styles/header.module.css"
import footerStyles from "@styles/footer.module.css"

const Navigation = () => {
  const pathname = usePathname()

  const activeStyle = (path) => pathname === path ? headerStyles.active : ""
  return (
    <nav className={`${headerStyles.navigation} ${footerStyles.navigation}`}>
    <Link
      href="/"
      className={`${headerStyles.navItem} ${activeStyle("/")}`}
    >
      Home
    </Link>
    <Link
      href="/store"
      className={`${headerStyles.navItem} ${activeStyle("/store")}`}
    >
      Store
    </Link>
    <Link
      href="/blog"
      className={`${headerStyles.navItem} ${activeStyle("/blog")}`}
    >
      Blog
    </Link>
    <Link
      href="/about"
      className={`${headerStyles.navItem} ${activeStyle("/about")}`}
    >
      About us
    </Link>
    <Link
      href="/cart"
      className={`${headerStyles.navCart} ${activeStyle("/about")}`}
    >
      <Image className={`${headerStyles.cart} ${footerStyles.cart}`} src={cartImage} alt="shopping cart" />
    </Link>
  </nav>
)
}

export default Navigation
