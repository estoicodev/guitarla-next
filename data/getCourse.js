export const getCourse = async () => {
  try {
    const response =  await fetch(`${process.env.API_URL}/api/curso?populate=image`, {
      cache: 'no-store'
    })
    const { data } = await response.json();
  
    return data
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch courses")
  }
}