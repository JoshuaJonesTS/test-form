import { useQuery } from '@apllo/client';
// import { ALL_CUSTOMERS } from 'graphql/customer/queries';
import createRows from './list..collection.utils';

const AllCustomerList = () => {
    const { data, loading, /*error*/ } = useQuery();

    if(loading) {return /*<Loader />*/}

    let rows = []
    if(data && data.allCustomers) {
        rows = [...createRows(data.allCustomers)];
    }

    return (
        <div>
            {
                rows.map(row => (
                    <div key={row.id}>
                        <div>{row.name}</div>
                        <div>{row.age}</div>
                    </div>
                ))
            }
        </div>
    );
}

export default AllCustomerList;