import type { PaginationProps } from "./Pagination.interface";

export default function Pagination({currentPage, totalPages, onPageChange}: PaginationProps) {
  return (
    <div>
      <h1>Pagination Component</h1>
      {/* Pagination logic will go here */ currentPage}
    </div>
  );
}