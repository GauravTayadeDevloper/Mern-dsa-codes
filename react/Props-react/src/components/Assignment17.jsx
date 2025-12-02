
export default function Assignment17()
{
    return(
        <>
        <h1 style={{ color: "red" }}>Assignment 17</h1>
        <Wrapper onClick={()=>alert("Box Clicked !")}><h2>Content inside wrapper</h2> 
        </Wrapper>
        </>
    )

}

function Wrapper({onClick,children}){
return(
    <div onClick={onClick}>
        <h2>{children}</h2>
    </div>
)
}