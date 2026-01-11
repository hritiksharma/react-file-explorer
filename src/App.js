import "./styles.css";
import explorer from "./data/folderData";
import { useState } from "react";
import Folder from "./components/Folder";
import useTraverseTree from "./hooks/use-traverse-tree";

export default function App() {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (id, item, isFolder) => {
    const finalTree = insertNode(explorerData, id, item, isFolder);
    setExplorerData(finalTree);
  };
  console.log("explorer", explorerData);
  return (
    <div className="App">
      <Folder explorer={explorer} handleInsertNode={handleInsertNode} />
    </div>
  );
}
