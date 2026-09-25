import React, { useState, ChangeEvent, DragEvent } from 'react';
import { UploadCloud, FileText, CheckCircle2, X } from 'lucide-react';

const ResumeUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [dragging, setDragging] = useState<boolean>(false);

  const handleDrop = (e: DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const removeFile = () => {
    setFile(null);
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-slate-100">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-slate-900">Upload Resume</h3>
        <p className="text-sm text-slate-500">PDF, DOC, or DOCX (Max 5MB)</p>
      </div>

      {!file ? (
        <label
          onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
          onDragLeave={() => setDragging(false)}
          onDrop={handleDrop}
          className={`flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-xl cursor-pointer transition-all ${
            dragging 
              ? 'border-indigo-500 bg-indigo-50/50' 
              : 'border-slate-200 hover:border-indigo-500 bg-slate-50/50 hover:bg-slate-50'
          }`}
        >
          <div className="w-12 h-12 mb-3 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
            <UploadCloud className="w-6 h-6" />
          </div>
          <span className="text-sm font-medium text-slate-700">
            Click to upload <span className="font-normal text-slate-500">or drag and drop</span>
          </span>
          <input 
            type="file" 
            className="hidden" 
            accept=".pdf,.doc,.docx"
            onChange={handleChange}
          />
        </label>
      ) : (
        <div className="flex items-center justify-between p-4 bg-indigo-50/40 border border-indigo-100 rounded-xl">
          <div className="flex items-center space-x-3 overflow-hidden">
            <div className="p-2 bg-indigo-100 text-indigo-600 rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <div className="truncate">
              <p className="text-sm font-medium text-slate-800 truncate">{file.name}</p>
              <div className="flex items-center space-x-1.5 mt-0.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-xs text-emerald-600 font-medium">Ready to upload</span>
              </div>
            </div>
          </div>
          <button 
            onClick={removeFile}
            className="p-1.5 text-slate-400 hover:text-slate-600 hover:bg-white rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
};

export default ResumeUpload;