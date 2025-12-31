import { useContext } from "react";
import { ViewContext } from "../Context/ViewContext";
import { SortContext } from "../Context/SortContext";

export default function FilterPanel()
{
let {mode , toggleView} = useContext(ViewContext);
let {sortOrder,toggleSort} = useContext(SortContext);

return(
<div>
    <button onClick={toggleSort}>toggle Sort</button>
    <h1>{sortOrder}</h1>
    <button onClick={toggleView}>Toggle View</button>
    <h1>{mode}</h1>
</div>
)

}