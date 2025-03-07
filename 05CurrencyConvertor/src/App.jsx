import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo';

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertAmount, setConvertAmount] = useState(0)
  const currencyInfo = useCurrencyInfo(from)

  const option = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertAmount(amount)
    setAmount(convertAmount)
  }

  const convert = () => {
    const convertedValue = (amount * currencyInfo[to]).toFixed(2);
    setConvertAmount(Number(convertedValue));
  }

  return (   
      <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat flex align-center justify-center"
        style={{
          backgroundImage: `url('https://www.shutterstock.com/image-vector/abstract-money-exchange-two-hands-600nw-2413796235.jpg')`,
        }}
      >
        <div className='w-60 mx-5'>
        <img className='w-full rounded-xl' src="https://media.istockphoto.com/id/1297483389/photo/masala-tea-chai.jpg?s=612x612&w=0&k=20&c=Pv-QROSSywNh_qzHIIjHJeJB7OT0ujrKQsSiTgOmJAs=" alt="chai" />
      </div>
        <div className="w-500">
          <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert()
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={option}
                  onCurrencyChange={(curr) => setFrom(curr)}
                  onAmountChange={(amount) => setAmount(amount)}
                  selectCurrency={from}
                />
              </div>
              <div className="relative w-full h-0.5">
                <button
                  type="button"
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label="To"
                  amount={convertAmount}
                  currencyOptions={option}
                  onCurrencyChange={(curr) => setTo(curr)}
                  selectCurrency={to}
                  amountDisable
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                Convert {`${from.toUpperCase()} to ${to.toUpperCase()}`}
              </button>
            </form>
          </div>
        </div>
      </div>
  )
}

export default App
