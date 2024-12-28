import { useState } from "react";

export default function FileExplorer({ folderData }) {
  const [showChildren, setShowchildren] = useState(false);
  const handleClick = () => {
    setShowchildren(!showChildren);
  };
  return (
    <div className="container">
      <h5>
        {folderData.type === "folder" ? (showChildren ? "📂" : "📁") : "📄"}
        <span onClick={handleClick}>{folderData.name}</span>
      </h5>
      {showChildren &&
        folderData?.children?.map((childData, index) => {
          return <FileExplorer key={index} folderData={childData} />;
        })}
    </div>
  );
}