export function readTextFile(file)
{   
    let text = "";
    fetch(file).then((response) => {
      text=response;
    })
    .catch((err)=>{
      console.log(err);
    });

    return text;
}

export function parseCSV(csvString){
  let csvArray = csvString.split(/\n/);
  return csvArray;
}

export function popHeaders(csvArray){
  return csvArray.shift().split(',')
}
