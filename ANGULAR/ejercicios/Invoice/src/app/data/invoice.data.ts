import { invoice } from "../model/Invoice";



export const invoiceData : invoice = {
    id: "001",
    company: {
        ruc: "1234156112",
        name: "Clear Minds Consultores",
        direction: {
            city: "Quito",
            principalStreet: "JUan Pablo Sanz",
            secondaryStreet: "Iñaquito",
            code: "170135"
        },
    },
    customer: {
        id: "1727701647",
        name: "Antony",
        surname: "Chaguamate",
        adress: {
            city: "Quito",
            principalStreet: "N70",
            secondaryStreet: "Oe102",
            code: "N96"
        }
    },
    items: [
        {
            id: 100,
            product: {
                id: 500,
                name: "Papas RUfles",
                price: 1.50,
                description: "Papas Ruflessss",
                category: {
                    id: 1,
                    name: "Snacks"
                }
            },
            quantity: 23,
        },
        {
            id: 101,
            product: {
                id: 550,
                name: "Doritos",
                price: 0.50,
                description: "De Queso",
                category: {
                    id: 1,
                    name: "Snacks"
                }
            },
            quantity: 23,
        },        {
            id: 102,
            product: {
                id: 580,
                name: "Kchitos",
                price: 0.30,
                description: "Para Kchudos",
                category: {
                    id: 1,
                    name: "Snacks"
                }
            },
            quantity: 23,
        },
    ],
}
