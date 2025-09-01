import React, { useEffect, useState } from "react";

const PaginationProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 7;

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=100`
        );
        const data = await response.json();
        setAllProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const totalPages = Math.ceil(allProducts.length / itemsPerPage);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentProducts = allProducts.slice(indexOfFirst, indexOfLast);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products Store</h2>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {currentProducts.map((product) => (
            <li
              key={product.id}
              style={{
                border: "1px solid #ddd",
                margin: "10px 0",
                padding: "10px",
                borderRadius: "6px",
                display: "flex",
                alignItems: "center",
                gap: "15px",
              }}
            >
              <img
                src={product.image}
                alt={product.title}
                width="60"
                style={{ objectFit: "contain" }}
              />
              <div>
                <strong>{product.title}</strong>
                <p>${product.price}</p>
              </div>
            </li>
          ))}
        </ul>
      )}

      {/* Pagination Controls */}
      <div style={{ marginTop: "15px" }}>
        <button
          onClick={() => setCurrentPage((prev) => prev - 1)}
          disabled={currentPage === 1}
        >
          Prev
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => setCurrentPage(i + 1)}
            style={{
              margin: "0 5px",
              fontWeight: currentPage === i + 1 ? "bold" : "normal",
            }}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => prev + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};


export default  PaginationProducts;
``