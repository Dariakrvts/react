import React, { useState, useEffect } from 'react';

function List() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);

  // Завантаження списку користувачів з API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  // Завантаження списку альбомів для обраного користувача
  useEffect(() => {
    if (selectedUserId) {
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${selectedUserId}`)
        .then(response => response.json())
        .then(data => setAlbums(data))
        .catch(error => console.log(error));
    }
  }, [selectedUserId]);

  // Завантаження списку фото для обраного альбому
  useEffect(() => {
    if (selectedAlbumId) {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbumId}`)
        .then(response => response.json())
        .then(data => setPhotos(data))
        .catch(error => console.log(error));
    }
  }, [selectedAlbumId]);

  // Функція для обробки натискання кнопки "Album"
  const handleAlbumButtonClick = (userId) => {
    setSelectedUserId(userId);
    setSelectedAlbumId(null); // Скидає обраний альбом
  };

  // Функція для обробки натискання кнопки "Photos"
  const handlePhotosButtonClick = (albumId) => {
    setSelectedAlbumId(albumId);
    // setSelectedAlbumId(null); // Скидає обране фото
  };

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleAlbumButtonClick(user.id)}>Альбом</button>
            {selectedUserId === user.id && (
              <ul>
                {albums.map(album => (
                  <li key={album.id}>
                    {album.title}
                    <button onClick={() => handlePhotosButtonClick(album.id)}>Фото</button>
                    {selectedAlbumId === album.id && (
                      <ul>
                        {photos.map(photo => (
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

export default List;
