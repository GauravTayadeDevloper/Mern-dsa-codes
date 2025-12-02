export default function Assignment12() {
  return (
    <>
        <h1 style={{color:"red"}}>Assignment 12</h1>
      <Level1 msg="Welcome User"/>
    </>
  );
}

function Level1({ msg }) {
  return (
    <>
      <Level2 msg={msg} />
    </>
  );
}
function Level2({ msg }) {
  return <Card>{msg}</Card>;
}
function Card({ children }) {
  return (
    <div>
   
      <h4>{children}</h4>
         <h2>gaurav</h2>
    </div>
  );
}
