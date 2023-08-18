import { useEffect } from "react"
import { database } from "./services/firebase";
import { push, ref, set } from "firebase/database";

const pasrseCSV = (text) => {
  const result = {
    header: [],
    data: [],
  }

  const [header, ...content] = text.split('\n');
 

  result.header = header.split(',');
  
  content.forEach((item: string) => {
    result.data.push(item.split(','));
  });


  console.log(result)

  return result;

};


async function handleSendCsvToDatabase(){
  const csvRef = ref(database, 'items');
  
  const firebaseCsv = await push(csvRef);
  set(firebaseCsv, {
  })
}



export default function App() {
  useEffect(() => {
    fetch('/endure-data.csv')
      .then((r) => r.text())
      .then((text) => {
        (pasrseCSV(text));
      });
  }, []);

  return (
    <div className="App">
    </div>
  )
}