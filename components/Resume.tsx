import {useEffect, useState} from "react";

import dynamic from "next/dynamic";

const PdfViewer = dynamic(() => import("./PdfViewer"), { ssr: false });

function Resume() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
});
  /* Window size useEffect */
    useEffect(() => {
        window.addEventListener("resize", () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        });
    }, []);
  return (
    <div>
      <PdfViewer url={"./Resume.pdf"} width={windowSize.width} />
    </div>
  );
}

export default Resume;
