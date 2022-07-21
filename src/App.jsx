import "./App.css"
import Search from "./components/search/Search"

const App = () => {
    const handleOnSearchChange = (searchData) => {
        console.log(serachData)
    }

    return (
        <div className="container">
            <Search onSearchChange={handleOnSearchChange} />
        </div>
    )
}

export default App
