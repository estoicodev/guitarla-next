import Image from "next/image"
import image from "@/public/img/about.jpg"
import styles from "@styles/about.module.css"

export const metadata = {
  title: 'About',
}

const Page = () => {
  return (
    <main className={`container main ${styles.about}`}>
      <h2 className="heading">About us</h2>
      <div className={styles.content}>
        <Image src={image} alt="Guitar" width={1000} height={800} />
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec convallis volutpat ex ac tristique. Aliquam erat volutpat. Phasellus porta dui vitae iaculis euismod. Praesent sollicitudin ipsum nec nunc pretium, at tincidunt urna interdum. Curabitur at lobortis sem. Fusce accumsan odio semper, eleifend nisl dictum, dictum lorem. Donec vitae volutpat quam. Fusce maximus ipsum sed imperdiet feugiat.</p>
          <p>Fusce sagittis consequat neque eu feugiat. Proin mollis pharetra sem at efficitur. Curabitur vitae risus gravida, elementum massa a, porta neque. Aenean tincidunt dapibus leo, a pellentesque est consectetur ut. Nam ex dui, semper quis placerat sit amet, commodo id leo. Fusce et lectus ut magna convallis volutpat sit amet eu lacus.</p>
        </div>
      </div>
    </main>
  )
}

export default Page
