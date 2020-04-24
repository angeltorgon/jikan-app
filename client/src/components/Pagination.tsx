import React from 'react'

const Pagination: React.FC<any> =  (props) => {
    return (
        <div className="pagination-container">
          <p onClick={() => props.setCurrentPage(1)} className="page-number">1</p>
          <p onClick={() => props.setCurrentPage(2)} className="page-number">2</p>
          <p onClick={() => props.setCurrentPage(3)} className="page-number">3</p>
        </div>
    )
}

export default Pagination;