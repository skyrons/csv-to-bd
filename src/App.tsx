import { useEffect } from "react"

export default function App() {
  useEffect(() => {
    fetch('/endure-data.csv')
      .then((r) => r.text())
      .then((text) => {
        console.log(text);
      });
  }, []);
  
  return (
    <div></div>
  )
}