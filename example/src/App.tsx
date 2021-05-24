import React, { useEffect, useState } from 'react'
import useDebounce from 'usedebounce'

const App = () => {
  const [state, setState] = useState({searchString: ''});

  const debouncedSearchString = useDebounce(state.searchString, 500);

  useEffect(() => {
      // do whatever you want with debouncedTitle
      // Ex: you trigger search when debouncedTitle changed
      console.log('debouncedSearchString', debouncedSearchString);
  }, [debouncedSearchString]);
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ searchString: event?.target?.value});
  };

  return (
    <>
      <input type="text" placeholder="Search..." onChange={handleChange} />
      <p>Debounced value: {debouncedSearchString}</p>
      <p>Pure value: {state.searchString}</p>
    </>
  );
}

export default App;

