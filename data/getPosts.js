export const getPosts = async () => {
  try {
    const response =  await fetch(`${process.env.API_URL}/posts?populate=image`, {
      cache: 'no-store'
    })
    const { data } = await response.json()
  
    return data
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch posts")
  }
}

export const getSinglePost = async (url) => {
  try {
    const response =  await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=image`)
    const { data } = await response.json()
  
    return data
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch single post")
  }
}