import { useState } from "react"

const Label = ({ text }) => <div><h2>{text}</h2></div>

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}

const Display = ({ text, value }) => (
    <div>{text} {value}</div>
)

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = (good + bad + neutral)
  const average = (good - bad) / total
  const positive = good * 100 / total

  return (
    <div>
      <Label text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Label text='statistics' />
      <Display text='good' value={good} />
      <Display text='neutral' value={neutral} />
      <Display text='bad' value={bad} />
      <Display text='all' value={total} />
      <Display text='average' value={average} />
      <div>
        positive: {positive} %
      </div>
    </div>
  )
}

export default App
