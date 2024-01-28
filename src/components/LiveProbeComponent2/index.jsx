import { useState } from "react"

const LiveProbeComponent2 = () => {

    const [shopCart, setShopCart] = useState({ item1: "Milk" })

    const handleChange = (event) => {
        let updatedValue = {}
        updatedValue = { item1: event.target.value };
        setShopCart(shopCart => ({
            ...shopCart,
            ...updatedValue
        }))
    }

    return (
        <div>
            <h3>Live probe - inspired by <a href="https://blog.logrocket.com/using-react-usestate-object">LogRocket</a></h3>
            <br />
            <label htmlFor="item1">Name:</label>
            <input type="text" name="item1" id="item1" defaultValue={shopCart.item1} onChange={e => handleChange(e)} />
            <br /><br />
            <label>Output - live preview:</label>
            <pre>
                {JSON.stringify(shopCart, null, 4)}
            </pre>

        </div>
    )
}
export default LiveProbeComponent2