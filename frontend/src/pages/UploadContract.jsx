import { useRef, useState } from "react";
import {
  Upload,
  FileText,
  Trash2,
  CheckCircle
} from "lucide-react";

import "./UploadContract.css";

function UploadContract() {
  const fileInputRef = useRef(null);

  const [selectedFile, setSelectedFile] = useState(null);
  const [status, setStatus] = useState("");

  const handleChooseFile = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Please upload a PDF file.");
      return;
    }

    setSelectedFile(file);
    setStatus("");
  };

  const removeFile = () => {
    setSelectedFile(null);
    setStatus("");
    fileInputRef.current.value = "";
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      setStatus("Uploading...");

      const formData = new FormData();
      formData.append("file", selectedFile);

      const response = await fetch(
        "http://localhost:8000/upload-pdf",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("Upload failed");
      }

      const result = await response.json();

      console.log(result);

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("failed");
    }
  };

  const formatSize = (bytes) => {
    return (bytes / (1024 * 1024)).toFixed(2) + " MB";
  };

  return (
    <div className="upload-page">
      <div className="upload-header">
        <p>DOCUMENT MANAGEMENT</p>

        <h1>Upload Contract</h1>

        <span>
          Upload your legal contract and start AI-powered analysis.
        </span>
      </div>

      <div className="upload-container">
        {!selectedFile ? (
          <div className="upload-area">
            <div className="upload-icon">
              <Upload size={42} />
            </div>

            <h2>Upload Contract</h2>

            <p>
              Select a PDF contract to begin analysis.
            </p>

            <input
              type="file"
              accept=".pdf"
              hidden
              ref={fileInputRef}
              onChange={handleFileChange}
            />

            <button
              className="primary-btn"
              onClick={handleChooseFile}
            >
              <FileText size={18} />
              Choose PDF
            </button>

            <small>
              Supported format: PDF
            </small>
          </div>
        ) : (
          <div className="file-preview">
            <div className="file-card">
              <div className="file-left">
                <div className="pdf-icon">
                  <FileText size={32} />
                </div>

                <div className="file-info">
                  <h3>{selectedFile.name}</h3>
                  <p>{formatSize(selectedFile.size)}</p>
                </div>
              </div>

              <button
                className="delete-btn"
                onClick={removeFile}
              >
                <Trash2 size={18} />
              </button>
            </div>

            <button
              className="analyze-btn"
              onClick={handleUpload}
            >
              Analyze Contract
            </button>

            {status === "Uploading..." && (
              <p className="status uploading">
                Uploading contract...
              </p>
            )}

            {status === "success" && (
              <p className="status success">
                <CheckCircle size={16} />
                Contract uploaded successfully
              </p>
            )}

            {status === "failed" && (
              <p className="status error">
                Upload failed. Please try again.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default UploadContract;