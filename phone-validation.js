function telephoneCheck(str) {
     let re=/^((?:1?\s?)((\((\d{3})\))|(\d{3})))[-. ]?(\d{3})[-. ]?(\d{4})$/gm;
     return re.test(str)

}

telephoneCheck("1555-555-5555")
