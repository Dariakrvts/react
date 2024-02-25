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
        <Link to="/photolist"
          style={{
            color: "#000000"
           }}
          >PhotoList</Link>
        </li> 
        <li>
        <Link to="/PhoneContacts"
          style={{
            color: "#000000"
           }}
          >Contacts</Link>
        </li> 
        <li>
          <Link to="/Comments"
          style={{
            color: "#000000"
           }}
          >Comments</Link>
        </li> 
    </ul>
  </div>
  );
}

export default Header;