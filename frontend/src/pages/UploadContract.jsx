import { Upload, FileText } from "lucide-react";

import "./PagePlaceholder.css";

function UploadContract() {
  return (
    <div className="placeholder-page">

      <div className="placeholder-header">

        <div>
          <p>DOCUMENT MANAGEMENT</p>

          <h1>Upload Contract</h1>

          <span>
            Upload your legal documents for AI-powered analysis.
          </span>
        </div>

      </div>


      <div className="upload-area">

        <div className="upload-icon">
          <Upload size={40} />
        </div>

        <h2>Upload your contract</h2>

        <p>
          Drag and drop your PDF or DOCX file here.
        </p>

        <button>
          <FileText size={18} />
          Choose File
        </button>

        <small>
          Supported formats: PDF, DOCX
        </small>

      </div>

    </div>
  );
}

export default UploadContract;