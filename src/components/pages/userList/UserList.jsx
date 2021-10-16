import React from 'react';
import './UserList.css';
import { DataGrid } from '@material-ui/data-grid';

export default function UserList() {

    const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'firstName', headerName: 'First name', width: 130 },
        { field: 'lastName', headerName: 'Last name', width: 130 },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 90,
        },
        {
          field: 'fullName',
          headerName: 'Full name',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160
        },
      ];
      
      const rows = [
        { id: 1, username: 'John Snow' }
        
      ];

    return (
        <div className="userList">
            <DataGrid 
                rows={rows} 
                columns={columns}
                pageSize={5}
                checkboxSelection
            />
        </div>
    )
}
