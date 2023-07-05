import {useState} from 'react';

export function App() {
    const [item, setItem] = useState('')
    const [info, setInfo] = useState(false);

  const sub = e => {
    e.preventDefault();
    console.log('item:', item);
    setInfo(true)
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
    </form>
    {info && <p>{item}</p>}
    </>
  )
}
export default App