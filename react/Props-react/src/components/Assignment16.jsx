export default function Assignment16()
{
    return(
        <div>
            <h1 style={{ color: "red" }}>Assignment 16</h1>
            <h1 style={{ color: "red" }}>Assignment 16</h1>
        <List items={[10, 20, 30]}>
  <h2>Numbers List</h2>
</List>
        </div>
    )
}
function List({items})
{
return(
    <div>
        { items.length > 0?
        <ol>
            {items.map((items,ind)=>(
                <li key={ind}>{items} </li>
            ))}
        </ol> : <p>No Items Found</p>}
    </div>
)
}