import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
 const [amount,setAmount] =useState(0)
 const [convertedamount,setConvertedAmount] =useState(0)
 const [from,setFrom] =useState("usd")
 const [to,setTo] =useState("inr")

 const currencyInfo=useCurrencyInfo(from)
 const options=Object.keys(currencyInfo)

 const swap= ()=> {
  setFrom(to)
  setTo(from)
  setAmount(0)
  setConvertedAmount(0)
 }

 const convert = ()=> {
   setConvertedAmount(amount * currencyInfo[to])
 }

  return (
    <>
      <form onSubmit={(e)=> {
        e.preventDefault()
        convert()
      }}>
     <div className='flex flex-col items-center space-y-4 p-6 bg-gray-100 rounded-lg shadow-md max-w-md mx-auto' style={{backgroundColor: 'black'}} >
      <div className='w-full'>
        <InputBox
         label="From"
         amount={amount}
         selectCurrency={from}
         onCurrencyChange={(currency)=> setFrom(currency)}
         onAmountChange={(amount)=> setAmount(amount)}
         currencyOptions={options}
        />
      </div>
      <button type='button' className=' w-full bg-gray-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition' onClick={swap}>swap</button>
      <div className='w-full'>
        <InputBox
          label="To"
          amount={convertedamount}
          selectCurrency={to}
          onCurrencyChange={(currency)=> setTo(currency)}
          currencyOptions={options}
        />
      </div>
      <button type='submit' className='w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-blue-500 transition'>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>
     </div>
     </form>
    </>
  )
}


export default App
