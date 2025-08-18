import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CoinContext } from "../../Context/CoinContext/CoinContext";
import "./Home.css";

const Home = () => {
    const { allCoins, currency } = useContext(CoinContext);
    const [displayCoins, setDisplayCoins] = useState([]);
    const [input, setInput] = useState("");

    const inputHandler = (e) => {
        setInput(e.target.value);
        if (e.target.value === "") {
            setDisplayCoins(allCoins);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const coins = await allCoins.filter((coin) => {
            return (
                coin.name.trim().toLowerCase().includes(input.toLowerCase()) ||
                coin.symbol.trim().toLowerCase().includes(input.toLowerCase())
            );
        });
        setDisplayCoins(coins);
    };

    useEffect(() => {
        setDisplayCoins(allCoins);
    }, [allCoins]);

    return (
        <div className="home">
            <div className="hero">
                <h1>
                    Largest <br /> Crypto Marketplace
                </h1>
                <p>
                    Welcome to the word's largest cryptocurrency marketplace. Sign up to
                    explore more about cryptos
                </p>
                <form onSubmit={handleSubmit}>
                    <input
                        required
                        id="coin-search"
                        list="coinlist"
                        onChange={inputHandler}
                        value={input}
                        type="text"
                        placeholder="Search for a coin"
                    />
                    <datalist id="coinlist">
                        {allCoins.map((coin, index) => (
                            <option key={index} value={coin.name}></option>
                        ))}
                    </datalist>
                    <button type="submit">Search</button>
                </form>
            </div>

            <div className="crypto-table">
                <div className="table-layout">
                    <p>#</p>
                    <p>Coins</p>
                    <p>Price</p>
                    <p style={{ textAlign: "center" }}>24H Change</p>
                    <p className="market-cap">Market Cap</p>
                </div>
                {displayCoins.slice(0, 10).map((coin, index) => (
                    <Link to={`/coin/${coin.id}`} className="table-layout" key={index}>
                        <p>{coin.market_cap_rank}</p>
                        <div>
                            <img src={coin.image} alt="" />
                            <p>{`${coin.name} - ${coin.symbol}`}</p>
                        </div>
                        <p>
                            {currency.symbol} {coin.current_price.toLocaleString()}
                        </p>
                        <p
                            className={coin.price_change_percentage_24h < 0 ? "red" : "green"}
                        >
                            {Math.floor(coin.price_change_percentage_24h * 100) / 100}
                        </p>
                        <p className='market-cap'>{currency.symbol} {coin.market_cap.toLocaleString()}</p>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Home;
