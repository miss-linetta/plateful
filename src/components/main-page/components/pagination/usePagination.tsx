import { useState, useMemo } from 'react';

const usePagination = (data, itemsPerPage) => {
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = useMemo(() => {
    if (!data) return 1;
    return Math.ceil(data.length / itemsPerPage);
  }, [data, itemsPerPage]);

  const currentData = useMemo(() => {
    if (!data) return [];
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  }, [currentPage, data, itemsPerPage]);

  const handlePageChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 0 });
  };

  return { currentPage, handlePageChange, maxPage, currentData };
};

export default usePagination;
