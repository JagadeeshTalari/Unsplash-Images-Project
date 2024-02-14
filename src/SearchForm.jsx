const SearchForm = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        const searchValue = e.target.elements.search.value;
        console.log(searchValue)
        // if(!searchValue) return;
    }
return (
    <section>
       
        <h1 className="title">Unsplash Images</h1>
        <form action="" className="search-form" onSubmit={handleSubmit}>
            <input type="text" className="form-input serach-input" name="search" placeholder="cat"/>
        <button type="submit" className="btn">Search</button>
        </form>
    </section>
)
}

export default SearchForm