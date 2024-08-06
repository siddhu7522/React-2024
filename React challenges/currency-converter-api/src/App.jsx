import React, { useEffect, useState } from 'react'


// `https://api.frankfurter.app/latest?amount=100&from=EUR&to=USD`
function App() {
  const [amount, setAmount] = useState(1)
  const [from, setFrom] = useState("EUR")
  const [to, setTo] = useState("USD")
  const [result, setResult] = useState("")
  const [loading, setLoading] = useState(false)

  const handleAmount = (e) => {
    setAmount(Number(e.target.value))
  }
  const handleFrom = (e) => {
    setFrom(e.target.value)
  }
  const handleTo = (e) => {
    setTo(e.target.value)
  }
  console.log(amount)

  useEffect(() => {
    const convertCurrency = async () => {
      setLoading(true)
      const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`)
      const data = await res.json()
      console.log(data)
      // if(to === "USD"){
      //   setResult(data.rates.USD)
      // }
      // if(to === "EUR"){
      //   setResult(data.rates.EUR)
      // }
      // if(to === "CAD"){
      //   setResult(data.rates.CAD)
      // }
      // if(to === "INR"){
      //   setResult(data.rates.INR)
      // }
      //As an alternative approach if "to" includes in rates object then fetching the result
      if (data.rates && data.rates[to]) {
        setResult(data.rates[to])
        setLoading(false)
      }
     else {
        setResult("Conversion rate not available for selected currency")
        setLoading(false)
      }

    }
    convertCurrency()
  }, [amount, from, to])
  console.log(result)

  return (
    <div>
      <input value={amount} onChange={handleAmount} type="text" />
      <select value={from} onChange={handleFrom}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select value={to} onChange={handleTo} >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      {loading ? <p>Loading....</p> : <p>{result}</p>}
    </div>
  )
}

export default App