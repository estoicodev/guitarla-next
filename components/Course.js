"use client"

import styles from "@styles/course.module.css"

const Course = ({ course }) => {
  const { title, content, image } = course?.attributes
  return (
    <section className={`${styles.course} course`}>
      <style jsx="true">{`
        .course {
          background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${image.data?.attributes?.url});
          background-size: cover;
          background-position: center center;
        }
      `}
      </style>
      <div className={`container ${styles.courseGrid}`}>
        <div className={styles.content}>
          <h2 className="heading">{title}</h2>
          <p>{content}</p>
        </div>
      </div>
    </section>
)
}

export default Course
