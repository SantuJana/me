import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import Resume from "../assets/resume/SantuJanaResume.pdf"

export default function PdfViewer() {
  return (
    <div className="h-screen">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js">
        <Viewer fileUrl={Resume} />
      </Worker>
    </div>
  );
}
