import { Suspense } from "react"
import Loading from "@/components/Loading"
import ListOfPosts from "@components/ListOfPosts"

export const metadata = {
  title: 'Blog',
}

const Page = async () => {
  return (
    <main className="container main">
      <h2 className="heading">Posts</h2>
      <Suspense fallback={<Loading />}>
        <ListOfPosts />
      </Suspense>
    </main>
  )
}

export default Page
