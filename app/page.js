import { Suspense } from "react"
import Loading from "@/components/Loading"
import ListOfGuitars from "@components/ListOfGuitars"
import ListOfPosts from "@components/ListOfPosts"
import Course from "@components/Course"
import { getCourse } from "@/data/getCourse"

export default async function Home() {
  const course = await getCourse()
  return (
    <>
      <main className="container main">
        <h1 className="heading">GuitarLA</h1>
        <Suspense fallback={<Loading />}>
          <ListOfGuitars />
        </Suspense>
      </main>
      <Course course={course} />
      <section className="container main">
        <h2 className="heading">Latest Posts</h2>
        <Suspense fallback={<Loading />}>
          <ListOfPosts />
        </Suspense>
      </section>
    </>
  )
}
