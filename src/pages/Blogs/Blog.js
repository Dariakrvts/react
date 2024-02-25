import { useRef } from "react";

const Blog = () => {
  let inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
    console.log("inputRef", inputRef);
  }

  return (
    <>
    <input ref={inputRef} />
    <button onClick={handleClick}>
      Focus the input
    </button>
  </>
  );
};

export default Blog;
