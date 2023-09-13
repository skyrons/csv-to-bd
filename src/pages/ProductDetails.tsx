import { useEffect, useState } from "react"

import { database } from "../services/firebase";
import { onValue, ref } from "firebase/database";

import { Products } from "../components/Products";



type FirebaseProduct = {
    commodityCode: string,
    countryOfManufacture: string,
    construction: string,
    materials: [
      material: {
        materialType: string,
        percentage: string
      }
    ]
}

type ProductType = {
    id: string,
    commodityCode: string,
    countryOfManufacture: string,
    construction: string,
    materials: [
      material: {
        materialType: string,
        percentage: string
      }
    ]
}


export default function ProductDetail() {
    const[product, setProduct] = useState<ProductType[]>([]);
    
        
    useEffect(() => {
        
        const showProductsRef = ref (database, 'Product/-Nd7DCDB0nKTC90eVv5e/Product');
        onValue(showProductsRef, product => {
            const databaseProduct = product.val();
            const firebaseProduct: FirebaseProduct = databaseProduct ?? {};
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

            const dataItem: FirebaseProduct = [];
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
            
            const parsedProduct1 = Object.entries(dataItem).map( ([key, value]) => {
                return {
                    id: key,
                    commodityCode: value.commodityCode,
                    construction: value.construction,
                    countryOfManufacture: value.countryOfManufacture,
                    materials: Object.entries(value.materials ?? {})
                }
            });
        
        setProduct(parsedProduct1[20]);
    })
  },[])
  
    return(
        <div>
            <button>Back</button>
            <br />
            <input type="text" />

            <div className="product-list">

                <Products 
                    key={product.id}
                    commodityCode={product.commodityCode}
                    countryOfManufacture={product.countryOfManufacture}
                    construction={product.construction}
                    materials={product.materials} 
                                                                
                />
                
                
            </div>         
        </div>
    )
}