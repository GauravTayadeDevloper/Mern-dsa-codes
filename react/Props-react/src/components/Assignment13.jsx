export default function Assignment13() {
  return (
    <>
      <h1 style={{ color: "red" }}>Assignment 13</h1>
      <UserRole name="Gaurav" role="admin" />
    </>
  );
}

function UserRole({ name, role }) {
  return <h3>{role === "admin" ? `${name} is admin` : `${name} is user`}</h3>;
}
