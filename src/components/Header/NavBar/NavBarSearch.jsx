import React from "react";

function NavBarSearch() {
  return (
    <div className="nav-bar__search">
      <form>
        <input type="search" placeholder="Tìm kiếm ở đây..." />
        <button type="submit">
          <i class="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}

export default NavBarSearch;
