import React, { useState } from "react";
import "../Css/ItemList.css";
import { useDispatch, useSelector } from "react-redux";
import { createItem, updateItem, deleteItem } from "../Action/ActionItem";
import { Card, Container } from "react-bootstrap";
import { IoIosAddCircle } from "react-icons/io";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinFill } from "react-icons/ri";
import Table from "react-bootstrap/Table";

const ItemList = () => {
  const [itemInput, setItemInput] = useState("");
  const [updateId, setUpdateId] = useState(null);

  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.items);

  const handleCreate = () => {
    if (itemInput) {
      const newItem = { id: Date.now(), name: itemInput };
      dispatch(createItem(newItem));
      setItemInput("");
    }
  };

  const handleUpdate = (id, name) => {
    setUpdateId(id);
    setItemInput(name);
  };

  const handleSaveUpdate = () => {
    dispatch(updateItem(updateId, { name: itemInput }));
    setItemInput("");
    setUpdateId(null);
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <React.Fragment>
      <div className="mainDivListDiv">
        <Container className="itemContainer">
          <Card>
            <div className="curdTitle">CURD Opration</div>
            <div className="inputDiv">
              <input
                type="text"
                value={itemInput}
                onChange={(e) => setItemInput(e.target.value)}
                className="inputItem"
                placeholder="Enter item name"
              />
              <button
                className="addBtn"
                onClick={updateId ? handleSaveUpdate : handleCreate}
              >
                <IoIosAddCircle className="addIcon" />{" "}
                {updateId ? "Update Item" : "Add Item"}
              </button>
            </div>
          
            <Table className="listTable" striped responsive bordered hover>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id}>
                    <td>
                       <div className="itemListTitle">
                       {item.name}
                        </div> 
                        </td>
                    <td>
                      {" "}
                      <button className="editBtn" onClick={() => handleUpdate(item.id, item.name)}>
                      <FiEdit />  Edit
                      </button>
                    </td>
                    <td>
                      <button className="deleteBtn" onClick={() => handleDelete(item.id)}>
                      <RiDeleteBinFill/>  Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default ItemList;
