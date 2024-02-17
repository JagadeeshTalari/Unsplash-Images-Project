import { useGlobalContext } from "./Context"
import {BsFillSunFill, BsFillMoonFill} from "react-icons/bs"


const ThemeToggle = () => {
    const {isDarkTheme, toggleDarkTheme} = useGlobalContext();
    
return (
    <section className="toggle-container">
        {/* <div>ThemeToggle</div> */}
        <h1 className="title">Unsplash Images</h1>
        <button className="dark-toggle" onClick={toggleDarkTheme}>
            {isDarkTheme ? 
            <BsFillMoonFill className="toggle-icon moon" /> :
            <BsFillSunFill className="toggle-icon sun"/>
}
        </button>
    </section>
)
}

export default ThemeToggle