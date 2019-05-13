export function readTextFile(file)
{   
    let text = "";
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
              text = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);

    return text;
}