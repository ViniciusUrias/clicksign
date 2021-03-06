import { useContext, useEffect, useMemo, useState } from "react";
import { useTable } from "react-table";
import styled from "styled-components";
import Modal from "styled-react-modal";
import { GlobalContext } from "../context/GlobalState";
import { useModalContext } from "../context/ModalContext";
import EditModal from "./EditModal";
const Oval = styled.div`
  width: 25px;
  height: 25px;
  padding: 3px 5px 2px 6px;
  color: var(--white-two);
  background-color: #fa8d68;
  border-radius: 50%;
  display: inline-flex;
  justify-content: space-around;
  span {
    align-self: center;
  }
`;
export const Styles = styled.div`
  padding: 1rem;
  width: 100%;
  table {
    font-family: Roboto;
    border-spacing: 0;
    border: solid 1px var(--white);
    text-align: left;
    width: 100%;
    color: gray;

    tr {
      :hover {
        background-color: var(--very-light-pink);
      }
      td {
        border-right: 0;
        border-left: 0;
      }
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th {
      margin: 0;
      padding: 0.5rem;
      width: 53px;
      height: 25px;
      margin: 0 335px 0 0;
      background-color: var(--white-two);
      font-size: 15px;
      color: var(--bluey-grey);
      :first-child {
        width: 1%;
      }
      :last-child {
        border-right: none;
        width: 0.0000000001%;
      }
    }
  }
  td {
    margin: 0;
    padding: 0.5rem;
    border: solid 1px var(--white);
    font-size: 14px;
  }
`;

function List() {
  const { contacts, removeContact, editContact } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  function toggleModal(e) {
    setIsOpen(!isOpen);
  }

  const mockData = [
    {
      id: 1,
      contact: "vibe",
      email: "vibe@urias",
      phone: "1929292",
    },
  ];
  const data = useMemo(() => contacts, [contacts]);

  useEffect(() => {}, [contacts]);

  const columns = useMemo(
    () => [
      {
        Header: () => null,
        id: "avatar",
        Cell: () => (
          <Oval>
            <span>V</span>
          </Oval>
        ),
      },

      {
        Header: "Contatos",
        accessor: "contact",
      },
      {
        Header: "E-mail",
        accessor: "email",
      },
      {
        Header: "Telefone",
        accessor: "phone",
      },
      {
        Header: () => null,
        id: "icons",
        Cell: () => (
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <button onClick={toggleModal}>
              <img style={{ marginRight: 10 }} src="ic-edit.svg"></img>
            </button>
            <button onClick={removeContact}>
              <img style={{ marginLeft: 10 }} src="ic-delete.svg"></img>
            </button>
          </div>
        ),
      },
      {
        Header: () => null,
        accessor: "id",
        Cell: () => null,
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });

  return (
    <>
      <EditModal toggleModal={toggleModal} isOpen={isOpen} />

      <Styles>
        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </Styles>
    </>
  );
}
export default List;
