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
    const apiUrl = `${process.env.API_URL}/guitars?filters[url]=${url}&populate=image`
    const response =  await fetch(apiUrl)
    const { data } = await response.json()
  
    return data
  } catch (error) {
    console.error(error)
    throw new Error("Failed to fetch single guitar")
  }
}
