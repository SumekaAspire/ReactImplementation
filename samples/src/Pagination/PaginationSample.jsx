

import React, { useState } from "react";

const PaginationSample = () => {
  // Dummy data (20 items)
  const data = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  // State - current page
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <div style={{ padding: "20px"}}>
      <h2>Simple Pagination Example</h2>

    <div style={{ padding: "22px" , border: "2px solid #403b3bff", borderRadius:"5px"}}>
        {/* Display items */}
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

    </div>

      {/* Pagination Controls */}
      <div style={{ marginTop: "10px" }}>
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationSample;
