import React, { useState } from "react";

const Folder = ({ explorer, handleInsertNode = () => {} }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: true,
  });

  const handleClick = (e, obj) => {
    e.stopPropagation();
    setShowInput({
      visible: true,
      isFolder: obj.isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({
        visible: false,
        isFolder: true,
      });
    }
  };

  if (explorer.isFolder) {
    return (
      <>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁{explorer.name} </span>
          <button id="folderButton" onClick={(e) => handleClick(e, explorer)}>
            Folder{" "}
          </button>
          <button id="fileButton" onClick={(e) => handleClick(e, explorer)}>
            {" "}
            File{" "}
          </button>
        </div>
        {showInput.visible && (
          <div>
            <input
              type="text"
              autoFocus
              onKeyDown={onAddFolder}
              // onChange={handleInputChange}
              onBlur={() =>
                setShowInput({
                  ...showInput,
                  visible: false,
                })
              }
            />
          </div>
        )}
        {expand && (
          <div>
            {explorer.items &&
              explorer.items.map((item) => (
                <span>
                  {" "}
                  <Folder explorer={item} />{" "}
                </span>
              ))}
          </div>
        )}
      </>
    );
  } else {
    return (
      <div className="file" style={{ marginTop: "5px" }}>
        {explorer.name}
      </div>
    );
  }
};

export default Folder;
