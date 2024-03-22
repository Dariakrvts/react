import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchAlbumsByUserId, fetchPhotosByAlbumId } from '../PhotoList/PhotoThunks';

function PhotoList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.photo.users.list);
  const loading = useSelector((state) => state.photo.users.loading);
  const error = useSelector((state) => state.photo.users.error);
  const albums = useSelector((state) => state.photo.albums.list);
  const photos = useSelector((state) => state.photo.photos.list);

  const [expandeddUserId, setSelectedUserId] = useState(null);
  const [expandedAlbumId, setSelectedAlbumId] = useState(null);
  const [showAlbums, setShowAlbums] = useState(false); // Стан для відображення альбомів
  const [showPhotos, setShowPhotos] = useState(false);

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  // console.log(users);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const handleAlbumClick = (userId) => {
    setSelectedUserId(userId);
    setShowAlbums(!showAlbums);
    dispatch(fetchAlbumsByUserId(userId));
  };

  const handlePhotosClick = (albumId) => {
    setSelectedAlbumId(albumId);
    setShowPhotos(!showPhotos);
    dispatch(fetchPhotosByAlbumId(albumId)); // Викликати асинхронну функцію для отримання фото за ідентифікатором альбому
  };

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul>
        {users &&
          users.length > 0 &&
          users.map((user) => (
            <li key={user.id}>
              {user.name}
              <button onClick={() => handleAlbumClick(user.id)}>Альбом</button>
              {expandeddUserId === user.id &&
                albums.length > 0 &&
                showAlbums && ( // Змініть () на &&
                  <ul>
                    {albums.map((album) => (
                      <li key={album.id}>
                        {album.title}
                        <button onClick={() => handlePhotosClick(album.id)}>Фото</button>
                        {expandedAlbumId === album.id && photos.length > 0 && showPhotos && (
                          <ul>
                            {photos.map((photo) => (
                              <li key={photo.id}>
                                <img src={photo.thumbnailUrl} alt={photo.title} />
                              </li>
                            ))}
                          </ul>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PhotoList;
