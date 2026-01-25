import { createContext } from "react";
import { products } from "../assets/assets";


export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = '$';
    const delivery_fee = 10; // Flat delivery fee
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(true);
    
    const value = { 
        products, currency, delivery_fee, 
        search, setSearch, showSearch, setShowSearch
    };
    return(
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
        // Add any state or functions you want to share across components
    };  
    export default ShopContextProvider;