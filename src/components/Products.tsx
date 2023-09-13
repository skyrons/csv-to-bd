import './product.css'

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
}: ProductProps) {
    // console.log(materials)

    // const findMaterial = []
    // for(let i = 0; i < materials.length; i++) {
    //     percentage[i] = materials[i][1].percentage
    // }

    // console.log(percentage)

    return(
        <div className="product">
            <p>Commodity Code: {commodityCode}</p>
            <p>{countryOfManufacture}</p>
            <p>Construction: {construction}</p>
            <table>
                <th>
                    <td>Material</td>
                    <td>Percentage(%)</td>
                </th>
                <tbody>
                    
                    {materials[0].map( (material, index) =>{
                        return(
                            <div key={index}>
                                <td> {material.materialType} </td>
                                <td> {material.percentage}</td>
                            </div>
                        )
                    })}
                    {materials[1].map( (material, index) =>{
                        return(
                            <div key={index}>
                                <td> {material.materialType} </td>
                                <td> {material.percentage}</td>
                            </div>
                        )
                    })}
                    {materials[2].map( (material, index) =>{
                        return(
                            <div key={index}>
                                <td> {material.materialType} </td>
                                <td> {material.percentage}</td>
                            </div>
                        )
                    })}
                    {materials[3].map( (material, index) =>{
                        return(
                            <div key={index}>
                                <td> {material.materialType} </td>
                                <td> {material.percentage}</td>
                            </div>
                        )
                    })}
                    {materials[4].map( (material, index) =>{
                        return(
                            <div key={index}>
                                <td> {material.materialType} </td>
                                <td> {material.percentage}</td>
                            </div>
                        )
                    })}
                    {materials[5].map( (material, index) =>{
                        return(
                            <div key={index}>
                                <td> {material.materialType} </td>
                                <td> {material.percentage}</td>
                            </div>
                        )
                    })}
                    {materials[6].map( (material, index) =>{
                        return(
                            <div key={index}>
                                <td> {material.materialType} </td>
                                <td> {material.percentage}</td>
                            </div>
                        )
                    })}
                    {materials[7].map( (material, index) =>{
                        return(
                            <div key={index}>
                                <td> {material.materialType} </td>
                                <td> {material.percentage}</td>
                            </div>
                        )
                    })}
                    {materials[8].map( (material, index) =>{
                        return(
                            <div key={index}>
                                <td> {material.materialType} </td>
                                <td> {material.percentage}</td>
                            </div>
                        )
                    })}
                    {materials[9].map( (material, index) =>{
                        return(
                            <div key={index}>
                                <td> {material.materialType} </td>
                                <td> {material.percentage}</td>
                            </div>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
}