import {useState} from 'react'

const App = () => {
  const [item, setItem] = useState('')
  const [info, setInfo] = useState(false)

  const sub = e => {
    e.preventDefault();
    console.log('item: ', item);
    setInfo(true)
    setItem('');
  }

  return (
    <>
    <form onSubmit={sub}>
      <input
      type="text" 
      id="item"
      name='listitem'
      value={item}
      onChange={e => setItem(e.target.value)}
      />
    <button type='submit'>submit</button>
    {info && <p>A informação fornecida é: {info}</p>}
    </form>
    </>
  )
}

export default App