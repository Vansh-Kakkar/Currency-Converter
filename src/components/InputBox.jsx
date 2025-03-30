import React, {useId} from 'react'

function InputBox({label,amount,onAmountChange,onCurrencyChange,amountDisable,currencyDisable,selectCurrency="usd",currencyOptions=[],className=''}) {
    const numberId=useId()
    return (
        <>
        <div className='flex flex-col space-y-4 p-4 bg-gray-100 rounded-lg shadow-md max-w-sm'>
          <div className='flex flex-col'>
            <label htmlFor={numberId} className='text-sm font-semibold text-gray-700 mb-1 px-3 py-2 focus:ring-2 focuse:ring-blue-400 focus:outline-none'>
               {label}
            </label>
            <input className='border border-gray-300 rounded-lg' id={numberId} type="number" value={amount} disabled={amountDisable} placeholder='Amount' onChange={(e)=> onAmountChange && onAmountChange(Number(e.target.value))} />  
          </div>
          <div className='flex flex-col'> 
            <p className='text-black-400 text-left'>Currency Type</p>
            <select className='text-sm font-semibold text-black-700 mb-1 px-3 py-2 focus:ring-2 focuse:ring-blue-400 focus:outline-none' value={selectCurrency} disabled={currencyDisable} onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)} >
                    {currencyOptions.map((currency)=> (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
            </select>
            
           
          </div>
        </div>
        </>
    )
}

export default InputBox
