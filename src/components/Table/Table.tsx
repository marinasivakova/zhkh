import { offsetStore } from "../../stores/offset";
import { ITracker } from "../../stores/Trackers";
import {
  TableBody,
  TableHeadElement,
  TableHeader,
  TableHeadLeftElement,
  TableHeadRightElement,
  TableStyle,
} from "../../styles/styles";
import { Pagination } from "../Pagination/Pagination";
import Row from "../Row/Row";

function Table({ trackers }: { trackers: Array<ITracker> }) {

  const currentPage = offsetStore.currentPage

  return (
    <TableStyle>
      <TableHeader>
        <tr>
          <TableHeadLeftElement>№</TableHeadLeftElement>
          <TableHeadElement>Тип</TableHeadElement>
          <TableHeadElement>Дата установки</TableHeadElement>
          <TableHeadElement>Автоматический</TableHeadElement>
          <TableHeadElement>Текущие показания</TableHeadElement>
          <TableHeadElement colSpan={2}>Адрес</TableHeadElement>
          <TableHeadElement>Примечания</TableHeadElement>
          <TableHeadRightElement></TableHeadRightElement>
        </tr>
      </TableHeader>
      <TableBody>
        {trackers.map((el, i) => {
          return <Row key={el.id} rowEl={el} order={i + 1} />;
        })}
      </TableBody>
      <Pagination
        currentPage={currentPage}
        totalCount={140}
        pageSize={20}
        onPageChange={(page: number) => offsetStore.switchPage(page)}
      />
    </TableStyle>
  );
}

export default Table;
