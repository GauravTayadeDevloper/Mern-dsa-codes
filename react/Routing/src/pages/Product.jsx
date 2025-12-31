import { useParams } from "react-router-dom"

export default function Product()
{
let { id } = useParams();
return(
    <div>
        <h1>Product Page</h1>
        <h2>Product with id {id}</h2>
    </div>
)

}