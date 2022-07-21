import React from "react";
import './pagination.css';


export default function Pagination({ recipesPage, allRecipes, pagination }) {
  const pages = [];
 if (allRecipes.length === 0) {
  pages.push(1)
 }else {
    for (let i = 0; i < Math.ceil(allRecipes / recipesPage); i++) {
    pages.push(i+1);
    }
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
