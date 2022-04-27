let stateInformation = [
    {
    stateAbbr: "AL",
    stateName: "Alabama",
    capital: "Montgomery",
    population: "4,903,185"
    },
    {
    stateAbbr: "AK",
    stateName: "Alaska",
    capital: "Juneau ",
    population: "731,545"
    },
    {
    stateAbbr: "AZ",
    stateName: "Arizona",
    capital: "Phoenix",
    population: "7,278,717"
    },
    {
    stateAbbr: "AR",
    stateName: "Arkansas",
    capital: "Little Rock",
    population: "3,017,825"
    },
    {
    stateAbbr: "CA",
    stateName: "California",
    capital: "Sacramento",
    population: "39,512,223"
    },
    {
    stateAbbr: "CO",
    stateName: "Colorado",
    capital: "Denver",
    population: "5,758,736"
    },
    ];
    async function getInformation() {
 // Declare variables
 let inputForm = document.forms["myForm"]["state"].value.toUpperCase()
 let textArea = document.getElementById('result');
 let result = null;
 // Loop through all list items
 if(inputForm != "") {
  let inputSplit = inputForm.split("")
  if (inputSplit.length == 2) {
  let state = stateInformation.filter((x) => x.stateAbbr == inputForm)
  if (state.length == 1) {
  textArea.innerHTML = "Thanks for your inquiry, here is the information you requested: " + "<br>" + "<br>" + "State abbr = " + state[0].stateAbbr + "<br>" + "State Name = " + state[0].stateName + "<br>" + "Capital = " + state[0].capital + "<br>" + "Population = " + state[0].population;
  textArea.style.color = "black"
  }else{
  textArea.innerHTML = "The database does not have information about this state, we only have information about AL, AK, AZ, AR, CA, and CO";
  textArea.style.color = "red"
  }
  }else {
  console.log(inputSplit)
  let state = stateInformation.filter((x) => x.stateName.toUpperCase() == inputForm)
  console.log(state)
  if (state.length == 1) {
  textArea.innerHTML ="Thanks for your inquiry, here is the information you requested: " + "<br>" + "<br>" + "State abbr = " + state[0].stateAbbr + "<br>" + "State Name = " + state[0].stateName + "<br>" + "Capital = " + state[0].capital + "<br>" + "Population = " + state[0].population;
  textArea.style.color = "black"
  }else{
  textArea.innerHTML = "The database does not have information about this state, we only have information about AL, AK, AZ, AR, CA, and CO";
  textArea.style.color = "red"
  }
  }
 
 
 }else {
  textArea.innerHTML = "Input State";
  textArea.style.color = "red"
 }
}
