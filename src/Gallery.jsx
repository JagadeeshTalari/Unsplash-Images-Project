import { useQuery } from "@tanstack/react-query"
import axios from "axios"
import { useGlobalContext } from "./Context"

const url = `https://api.unsplash.com/search/photos/?client_id=${import.meta.env.VITE_API_KEY}&per_page=20`

const Gallery = () => {
  const {searchTerm, setSearchTrem} = useGlobalContext()
  const response = useQuery({
    queryKey: ['images', searchTerm],
    queryFn: async() => {
      const result = await axios.get(`${url}&query=${searchTerm }`)
      return result.data
    }
  })
  if(response.isLoading){
    return(
      <section>
        <h4>Loading...</h4>
      </section>
    )
  }
  if(response.isError){
    return(
      <section>
        <h4>There was an Error</h4>
      </section>
    )
  }

  const results = response.data.results

  if(results.length < 1){
    return (
      <div>
        <h4>No Results Found</h4>
      </div>
    )
  }
  return (
    <section className="imageContainer">
      {
        results.map(item => {
          const url = item?.urls?.regular
          return (
            <img key={item.id} src={url} alt={item.alt_description} />
          )
        })
      }
    </section>
  )
}

export default Gallery