import React from "react";
import { useState } from "react";

const Todo = () => {
  const [activity, setActivity] = useState("");
  const [listData, setlistData] = useState([]);
  function addActivity() {
    setlistData((listData) => {
      const upadatedList = [...listData, activity];
      setActivity("");
      return upadatedList;
    });
  }

  function removeActivity(i) {
    const updatedListData = listData.filter((elem, id) => {
      return i !== id;
    });
    setlistData(updatedListData);
  }

  function removeAll() {
    setlistData([]);
  }

  return (
    <>
      <div className="container">
        <div className="header">TODO LIST</div>
        <input
          type="text"
          placeholder="Add daily task"
          value={activity}
          onChange={(e) => setActivity(e.target.value)}
        />
        <button onClick={addActivity}>Add</button>
        <p className="List-heading">Here is your list :</p>
        {listData !== [] &&
          listData.map((data, i) => {
            return (
              <>
                <p key={i}>
                  <div className="listData">{data}</div>
                  <div className="btn-position">
                    <button onClick={() => removeActivity(i)}>Remove</button>
                  </div>
                </p>
              </>
            );
          })}
        {listData.length >= 1 && (
          <div className="btn">
            <button onClick={removeAll}>Remove All</button>
          </div>
        )}
      </div>
    </>
  );
};

export default Todo;
