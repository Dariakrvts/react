import { Link } from "react-router-dom";

//функція = функція яка щось повертає
const Header = (props) => {
  // console.log("props", props);
  // console.log(darkMode);
  return (
    <div className='header'
      style={{
        height: 80,
        width: '100',
        backgroundColor: "#DEEAF8", 
        color: '#000000',
      }}
    >
    <ul 
      style={{
        display: "flex",
        gap: "10px",
        listStyle: "none",
      }}>
        <li>
         <Link to="/"
         style={{
          color: "#000000"
         }}
         >Home</Link>
        </li>
        <li>
         <Link to="/blogs"
         style={{
          color: "#000000"
         }}
         >Blogs</Link>
        </li>
        <li>
          <Link to="/contact"
          style={{
            color: "#000000"
           }}
          >Contact</Link>
        </li>
        <li>
          <Link to="/smileyspage"
          style={{
            color: "#000000"
           }}
          >Smileys Page</Link>
        </li>
       <li>
        <Link to="/todolist"
          style={{
            color: "#000000"
           }}
          >Todo List</Link>
        </li> 
        <li>
        <Link to="/list"
          style={{
            color: "#000000"
           }}
          >List</Link>
        </li> 
    </ul>
  </div>
  );
}

export default Header;