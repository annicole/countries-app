import { usePagination } from "hooks/usePagination";
import { FooterProps } from "interfaces/pagination";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import "style/Footer.css";

const Footer = ({
  totalCount,
  pageSize = 10,
  currentPage,
  onPageChange,
}: FooterProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  const lastPage = paginationRange[paginationRange.length - 1];

  return (
    <div className="padding">
      <nav>
        <ul className="pagination d-flex justify-content-center flex-wrap pagination-rounded-flat pagination-success">
          {currentPage !== 1 ? (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => onPageChange(currentPage - 1)}
              >
                <IoIosArrowBack />
              </button>
            </li>
          ) : null}
          {paginationRange.map((pageNumber: number) => (
            <li
              className={`page-item ${
                pageNumber === currentPage ? "active" : ""
              }`}
              key={pageNumber}
            >
              <button onClick={()=> onPageChange(pageNumber)} className="page-link">{pageNumber}</button>
            </li>
          ))}
          {currentPage !== lastPage ? (
            <li className="page-item">
              <button
                className="page-link"
                onClick={() => onPageChange(currentPage + 1)}
              >
                <IoIosArrowForward />
              </button>
            </li>
          ) : null}
        </ul>
      </nav>
    </div>
  );
};

export default Footer;
