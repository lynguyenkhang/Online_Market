const checkPhoneNumber = phoneNumber => {
    const vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    if(vnf_regex.test(phoneNumber)){
        return true
    } else {
        return false
    }
}

export default checkPhoneNumber