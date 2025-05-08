export const validateEmail = (email) => {
const emailRegx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
if(email){
const isValidEmail = emailRegx.test(email);
if(!isValidEmail)  return "Please enter a valid email address";
}
return null;
}
export const validatePassword = (password) => {
const passwordRegx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
if(password){
    const isValidPassword = passwordRegx.test(password);
    if(!isValidPassword) return "Password must be at least 8 characters long and contain at least one letter and one number";
}
return null;
}
export const validateName = (name) => {
const nameRegx = /^[a-zA-Z ]+$/;
if(name){
    const isValidName = nameRegx.test(name);
    if(!isValidName) return "Please enter a valid name";
}
return null;
}