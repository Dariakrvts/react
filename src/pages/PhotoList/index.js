import React, { useState, useEffect } from 'react';

function PhotoList() {
  const [users, setUsers] = useState([]);
  const [albums, setAlbums] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedAlbumId, setSelectedAlbumId] = useState(null);
  const [showAlbums, setShowAlbums] = useState(false); // Стан для відображення альбомів
  const [showPhotos, setShowPhotos] = useState(false); // Стан для відображення фотографій

  // Завантаження списку користувачів з API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.log(error));
  }, []);

  // Завантаження списку альбомів для обраного користувача
  useEffect(() => {
    if (selectedUserId && showAlbums) { // Враховуємо показ альбомів
      fetch(`https://jsonplaceholder.typicode.com/albums?userId=${selectedUserId}`)
        .then(response => response.json())
        .then(data => setAlbums(data))
        .catch(error => console.log(error));
    }
  }, [selectedUserId, showAlbums]);

  // Завантаження списку фото для обраного альбому
  useEffect(() => {
    if (selectedAlbumId && showPhotos) { // Враховуємо показ фотографій
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${selectedAlbumId}`)
        .then(response => response.json())
        .then(data => setPhotos(data))
        .catch(error => console.log(error));
    }
  }, [selectedAlbumId, showPhotos]);

  // Функція для обробки натискання кнопки "Album"
  const handleAlbumButtonClick = (userId) => {
    setSelectedUserId(userId);
    setSelectedAlbumId(null); // Скидає обраний альбом
    setShowAlbums(prevState => !prevState); // Змінити стан відображення альбомів
    setShowPhotos(false); // Сховати фотографії при зміні користувача
  };

  // Функція для обробки натискання кнопки "Photos"
  const handlePhotosButtonClick = (albumId) => {
    setSelectedAlbumId(albumId);
    setShowPhotos(prevState => !prevState); // Змінити стан відображення фотографій
  };

  return (
    <div>
      <h1>Список користувачів</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.name}
            <button onClick={() => handleAlbumButtonClick(user.id)}>Альбом</button>
            {selectedUserId === user.id && showAlbums && ( // Перевірка на відображення альбомів
              <ul>
                {albums.map(album => (
                  <li key={album.id}>
                    {album.title}
                    <button onClick={() => handlePhotosButtonClick(album.id)}>Фото</button>
                    {selectedAlbumId === album.id && showPhotos && ( // Перевірка на відображення фотографій
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

export default PhotoList;
