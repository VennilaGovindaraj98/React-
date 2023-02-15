const getFullName = (Fname , Lname) =>{
    return `${Fname} ${Lname}`
}

const actualFullName = getFullName('Vennila' , 'Raj')
const expectedFullName = "VennilaRaj"

if (actualFullName !== expectedFullName){
     throw new Error(`${actualFullName} is not equal to ${expectedFullName}`)
}



