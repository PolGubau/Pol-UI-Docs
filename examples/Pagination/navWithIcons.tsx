const code = `
import { Pagination } from "pol-ui";

const PaginationComponent = () => {
  const [page, setPage] = useState(1);

  return (
    <Pagination
      currentPage={page}
      onPageChange={setPage}
      totalPages={100}
      layout={'navigation'}
    />
  );
};
export default PaginationComponent;
`;
export default code;
