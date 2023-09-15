/* eslint-disable @typescript-eslint/no-explicit-any */
import style from './product.module.css'

export type Material = [
    material: {
        materialType: string,
        percentage: string
    }
]

type ProductProps = {
  commodityCode: string | undefined,
  countryOfManufacture: string | undefined,
  construction: string | undefined,
  materials: Material[] | undefined  
}

export function Products({
  commodityCode,
  countryOfManufacture,
  construction,
  materials
}: ProductProps) {
    
  return (
    <div>
        <div className={style.infoProduct}>
            <p>Commodity Code: {commodityCode}</p>
            <p>Country of Manufacture: {countryOfManufacture}</p>
            <p>Construction: {construction}</p>
            <table className={style.table}>
                <thead>
                <tr>
                    <th>Material</th>
                    <th>(%)</th>
                </tr>
                </thead>
                <tbody>
                {materials?.map((material, index) => (
                    <tr key={index}>
                    <td>{material?.map(value => value.materialType)}</td>
                    <td>{material?.map(value => value.percentage)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
    </div>
    </div>
    
  );
}