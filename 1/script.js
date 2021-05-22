var jcontent = {
    "first name":"Zehra",
    "last name":"Merve"
}

var output = document.getElementById('output');


const api_url = 'https://goquotes-api.herokuapp.com/api/v1/random?count=1';

async function getISS(){
    const response = await fetch(api_url);
    const data = await response.json();
    document.getElementById('quote').textContent = data.quotes[0].text;
    document.getElementById('auth').textContent = data.quotes[0].author;
    console.log(data.quotes[0].text);   
    console.log(data.quotes[0].author);
}


getISS(); 