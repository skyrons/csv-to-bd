import { useState } from "react"
import { database } from "./services/firebase";
import { push, ref, set } from "firebase/database";
import CSVReader from 'react-csv-reader'
// import { splitEasy } from "csv-split-easy";

import './app.css'
import icon from './assets/file-csv.svg'


export default function App() {

  const pasrseCSV = (text) => {
    
    const result = {
      product: {
        commodityCode: {
          header: String,
          data: []
        },
        countryOfManufacture: {
          header: String,
          data: []
        },
        construction: {
          header: String,
          data: []
        },
        material1: {
          header: String,
          data: {
            materialType: String,
            percentage: Number
          }
        },
        material2: {
          header: String,
          data: {
            materialType: String,
            percentage: Number
          }
        },
        material3: {
          header: String,
          data: {
            materialType: String,
            percentage: Number
          }
        },
        material4: {
          header: String,
          data: {
            materialType: String,
            percentage: Number
          }
        },
        material5: {
          header: String,
          data: {
            materialType: String,
            percentage: Number
          }
        }
      }
      
    }
  
    const [header, ...content]= text;

    for (let i = 0; i < header.length; i++) {
      for (let j = 0; j < content.length; j++) {
        result.product[j] = [
          result.product.commodityCode.header = header[0],
          result.product.commodityCode.data[j] = content[j][0],
          result.product.countryOfManufacture.header = header[1],
          result.product.countryOfManufacture.data[j] = content[j][1],
          result.product.construction.header = header[2],
          result.product.construction.data[j] = content[j][2],
          result.product.material1.header = header[3],
          result.product.material1.data.materialType[j] = content[j][3],
          result.product.material1.data.percentage[j] = content[j][4],
          result.product.material2.header = header[5],
          result.product.material2.data.materialType[j] = content[j][5],
          result.product.material2.data.percentage[j] = content[j][6],
          result.product.material3.header = header[7],
          result.product.material3.data.materialType[j] = content[j][7],
          result.product.material3.data.percentage[j] = content[j][8],
          result.product.material4.header = header[9],
          result.product.material4.data.materialType[j] = content[j][9],
          result.product.material4.data.percentage[j] = content[j][10],
          result.product.material5.header = header[11],
          result.product.material5.data.materialType[j] = content[j][11],
          result.product.material5.data.percentage[j] = content[j][12]
        ]
      }
    }
   

    // for (let i = 0; i < result.data.length; i++){
    //   for (let j = 0; j <=13; j++) {
    //     if (result.data[i][j] == '') {
    //       result.data[i][j] = null;
    //     }
    //   }
    // }
    console.log(result.product[1]);
  
    // const csvRef = ref(database, 'Product');
    
    // const firebaseCsv = push(csvRef);
    // set(firebaseCsv, {
    //   Product: {
    //     CommodityCode: result.product.commodityCode
        
    //   }
    // })
  
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

          <CSVReader onFileLoaded={
            (data) => handleReciveFIle(data)
            } />

          <button 
            className='button' 
            onClick={ () => 
            pasrseCSV(file) }>
            <img src={icon} alt="" 
          />
            Send
          </button>
        </div>
        
      </main>
    </div>
  )
}