import { useEffect, useState } from "react";
import { CoinContext } from "./CoinContext";

const CoinContextProvider = ({ children }) => {

    const [allCoins, setAllCoins] = useState([])
    const [currency, setCurrency] = useState({ name: 'brl', symbol: 'R$' })

    useEffect(() => {
        const fetchAllCoins = async () => {
            const options = {
                method: 'GET',
                headers: { accept: 'application/json', 'x-cg-demo-api-key': 'CG-ektJ6aqHQwx1iHXCxXSdkCvQ' }
            };

            fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
                .then(res => res.json())
                .then(res => setAllCoins(res))
                .catch(err => console.error(err));
        };

        fetchAllCoins();
    }, [currency]);


    const contextValue = { allCoins, currency, setCurrency }

    return (
        <CoinContext.Provider value={contextValue}>
            {children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider