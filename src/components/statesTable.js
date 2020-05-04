import React from 'react';
import DataTable from "react-data-table-component";
// import { } from 'styled-components';


const data = [{ id: 1, title: 'Conan the Barbarian', summary: 'Orphaned boy Conan is enslaved after his village is destroyed...', year: '1982', expanderDisabled: true, image: 'http://conan.image.png' }];
const columns = [
    {
        name: 'Title',
        sortable: true,
        cell: row => <div><div style={{ fontWeight: 700 }}>{row.title}</div>{row.summary}</div>,
    },
    {
        name: 'Year',
        selector: 'year',
        sortable: true,
        right: true,
    },
];


// The row data is composed into your custom expandable component via the data prop
const ExpanableComponent = ({ data }) => "hello";
const handleChange = (state) => {
    // You can use setState or dispatch with something like Redux so we can use the retrieved data
    console.log('Selected Rows: ', state.selectedRows);
};

export default class MyComponent extends React.Component {
    render() {
        return (
            <DataTable
                columns={columns}
                data={data}
                expandableRows
                expandableRowsComponent={<ExpanableComponent />}
            />

        )
    }
};