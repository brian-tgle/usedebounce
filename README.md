# useDebounce

> Made with create-react-library

[![NPM](https://img.shields.io/npm/v/usedebounce.svg)](https://www.npmjs.com/package/usedebounce) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save usedebounce
```

## Usage

```tsx
import React, { useState, useEffect } from 'react'
import useDebounce from 'usedebounce'

const SearchComponent = () => {
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
```

## License

 © [brian-tgle](https://github.com/brian-tgle)
