import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import users from './users.json';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredItems, setFilteredItems] = useState(users);

  function handleDropdown() {
    setShowDropdown(true);
  }

  function filterSearch(e) {
    const value = e.target.value;
    setInputValue(value);
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
    
  }

  return (
    <div className="App">
      <input
        value={inputValue}
        placeholder="Enter here"
        onClick={handleDropdown}
        onChange={filterSearch}
      />
      {showDropdown && filteredItems.length > 0 && (
        <ul className="dropdown">
          {filteredItems.map(({ name, id }) => (
            <li onClick={()=>{setInputValue(name);setShowDropdown(false)}} key={id}>{name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
