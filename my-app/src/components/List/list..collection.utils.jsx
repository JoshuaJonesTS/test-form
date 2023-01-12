function createRows(customerList) {
    let rows = [];

    customerList.forEach(customer => {
        let row = {
            id: customer.id,
            name: `${customer.firstName} ${customer.lastName}`,
            age: customer.age
        }
        rows.push(row);
    })

    return rows;
}

export default createRows;