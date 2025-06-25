const UserCard = ({username}: { username: string }) => {
  return (
    <div style={{backgroundColor: "#2e6ffc", width: "200px", height: "200px"}}>
      <h1 style={{color: "#fff"}}>User Card</h1>
      <h2 style={{color: "#fff"}}>{username}</h2>
    </div>
  );
};

export default UserCard;