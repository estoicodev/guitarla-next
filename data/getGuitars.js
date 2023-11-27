export const getGuitars = async () => {
  try {
    const response =  await fetch(`${process.env.API_URL}/api/guitars?populate=image`, {
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
    const apiUrl = `http://localhost:1337/api/guitars?filters[url]=${url}&populate=image`
    const response =  await fetch(apiUrl)
    const { data } = await response.json()
  
    return data
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch single guitar")
  }
}
