import { useCounter } from "./hooks/useCounter"
import { useLocalStorage } from "./hooks/useLocalStorage"

function App() {
  const [count, increment, decrement] = useCounter(0)
  const [name, setName] = useLocalStorage("username", "")

  return (
    <>
      <p>O contador está em {count}</p>
      <button onClick={increment}>Clique para aumentar</button>
      <button onClick={decrement}>Clique para diminuir</button>
      <br />
      <br />
      <br />
      <br />
      <input value={name} onChange={(event) => setName(event.target.value)} />
    </>
  )
}

export default App
