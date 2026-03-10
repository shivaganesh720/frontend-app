import { useEffect, useState } from "react";
import axios from "axios";
import { Linter } from "eslint";

function Content() {
    const [count, setCount] = useState(0);
    const [products, setProducts] = useState([]);
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);

    const fetchProducts = async () => {
        const url = "https://localhost:5000/products";
        const res = await axios.get(url);
        setProducts(res.data);
    }


    useEffect(() => { fetchProducts(); }, []);

    return (
        <div>
            <h3>Products Page</h3>
            <button onClick={decrement}>-</button>
            Count: {count}
            <button onClick={increment}>+</button>
            <hr /><ol>{products.map((product) => <li> {product.name}</li>)}</ol>

        </div>
    )
}

export default Content;