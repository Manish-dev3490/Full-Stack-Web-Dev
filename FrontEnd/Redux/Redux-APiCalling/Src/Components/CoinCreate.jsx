import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCyrpto } from "../Utils/Slice1"; // fixed typo

function CoinCreate() {
    const { data, loading, error } = useSelector((store) => store?.slice1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchCyrpto(20)); // fixed typo
    }, [dispatch]);

    if (loading) return <h2>Data is loading...</h2>;
    if (error) return <h2>Something went wrong!</h2>;

    return (
        <div style={{
            display: flex,
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '20px',
            marginBlock: '15px'
        }}>
            {data?.map((coin, index) => (
                <div key={coin.id}>
                    <h3>{coin.name}</h3>
                    <p>Price: {coin.price}</p>
                    <img src={coin?.image} alt={coin?.name} />


                </div>
            ))}
        </div>
    );
}

export default CoinCreate;
