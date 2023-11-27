import { Suspense } from "react"
import ListOfGuitars from "@components/ListOfGuitars"
import Loading from "@/components/Loading"

export const metadata = {
  title: 'Store',
}

const Page = async () => {
  return (
    <main className="container main">
      <h2 className="heading">Our Collection</h2>
      <Suspense fallback={<Loading />}>
        <ListOfGuitars/>
      </Suspense>
    </main>
  )
}

export default Page
