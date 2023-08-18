import { useState } from "react"
import { database } from "./services/firebase";
import { push, ref, set } from "firebase/database";
import CSVReader from 'react-csv-reader'


export default function App() {

  const pasrseCSV = (text) => {
    const result = {
      header: [],
      data: [],
    }
  
    const [header, ...content] = text;
   
  
    result.header = header;
    
    content.forEach((item: string) => {
      result.data.push(item);
    });
  
  
    console.log(result);
  
    const csvRef = ref(database, 'items');
    
    const firebaseCsv = push(csvRef);
    set(firebaseCsv, {
      header: result.header,
      data: result.data
    })
  
    return result;
  
  };

  const [ file, setFile ] = useState ([])


  function handleReciveFIle (data){
    setFile(data);
  }

  return (
    <div className="App">
      <label >Add CSV file</label>
      <CSVReader onFileLoaded={(data) => handleReciveFIle(data)} />
      <button onClick={ () => pasrseCSV(file) }>Send</button>
    </div>
  )
}