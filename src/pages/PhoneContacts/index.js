import React, { useState, useEffect } from 'react';

function PhoneContacts() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: '', surname: '', phone: '' });

  // Завантаження списку контактів з API
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContacts(data))
      .catch(error => console.log(error));
  }, []);

  // Функція для видалення контакту
  const deleteContact = (id) => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  // Функція для обробки події додавання контакту
  const handleSave = () => {
    if (newContact.name.trim() !== '' && newContact.surname.trim() !== '' && newContact.phone.trim() !== '') {
      const newContactWithId = { ...newContact, id: contacts.length + 1 };
      setContacts([...contacts, newContactWithId]);
      setNewContact({ name: '', surname: '', phone: '' });
    } else {
      alert('Будь ласка, заповніть всі поля');
    }
  };

  return (
    <div>
      <h1>Список контактів</h1>
      <table>
        <thead>
          <tr>
            <th>Ім'я</th>
            <th>Прізвище</th>
            <th>Телефон</th>
            <th>Дії</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td>{contact.name}</td>
              <td>{contact.surname}</td>
              <td>{contact.phone}</td>
              <td>
                <button onClick={() => deleteContact(contact.id)}>Видалити</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h2>Додати новий контакт</h2>
        <input
          type="text"
          placeholder="Ім'я"
          value={newContact.name}
          onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Прізвище"
          value={newContact.surname}
          onChange={(e) => setNewContact({ ...newContact, surname: e.target.value })}
        />
        <input
          type="text"
          placeholder="Телефон"
          value={newContact.phone}
          onChange={(e) => setNewContact({ ...newContact, phone: e.target.value })}
        />
        <button onClick={handleSave}>Зберегти</button>
      </div>
    </div>
  );
}

export default PhoneContacts;
