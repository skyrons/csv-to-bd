import { useState } from "react"
import { database } from "./services/firebase";
import { push, ref, set } from "firebase/database";
import CSVReader from 'react-csv-reader'

import './app.css'
import icon from './assets/file-csv.svg'

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
    <div className="page">
      <aside>
        <img src="" alt="" />
      </aside>
      <main>
        <div className="main-content">  
          <h2>ADD A CSV FILE</h2>

          <CSVReader onFileLoaded={(data) => handleReciveFIle(data)} />

          <button className='button' onClick={ () => pasrseCSV(file) }>
            <img src={icon} alt="" />
            Send
          </button>
        </div>
        
      </main>
    </div>
  )
}