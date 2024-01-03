class PhoneBook{
    constructor(id, name, phoneNumber, email) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
}

let PhoneBooks = [
    new PhoneBook(1, "Hải", 1231456489, "hai@email.com"),
    new PhoneBook(2, "Giang", 321654987, "giang@email.com"),
    new PhoneBook(3, "Nghĩa",1565489123, "nghia@email.com")
]

function displayPhoneNumber(products) {
    const phoneNumberListElement = document.getElementById('listProduct');

    phoneNumberListElement.innerHTML = '';
    phoneNumberListElement.innerHTML = '<tr>';

    for (let i = 0; i < PhoneBooks.length; i++) {
        const phoneBook = PhoneBooks[i];

        phoneNumberListElement.innerHTML += `
            <td class="text-center">${i+1}</td>
            <td class="text-center">${phoneBook.name}</td>
            <td class="text-center">${formatCurrency(phoneBook.phoneNumber)}</td> 
        `;
    }
    productListElement.innerHTML += '</tr>';
}
