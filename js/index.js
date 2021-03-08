function changeColorToGreen() {
    BM("#qn1").removeClass('red-color');
    BM("#qn1").addClass('green-color');
}

function changeColorToRed() {
    BM("#qn1").removeClass('green-color');
    BM("#qn1").addClass('red-color');
}

function showDatasetList() {
    var datasetKey = BM("#dataset").data();

    console.log(datasetKey);
    BM("#dataset-json").html(JSON.stringify(datasetKey));
}

function showDatasetNameValue() {
    var dataValue = BM("#dataset").data('name');

    BM("#dataset-json").html(dataValue);
}

var index = 1;
function insertDom() {
    index = index + 1;
    BM("#appendHere").append('<p>This is row number ' + index + '</p > ')
}


function getJsonFromApi() {
    var url = 'https://restcountries.eu/rest/v2/name/nepal';

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    var response = xmlHttp.responseText;

    BM("#apiresult").html(JSON.stringify(response));

}


function getValue(selector) {
    var val = BM(selector).val();
    alert(val);
}

function setValue(selector, value) {
    BM(selector).val(value);
}




/* Question number 2, calling 3 request at once and resolve response at same time*/
function makeRequest(country) {
    var url = 'https://restcountries.eu/rest/v2/name/' + country;

    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", url, false); // false for synchronous request
    xmlHttp.send(null);
    var response = xmlHttp.responseText;

    console.log(response);

    return response;
}
async function process(arrayOfPromises) {
    let responses = await Promise.all(arrayOfPromises);
    
    BM("#response1").html(responses[0]);
    BM("#response2").html(responses[1]);
    BM("#response3").html(responses[2]);
    
    return;
}
async function handler() {
    let arrayOfPromises = [
        makeRequest('nepal'),
        makeRequest('india'),
        makeRequest('china')
    ];

    await process(arrayOfPromises);
}