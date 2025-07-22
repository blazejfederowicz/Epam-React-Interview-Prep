import type { PaginationProps } from "./Pagination.interface";

export default function Pagination({currentPage, totalPages, onPageChange}: PaginationProps) {
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      <h1>Pagination Component</h1>
      <div className="">
        <button disabled={currentPage - 1 <1} onClick={() => onPageChange(currentPage - 1)}>back</button>
        <button disabled>{currentPage}</button>
        <button disabled={currentPage>=totalPages} onClick={() => onPageChange(currentPage + 1)}>next</button>
      </div>
    </div>
  );
}