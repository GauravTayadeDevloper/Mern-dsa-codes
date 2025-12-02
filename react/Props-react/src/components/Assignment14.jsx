export default function Assignment14()
{
    return (
        <><h1 style={{ color: "red" }}>Assignment 14</h1>
                  <Card>
            <p>This is inside the card.</p>
          </Card>
        </>
    )
}

function Card({title, children}) {
    return (
        <div>
            <h3>{title ? title : "No Title Provided"}</h3>

            {children}
        </div>
    )
}