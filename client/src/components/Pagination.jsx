import React from "react";


export default function Pagination({ recipesPage, allRecipes, pagination }) {
  const pages = [];

  for (let i = 1; i <= Math.ceil(allRecipes / recipesPage); i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.length <= 1 ? (
        <></>
      ) : (
        <nav className="pagination">
          <div className="pages">
            {pages?.map((p) => (
              <div className="page" key={p}>
                <button
                  className="pageBtn"
                  onClick={() => pagination(p)}
                  style={{ width: "30px" }}
                >
                  {p}
                </button>
              </div>
            ))}
          </div>
        </nav>
      )}
    </div>
  );
}
