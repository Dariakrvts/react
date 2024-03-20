import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, fetchAlbumsByUserId, fetchPhotosByAlbumId } from '../PhotoList/PhotoThunks'; // обновленный путь


function PhotoList() {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users.list);
  console.log(users);
  const albums = useSelector((albums) => albums.albums.list);
  const photos = useSelector((state) => state.photos.list);

  const handleAlbumClick = (userId) => {
    dispatch(fetchAlbumsByUserId(userId));
  };

  const handlePhotosClick = (albumId) => {
    dispatch(fetchPhotosByAlbumId(albumId));
  };

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleAlbumClick(users.id)}>Альбом</button>
            {albums.length > 0 && (
              <ul>
                {albums.map((album) => (
                  <li key={album.id}>
                    {album.title}
                    <button onClick={() => handlePhotosClick(album.id)}>Фото</button>
                    {photos.length > 0 && (
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
