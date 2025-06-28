import { useEffect, useState } from "react";

export const About = () => {
  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState('')

  const handleToggle = () => {
    setToggle(prevState => !prevState)
  }

  useEffect(() => {
    setTimeout(() => {
      setData({})
    }, 100)
  }, []);

  return (
    <div>
      <p data-testid="input-value">{value}</p>
      {toggle && <div data-testid="toggle-elem">Toggle</div>}
      {data && <div>data</div>}
      <h1>About page</h1>
      <button data-testid="toggle-btn" onClick={handleToggle}>Click me!</button>
      <input onChange={e => setValue(e.target.value)} type="text" placeholder="input value"/>
    </div>
  );
};