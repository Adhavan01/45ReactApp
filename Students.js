// import React from 'react'

// function LandingPageB({ username }) {
//   return (
//     <div>
//       <h1>Welcome to Students Page, {username}!</h1>
//     </div>
//   );
// }

// export default LandingPageB
// import React, { useState } from 'react';

// function LandingPageB() {
//   const [items, setItems] = useState([]);
//   const [inputValue, setInputValue] = useState('');

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setItems([...items, inputValue]);
//     setInputValue('');
//   };

//   const handleDelete = (index) => {
//     const updatedItems = [...items];
//     updatedItems.splice(index, 1);
//     setItems(updatedItems);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input type="text" value={inputValue} onChange={handleInputChange} />
//         <button type="submit">Add</button>
//       </form>
//       <ul>
//         {items.map((item, index) => (
//           <li key={index}>
//             {item}
//             <button onClick={() => handleDelete(index)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default LandingPageB;


// 
import React, { useState } from 'react';

const LandingPageB = () => {
  const [rows, setRows] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 40 },
  ]);

  const [editingId, setEditingId] = useState(null);

  const handleDelete = (id) => {
    const updatedRows = rows.filter(row => row.id !== id);
    setRows(updatedRows);
  }

  const handleEdit = (id) => {
    setEditingId(id);
  }

  const handleUpdate = (updatedRow) => {
    const updatedRows = rows.map(row => {
      if (row.id === updatedRow.id) {
        return updatedRow;
      }
      return row;
    });
    setRows(updatedRows);
    setEditingId(null);
  }

  const handleCancel = () => {
    setEditingId(null);
  }

  const renderRow = (row) => {
    if (editingId === row.id) {
      return (
        <tr key={row.id}>
          <td>{row.id}</td>
          <td><input type="text" defaultValue={row.name} /></td>
          <td><input type="text" defaultValue={row.age} /></td>
          <td>
            <button onClick={() => handleUpdate({ id: row.id, name: '', age: '' })}>Save</button>
            <button onClick={handleCancel}>Cancel</button>
          </td>
        </tr>
      )
    } else {
      return (
        <tr key={row.id}>
          <td>{row.id}</td>
          <td>{row.name}</td>
          <td>{row.age}</td>
          <td>
            <button onClick={() => handleEdit(row.id)}>Edit</button>
            <button onClick={() => handleDelete(row.id)}>Delete</button>
          </td>
        </tr>
      )
    }
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => renderRow(row))}
      </tbody>
    </table>
  )
}

export default LandingPageB;
