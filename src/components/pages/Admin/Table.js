import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles'


const columns = [
  { field: 'id', headerName: 'ID', width: 210 },
  { field: 'name', headerName: 'Tên sản phẩm', width: 300 },
  { field: 'author', headerName: 'Người đăng', width: 200 },
  { field: 'date', headerName: 'Ngày', width: 140, type: 'date'},
];

const useStyles = makeStyles(theme => ({
  main: {
    height: 400,
    width: '100%',
    backgroundColor: '#fff',
    border: '1px solid #999',
    cursor: 'pointer',
  }
}))


export default function DataGridDemo({rows}) {
    const classes = useStyles();
    const history = useHistory();

    const handleRowClicked = row => {
        const { id } = row
        const url = `admin/product/${id}`
        setTimeout(() => history.push(url), 500)
    }



  return (
    <div className={classes.main}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        hideFooterSelectedRowCount
        onRowClick={GridRowParams => handleRowClicked(GridRowParams)}/>
    </div>
  );
}
