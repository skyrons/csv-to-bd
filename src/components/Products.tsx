export type Material = [
    material: {
      materialType: string,
      percentage: string
    }
]

type ProductProps = {
    key: string,
    commodityCode: string,
    countryOfManufacture: string,
    construction: string,
    materials: Material
}

export function Products({
    commodityCode,
    countryOfManufacture,
    construction,
    materials
}:ProductProps) {
    
    return(
        <div className="Produto">
            <p>{commodityCode}</p>
            <p>{countryOfManufacture}</p>
            <p>{construction}</p>
            <ul>{materials?.map( (material, index) =>{
                return(
                    <div key={index}>
                        <li> {material.materialType} </li>  
                        <li> {material.percentage} </li>
                    </div>
                  
                )
            })}</ul>
        </div>
    );
}