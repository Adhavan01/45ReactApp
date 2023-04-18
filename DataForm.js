import React from 'react'

function DataForm({label}) {
  const [isShow, setShow] = React.useState(true);

  const handleToggle = () => {
    setShow(!isShow);
  };

  return (
    <button onClick={handleToggle}  type="button">
      {label}
    </button>
  );
}

export default DataForm
