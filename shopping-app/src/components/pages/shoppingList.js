import { h } from 'preact';
import { useEffect, useState } from 'preact/hooks';
import { getAllItems } from './api';

const ShoppingList = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllItems()
            .then(response => setItems(response.data))
            .catch(err => setError('Failed to fetch items.'));
    }, []);

    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <h1>Shopping List</h1>
            <ul>
                {items.map(item => (
                    <li key={item.name}>
                        {item.name} - {item.amount}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingList;