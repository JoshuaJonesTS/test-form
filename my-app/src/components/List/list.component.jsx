import { useQuery } from '@apllo/client';
// import { ALL_CUSTOMERS } from 'graphql/customer/queries';
// import { createRows } from './AllCustomersList.collection.utils.jsx';

const AllCustomerList = () => {
    const { data, loading, error } = useQuery();

    if(loading) {return /*<Loader />*/}

    let rows = []
    if(data && data.allCustomers) {
        /*rows = [...createRows(data.allCustomers)];*/
    }
}