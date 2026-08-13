import { Download, Eye, File, X } from "lucide-react";
import React from "react";

const Resume = ({setIsResumeOpen, isResumeOpen}) => {
  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/AkramAnsariResume.pdf";
    link.download = "Resume-akram-ansari.pdf";
    link.click();
  };

  return (
    <div className="fixed top-0 right-0 z-80 w-full h-screen bg-black/50 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white p-4 rounded-2xl border-l-2 w-full max-w-md border-indigo-500">
        <div className="flex items-center gap-5">
          <div className="w-15 h-15 overflow-hidden object-top bg-gray-200 flex justify-center items-center rounded-full text-blue-500">
            <img src="/akram2.jpeg" alt="akram" />
          </div>
          <div>
            <h1 className="font-bold md:text-2xl text-xl">Akram Ansari Resume</h1>
            <p className="text-gray-600">Web Developer</p>
          </div>
        </div>

        <div className="mt-5 flex justify-center flex-wrap items-center gap-5 font-semibold">
          <a
            href="https://drive.google.com/file/d/1F8VB1OuXMdqE66iWHaFvA4L-jDpSyM08/view"
            target="_blank"
            className="flex justify-center items-center gap-2 bg-white border-2 text-indigo-500 border-indigo-500 py-2 px-10 cursor-pointer hover:scale-105 transition-all duration-300 rounded-lg">
            <Eye />
            <button className="cursor-pointer">View</button>
          </a>
          <div
            onClick={downloadResume}
            className="flex justify-center items-center gap-2 bg-linear-to-r from-indigo-400 to-indigo-700 via-indigo-900 border-2 text-white border-indigo-500 py-2 px-10 cursor-pointer hover:scale-105 transition-all duration-300 rounded-lg">
            <Download />
            <button className="cursor-pointer">Download</button>
          </div>
          <div
            onClick={() => setIsResumeOpen(!isResumeOpen)}
            className="flex justify-center items-center gap-2 bg-linear-to-r bg-red-500 text-white py-2 px-10 cursor-pointer hover:scale-105 transition-all duration-300 rounded-lg">
            <X />
            <button className="cursor-pointer">Cancle</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
