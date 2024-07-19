import { styled, keyframes } from "styled-components";

export const Title = styled.h2`
  margin: 20px;
  font-size: 24px;
  font-weight: 500;
  line-height: 32px;
  text-align: left;
`;

export const TableHeader = styled.thead`
  position: sticky;
  top: 0;
  color: #697180;
  font-size: 13px;
`;
export const TableHeadElement = styled.th`
  text-wrap: nowrap;
  font-weight: bold;
  background: #efefef;
`;
export const TableHeadLeftElement = styled.th`
  border-top-left-radius: 15px;
  font-weight: bold;
  padding: 5px;
  background: #efefef;
`;

export const TableHeadRightElement = styled.th`
  border-top-right-radius: 15px;
  font-weight: bold;
  padding: 5px;
  background: #efefef;
`;

export const TableStyle = styled.table`
  border-radius: 15px;
  table-layout: fixed;
  border-spacing: 0;
  width: 95%;
  margin: 20px;
`;

export const TableData = styled.td`
  padding: 5px 10px;
  text-align: center;
  font-size: 14px;
`;

export const Button = styled.button`
  background-color: #f6d5d4;
  padding: 0.6em 0.8em;
  margin: 5px;
  &:hover {
    background-color: #ffcccb;
  }
`;

export const ButtonData = styled.td`
  text-align: center;
`;

export const TableBody = styled.tbody`
  tr:nth-child(odd) {
    background: #fff;
  }
  tr:nth-child(even) {
    background: #f7f7f7;
  }
`;

export const PaginationStyled = styled.tfoot`
  position: sticky;
  bottom: 0;
  width: 100%;
`;

export const PaginationControls = styled.tr`
  width: 850%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 5px;
  background: white;
`;

export const PaginationButton = styled.td`
  background: white;
  border: 1px solid #ced5de;
  border-radius: 8px;
  padding: 0;
  text-align: center;
  & > button {
    background: white;
    padding: 0.4em 0.8em;
    &:hover {
      border: 1px solid #ced5de;
    }
  }
`;

export const CurrentActivePage = styled.td`
  background: #f2f5f8;
  & > button {
    background: #f2f5f8;
    padding: 0.4em 0.8em;
    &:hover {
      border: 1px solid #ced5de;
    }
  }
`;

export const ArrowButton = styled.td`
  border: none;
`;

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
`;

export const Icon = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;
