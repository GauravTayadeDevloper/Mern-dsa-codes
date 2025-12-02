export default function Assignment2() {
    const isPremiumUser = false;

    return (
        <div>
            <h2 style={{color:"red"}}>📝 Assignment 2 — Show a discount message for premium users</h2>
            {isPremiumUser && <p>You get 50% discount!</p>}
            {!isPremiumUser && <p>Upgrade to premium for discounts!</p>}
        </div>
    )
}