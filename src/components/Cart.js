/**
 * Save and show list of loved element
 * 
 * @returns List of all elements users like
 */
import '../styles/Cart.css' 

function Cart() {

    const monsteraPrice = 8  
    const ivyPrice = 10 
    const flowerPrice = 15 


    return (
        <div className='lmj-cart'>
            <h1>Panier</h1>
            <ul>
                <li>Monstera : {monsteraPrice } €</li>
                <li>Leurre : {ivyPrice} €</li>
                <li>Flower : {flowerPrice} €</li>
            </ul>
            Total : {monsteraPrice + ivyPrice + flowerPrice} €
        </div>
    )
}

export default Cart 