export default function Assignment18()
{
    return(
        <>
        <h1 style={{ color: "red" }}>Assignment 18</h1>
        <Card
         title="Notifications"
      icon={<span>🔔</span>}
        />
        </>
        )
    }

    function Card({title,icon})
    {
        return(
            <div>
                {icon.length ===0? <p>NO Icon</p> : <p>{title} {icon}</p>}
            </div>
        )
    }