function validateForm() {
let email = document.forms["myForm"]["email"].value;
let personal = document.getElementById("personal_account").checked;
let company = document.getElementById("company_account").checked;
let gender = document.forms["myForm"]["gender"].value;
let country = document.forms["myForm"]["country"].value;
console.log(email, personal, company, gender, country)
if (email == "" && country == "none" && gender == "" && !company && !personal) {
alert("Fill all required fields");
document.getElementById("email_val_text").style.display = "block";
document.getElementById("country_val_text").style.display = "block";
document.getElementById("account_val_text").style.display = "block";
document.getElementById("gender_val_text").style.display = "block";
return false;
}else if (email != "" && country == "none" && gender == "" && !company && !personal) {
alert("Fill all required fields");
document.getElementById("email_val_text").style.display = "none";
document.getElementById("country_val_text").style.display = "block";
document.getElementById("account_val_text").style.display = "block";
document.getElementById("gender_val_text").style.display = "block";
return false;
}else if (email == "" && country != "none" && gender == "" && !company && !personal) {
alert("Fill all required fields");
document.getElementById("email_val_text").style.display = "block";
document.getElementById("country_val_text").style.display = "none";
document.getElementById("account_val_text").style.display = "block";
document.getElementById("gender_val_text").style.display = "block";
return false;
}else if (email != "" && country != "none" && gender == "" && !company && !personal) {
alert("Fill all required fields");
document.getElementById("email_val_text").style.display = "none";
document.getElementById("country_val_text").style.display = "none";
document.getElementById("account_val_text").style.display = "block";
document.getElementById("gender_val_text").style.display = "block";
return false;
}else if (email == "" && country != "none" && gender != "" && !company && !personal) {
alert("Fill all required fields");
document.getElementById("email_val_text").style.display = "block";
document.getElementById("country_val_text").style.display = "none";
document.getElementById("account_val_text").style.display = "block";
document.getElementById("gender_val_text").style.display = "block";
return false;
}else if (email == "" && country == "none" && gender != "" && !company && !personal) {
alert("Fill all required fields");
document.getElementById("email_val_text").style.display = "block";
document.getElementById("country_val_text").style.display = "block";
document.getElementById("account_val_text").style.display = "block";
document.getElementById("gender_val_text").style.display = "none";
return false;
}else if (email == "" && country == "none" && gender == "" && (company ||personal)) {
alert("Fill all required fields");
document.getElementById("email_val_text").style.display = "block";
document.getElementById("country_val_text").style.display = "block";
document.getElementById("account_val_text").style.display = "none";
document.getElementById("gender_val_text").style.display = "block";
return false;
}else if (email != "" && country == "none" && gender == "" && (company ||personal)) {
alert("Fill all required fields");
document.getElementById("email_val_text").style.display = "none";
document.getElementById("country_val_text").style.display = "block";
document.getElementById("account_val_text").style.display = "none";
document.getElementById("gender_val_text").style.display = "block";
return false;
}else if (email == "" && country != "none" && gender == "" && (company ||personal)) {
alert("Fill all required fields");
document.getElementById("email_val_text").style.display = "block";
document.getElementById("country_val_text").style.display = "none";
document.getElementById("account_val_text").style.display = "none";
document.getElementById("gender_val_text").style.display = "block";
return false;
}else if (email == "" && country == "none" && gender != "" && (company ||personal)) {
alert("Fill all required fields");
document.getElementById("email_val_text").style.display = "block";
document.getElementById("country_val_text").style.display = "block";
document.getElementById("account_val_text").style.display = "none";
document.getElementById("gender_val_text").style.display = "none";
return false;
}else if (email != "" && country != "none" && gender == "" && (!company || !personal)) {
alert("Fill all required fields");
document.getElementById("email_val_text").style.display = "none";
document.getElementById("country_val_text").style.display = "none";
document.getElementById("account_val_text").style.display = "none";
document.getElementById("gender_val_text").style.display = "block";
return false;
}else if (email != "" && country != "none" && gender == "" && (!company || !personal)) {
alert("Fill all required fields");
document.getElementById("email_val_text").style.display = "none";
document.getElementById("country_val_text").style.display = "none";
document.getElementById("account_val_text").style.display = "none";
document.getElementById("gender_val_text").style.display = "block";
return false;
}else if (email != "" || country != "none" || gender != "" || (company ||personal)) {
alert("Fill all required fields");
document.getElementById("email_val_text").style.display = "block";
document.getElementById("country_val_text").style.display = "block";
document.getElementById("account_val_text").style.display = "none";
document.getElementById("gender_val_text").style.display = "block";
return false;
}else if ( email == "" ) {
alert("Fill all required fields");
document.getElementById("email_val_text").style.display = "block";
console.log(personal, company)
return false;
}else if ( country == "" ) {
alert("Fill all required fields");
document.getElementById("country_val_text").style.display = "block";
return false;
}else if ( gender == "" ) {
alert("Fill all required fields");
document.getElementById("gender_val_text").style.display = "block";
return false;
}else if ( !company && !personal ) {
alert("Fill all required fields");
document.getElementById("account_val_text").style.display = "block";
return false;
};
}