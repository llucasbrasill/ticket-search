import React from 'react'

function Search() {
  const [searchTerm, setSearchTerm] = React.useState('')

  const [searcht, setSearcht] = React.useState('11')

  React.useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      console.log(searchTerm)
      setSearcht(false)
    }, 200)
    setSearcht(true)
    return () => clearTimeout(delayDebounceFn)
  }, [search])

  return (
    <div>
      <p>{searcht}</p>
      < input
        autoFocus
        type='text'
        autoComplete='off'
        className='live-search-field'
        placeholder='Search here...'
        onChange={(e) => setSearchTerm(e.target.value)
        }
      /></div>


  )
}

export default Search;