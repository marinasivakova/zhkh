import { CSSProperties, useState } from "react";
import { ITracker } from "../../stores/Trackers";
import ButtonDelete from "../ButtonDelete/ButtonDelete";
import IconType from "../IconType/IconType";
import Address from "../Address/Address";
import { ButtonData, TableData } from "../../styles/styles";
import { offsetStore } from "../../stores/offset";

export default function Row({
  rowEl,
  order,
}: {
  rowEl: ITracker;
  order: number;
}) {
  const [style, setStyle] = useState<CSSProperties>({ visibility: "hidden" });
  const date = new Date(rowEl.installation_date!).toLocaleDateString("ru-RU", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const pageCoef = ((offsetStore.currentPage - 1) * 20) + order

  return (
    <tr
      onMouseEnter={() => {
        setStyle({ visibility: "initial" });
      }}
      onMouseLeave={() => {
        setStyle({ visibility: "hidden" });
      }}
    >
      <TableData>{pageCoef}</TableData>
      <TableData>
        <IconType type={rowEl._type} />
      </TableData>
      <TableData>{date}</TableData>
      <TableData>{rowEl.is_automatic ? "Нет" : "Да"}</TableData>
      <TableData>{rowEl.initial_values}</TableData>
      <TableData colSpan={2}><Address id={rowEl.area.id} /></TableData>
      <TableData>{rowEl.description}</TableData>
      <ButtonData>
        <ButtonDelete id={rowEl.id} style={style} />
      </ButtonData>
    </tr>
  );
}
