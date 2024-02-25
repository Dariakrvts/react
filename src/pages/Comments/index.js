import { useState, useEffect, useTransition, useId } from 'react';
import { Comments } from './Comments';
//dolorum
const filterBySearch = (entities, search) => 
entities.filter((item) => 
item.name.concat(item.body).includes(search));

const CommentsPage = () => {
  const [isPending, startTransition] = useTransition();
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState('');
  const id = useId();
  const id2 = useId();

  const handleSearch = (e) => {
    startTransition(() => {
        setSearch(e.target.value);
    });
    // setSearch(e.target.value);
  };
  console.log('id', id, id2);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((resp) => resp.json())
      .then(setComments);
  }, []);
  console.log('comments', comments);
  return (
    <div>
      <input onChange={handleSearch} />
      {isPending && <h1>Rendering...</h1>}
      <Comments entities={filterBySearch(comments, search)} />
    </div>
  );
};

export default CommentsPage;
