import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const PdfViewer = ({ url, width }) => (
  <Document
    loading={
      <div className="flex w-screen justify-center">
        <h1 className="text-center text-6xl">Loading page...</h1>
      </div>
    }
    file={url}
  >
    <Page pageNumber={1} width={width} />
  </Document>
);

export default PdfViewer;
