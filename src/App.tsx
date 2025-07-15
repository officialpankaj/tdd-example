import { useState } from 'react'
import { add } from './StringCalculator'

function App() {
  const [input, setInput] = useState('')
  const [result, setResult] = useState<number | string | null>(null)

  const handleCalculate = () => {
    try {
      const sum = add(input)
      setResult(sum)
    } catch (err: any) {
      setResult(err.message)
    }
  }

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>String Calculator (TDD Kata)</h1>
      <textarea
        rows={3}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{ width: '100%', marginBottom: '1rem' }}
        placeholder='Enter numbers like "1,2" or "//;\n1;2"'
      />
      <button onClick={handleCalculate}>Calculate</button>
      <div style={{ marginTop: '1rem' }}>
        {result !== null && <strong>Result: {result}</strong>}
      </div>
    </div>
  )
}

export default App
