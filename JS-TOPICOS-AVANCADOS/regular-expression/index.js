function PhoneNumber(phoneNumberString){
    const fixedString = phoneNumberString.replace(/[\sa-zA-Z]/g, "")
    this.countryCode = fixedString.match(/(?<=\+)\d{1,3}/)
}

console.log(new PhoneNumber("+55 (11) 9 3440-0158"))
console.log(new PhoneNumber("+1 (11) 9 a440-015-12aaa"))