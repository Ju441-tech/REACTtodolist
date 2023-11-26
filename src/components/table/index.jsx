
function Table() {
    const PRODUCTS = [
        { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
        { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
        { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
        { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
        { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
        { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
    ]
    //D'abord, filtrer par category, ensuite "maper" dans le return dansune liste vegetable, et une liste fruits:

    const fruits = PRODUCTS.filter((el) => el.category === "Fruits")
    const vegetables = PRODUCTS.filter((el) => el.category === "Vegetables")
    console.log(fruits)
    console.log(vegetables)

    return (<div>

        <div>
            <ul>Fruits
                {fruits.map((el) =>
                    <li key={el.name}>{el.name} {el.price}</li>)}
            </ul>
            <ul>Vegetables
                {fruits.map((el) =>
                    <li key={el.name}>{el.name} {el.price}</li>)}
            </ul>
        </div>


    </div>)
}
export default Table