import React, { useState } from 'react'
import { useAppSelector } from '../../hooks/redux';
import { getFilteredContacts } from '../../redux/selectors';
import { IContact } from '../../types/types';

const Pagination = () => {
    const contacts: IContact[] = useAppSelector(getFilteredContacts);
     const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 15;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = contacts.slice(firstIndex, lastIndex);
  const nPage = Math.ceil(contacts.length / recordsPerPage)
    const numbers: number[] = [...Array(nPage + 1).keys()].slice(1);
    

     function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1)
    }
  }
  function nextPage() {
    if (currentPage !== nPage) {
      setCurrentPage(currentPage + 1)
    
    }
  }
  function changeCPage(id: number) {
    setCurrentPage(id)
  }

  return (
      <>
             <ul className='pagination'>
        <li className='page-item'>
          <button type='button' className='page-link'  onClick={prePage}>Prev</button>
        </li>
        {numbers.map((n, index) => (
          <li key={index} className={`page-item ${currentPage === n  ? 'active' : ""}`}>
            <button type="button" className='page-link'  onClick={()=>changeCPage(n)}>{ n}</button>
          </li>
        ))}
          <li className='page-item'>
          <button type="button" className='page-link'  onClick={nextPage}>Next</button>
        </li>
      </ul>
      
    </>
  )
}

export default Pagination
