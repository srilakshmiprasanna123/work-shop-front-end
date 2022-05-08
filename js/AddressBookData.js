/*UC7 getter setter form validation and to string method  */
class AddressBookData {

    get name() {
        return this._name;
    }
    set name(name) {
        let nameRegex = RegExp('^([A-Z]{1}[a-z]{2,}.)+$');
        if (nameRegex.test(name))
            this._name = name;
        else throw "Name is Incorrect";
    }

    get address() {
        return this._address;
    }
    set address(address) {
        let addressRegex = RegExp('^([A-Za-z0-9/.,-]{3,}.)+$')
        if (addressRegex.test(address))
            this._address = address;
        else throw "Invalid Address"
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        let phoneRegex = RegExp("^[0-9]{10}$")
        if (phoneRegex.test(phoneNumber))
            this._phoneNumber = phoneNumber;
        else throw "Invalid Phone Number"
    }

    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }

    get zipcode() {
        return this._zipcode;
    }
    set zipcode(zipcode) {
        this._zipcode = zipcode;
    }

    // toString() method
    toString() {
        return "id : " + this.id + ", Name : " + this.name + ", Address : " + this.address + ", Phone : " + this.phoneNumber +
            ", State : " + this.state + ", City : " + this.city + ", ZipCode : " + this.zipcode;
    }
}