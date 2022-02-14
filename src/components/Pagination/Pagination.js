import React from 'react'
import Pagination from '@material-ui/lab/Pagination'

const PaginationComponent = (characters) => {
    return (
        <div>   <Pagination count={characters} variant="outlined" shape="rounded" /></div>
    )
}

export default PaginationComponent