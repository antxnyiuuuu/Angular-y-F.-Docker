//src/invoiceData.js
export const invoiceData = {
    id: 'INV-001',
    company: {
        ruc: '1234567890',
        name: 'Tech Solutions',
        address: {
            city: 'San Francisco',
            principalStreet: '123 Tech Lane',
            secondaryStreet: 'Suite 100',
            code: '94105'
        },
    },
    customer: {
        id: '1724865671',
        name: 'Bryan',
        surname: 'Raura',
        address: {
            city: 'Los Angeles',
            principalStreet: '456 Elm Street',
            secondaryStreet: 'Canelo',
            code: '90001',
        }
    },
    items: [
        {
            id: '1',
            product: {
                idproducto: 1,
                name: 'Laptop',
                price: 1200,
                description: 'High-performance laptop',
                category: {
                    id: 1,
                    name: 'Electronics'
                }
            },
            quantity: 2
        },
        {
            id: '2',
            product: {
                idproducto: 2,
                name: 'Mouse',
                price: 25,
                description: 'Wireless mouse',
                category: {
                    id: 2,
                    name: 'Accessories'
                }
            },
            quantity: 3
        }
    ]
}

