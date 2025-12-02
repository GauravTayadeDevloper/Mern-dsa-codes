export default function Assignment9()
{
 return(
    <>
        <h1 style={{color:"red"}}>Assignment 9</h1>
    <ProductCard title="iPhone" inStock={false} />

    </>
 )
}

function ProductCard({title,inStock})
{
//    return <p style={{color: inStock ? "green" : "red"}}>{title}</p>
    return (
        <div>
            <h2>📝 Assignment 9 — Card that uses ternary with props</h2>
            <h3>{title}</h3>
            <p>
                {inStock ? (
                    <span style={{color: "green"}}>In Stock</span>
                ) : (
                    <span style={{color: "red"}}>Out of Stock</span>
                )}
            </p>
        </div>
    )
}