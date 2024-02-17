import { useGlobalContext } from "./Context";

const SearchForm = () => {
    const {setSearchTrem} = useGlobalContext()

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        // console.log(searchValue)
        if(!searchValue) return;
        setSearchTrem(searchValue)
    }
return (
    <section>
        <form action="" className="search-form" onSubmit={handleSubmit}>
            <input type="text" className="form-input serach-input" name="search" placeholder="computer"/>
            <button type="submit" className="btn">Search</button>
        </form>
    </section>
)
}

export default SearchForm