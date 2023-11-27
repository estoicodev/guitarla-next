export const getGuitars = async () => {
  try {
    const response =  await fetch(`${process.env.API_URL}/guitars?populate=image`, {
      cache: 'no-store'
    })
    const { data } = await response.json()
  
    return data
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch guitars")
  }
}

export const getSingleGuitar = async (url) => {
  try {
    const response =  await fetch(`https://guitarla-strapi-x7y6.onrender.com/api/guitars?filters[url]=${url}&populate=image`)
    const { data } = await response.json()
  
    return data
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch single guitar")
  }
}
