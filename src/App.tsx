import { useEffect, useState } from "react"

import { database } from "./services/firebase";
import { onValue, push, ref, set } from "firebase/database";

import CSVReader from 'react-csv-reader'

import './app.css'
import icon from './assets/file-csv.svg'

type FirebaseProduct = Record<string, {
  commodityCode: string,
  countryOfManufacture: string,
  construction: string,
  materials: {
    material: {
      materialType: string,
      percentage: string
    }
  }
  
}>

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
            materialType: [],
            percentage: []
          }
        },
        material2: {
          header: String,
          data: {
            materialType: [],
            percentage: []
          }
        },
        material3: {
          header: String,
          data: {
            materialType: [],
            percentage: []
          }
        },
        material4: {  
          header: String,
          data: {
            materialType: [],
            percentage: []
          }
        },
        material5: {
          header: String,
          data: {
            materialType: [],
            percentage: []
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
    console.log(result);
  
    const csvRef = ref(database, 'Product');
    
    const firebaseCsv = push(csvRef);
    set(firebaseCsv, {
      Product: {
        CommodityCode: result.product.commodityCode,
        CountryOfManufacture: result.product.countryOfManufacture,
        Construction: result.product.construction,
        Materials: {
          Material_1: {
          Header: result.product.material1.header,
          Material: result.product.material1.data
          },
          Material_2: {
          Header: result.product.material2.header,
          Material: result.product.material2.data
          },
          Material_3: {
          Header: result.product.material3.header,
          Material: result.product.material3.data
          },
          Material_4: {
          Header: result.product.material4.header,
          Material: result.product.material4.data
          },
          Material_5: {
          Header: result.product.material5.header,
          Material: result.product.material5.data
          }
        } 
          
      }
    })
    
    return result;
  
  };


  const [ file, setFile ] = useState ([])


  function handleReciveFIle (data){
    setFile(data);
  }

    
  useEffect(() => {
    
    const showProductsRef = ref (database, 'Product/-Nd7DCDB0nKTC90eVv5e/Product');
    onValue(showProductsRef, product => {
      const databaseProduct = product.val();
      const firebaseProduct: FirebaseProduct = databaseProduct;
      const parsedProduct = Object.entries(firebaseProduct)

      const parsedCode = databaseProduct.CommodityCode.data;
      const parsedCountry = databaseProduct.CountryOfManufacture.data;
      const parsedConstruction = databaseProduct.Construction.data;

      const parsedMaterial1type = databaseProduct.Materials.Material_1.Material.materialType;
      const parsedMaterial1Percentage = databaseProduct.Materials.Material_1.Material.percentage;
      const parsedMaterial2type = databaseProduct.Materials.Material_2.Material.materialType;
      const parsedMaterial2Percentage = databaseProduct.Materials.Material_2.Material.percentage;
      const parsedMaterial3type = databaseProduct.Materials.Material_3.Material.materialType;
      const parsedMaterial3Percentage = databaseProduct.Materials.Material_3.Material.percentage;
      const parsedMaterial4type = databaseProduct.Materials.Material_4.Material.materialType;
      const parsedMaterial4Percentage = databaseProduct.Materials.Material_4.Material.percentage;
      const parsedMaterial5type = databaseProduct.Materials.Material_5.Material.materialType;
      const parsedMaterial5Percentage = databaseProduct.Materials.Material_5.Material.percentage;
      const parsedMaterial6type = databaseProduct.Materials.Material_6.Material.materialType;
      const parsedMaterial6Percentage = databaseProduct.Materials.Material_6.Material.percentage;
      const parsedMaterial7type = databaseProduct.Materials.Material_7.Material.materialType;
      const parsedMaterial7Percentage = databaseProduct.Materials.Material_7.Material.percentage;
      const parsedMaterial8type = databaseProduct.Materials.Material_8.Material.materialType;
      const parsedMaterial8Percentage = databaseProduct.Materials.Material_8.Material.percentage;
      const parsedMaterial9type = databaseProduct.Materials.Material_9.Material.materialType;
      const parsedMaterial9Percentage = databaseProduct.Materials.Material_9.Material.percentage;
      const parsedMaterial10type = databaseProduct.Materials.Material_10.Material.materialType;
      const parsedMaterial10Percentage = databaseProduct.Materials.Material_10.Material.percentage;

      const dataItem: FirebaseProduct = [{}];
      for(let i = 0; i < parsedProduct.length; i++) {
        for(let j = 0; j < parsedCode.length; j++) {
          dataItem[j] = {
            commodityCode: parsedCode[j],
            countryOfManufacture: parsedCountry[j],
            construction: parsedConstruction[j],
            materials: {
              material_1: {
                materialType: parsedMaterial1type[j],
                percentage: parsedMaterial1Percentage[j]
              },
              material_2: {
                materialType: parsedMaterial2type[j],
                percentage: parsedMaterial2Percentage[j]
              },
              material_3: {
                materialType: parsedMaterial3type[j],
                percentage: parsedMaterial3Percentage[j]
              },
              material_4: {
                materialType: parsedMaterial4type[j],
                percentage: parsedMaterial4Percentage[j]
              },
              material_5: {
                materialType: parsedMaterial5type[j],
                percentage: parsedMaterial5Percentage[j]
              },
              material_6: {
                materialType: parsedMaterial6type[j],
                percentage: parsedMaterial6Percentage[j]
              },
              material_7: {
                materialType: parsedMaterial7type[j],
                percentage: parsedMaterial7Percentage[j]
              },
              material_8: {
                materialType: parsedMaterial8type[j],
                percentage: parsedMaterial8Percentage[j]
              },
              material_9: {
                materialType: parsedMaterial9type[j],
                percentage: parsedMaterial9Percentage[j]
              },
              material_10: {
                materialType: parsedMaterial10type[j],
                percentage: parsedMaterial10Percentage[j]
              },
            }
            }
          
        }
       
      }
      

      console.log(parsedProduct);
      console.log(parsedCode[1],parsedCountry[1], parsedConstruction[1]);
      console.log(dataItem[0]);
    })
  },[])
  
  

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