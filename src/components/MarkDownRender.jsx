import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

export default function MarkChat({ content = "" }) {
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = async (code, index) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error("Copy failed", err);
    }
  };

  return (
    <div className="max-w-none wrap-break-word text-sm leading-6 text-white">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          // 🔥 Headings
          h1: ({ children }) => (
            <h1 className="text-xl font-semibold mt-4 mb-2">{children}</h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-lg font-semibold mt-3 mb-1">{children}</h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-base font-medium mt-2 mb-1">{children}</h3>
          ),

          // 🔥 Text
          strong: ({ children }) => (
            <strong className="text-blue-400 font-semibold">
              {children}
            </strong>
          ),

          // 🔥 Lists
          ul: ({ children }) => (
            <ul className="pl-5 mb-2 space-y-1 list-disc">{children}</ul>
          ),
          ol: ({ children }) => (
            <ol className="pl-5 mb-2 space-y-1 list-decimal">{children}</ol>
          ),
          li: ({ children }) => <li>{children}</li>,

          // 🔥 Blockquote
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-3 italic text-gray-400 my-2">
              {children}
            </blockquote>
          ),

          // 🔥 Tables
          table: ({ children }) => (
            <div className="overflow-x-auto my-4">
              <table className="w-full border border-gray-700 rounded-lg">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="bg-gray-800 px-3 py-2 text-left border-b border-gray-700">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="px-3 py-2 border-b border-gray-700">
              {children}
            </td>
          ),

          // 🔥 Code block + inline code
          code({ inline, className, children }) {
            const match = /language-(\w+)/.exec(className || "");
            const code = String(children).replace(/\n$/, "");
            const index = code; // stable unique key

            if (!inline && match) {
              return (
                <div className="relative my-4 rounded-xl overflow-hidden border border-gray-700">
                  
                  {/* Header */}
                  <div className="flex justify-between items-center bg-gray-900 px-4 py-2 text-xs text-gray-400">
                    <span>{match[1]}</span>

                    <button
                      onClick={() => handleCopy(code, index)}
                      className="flex items-center gap-1 hover:text-white"
                    >
                      {copiedIndex === index ? (
                        <>
                          <Check size={14} /> Copied
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> Copy
                        </>
                      )}
                    </button>
                  </div>

                  {/* Code */}
                  <SyntaxHighlighter
                    style={oneDark}
                    language={match[1]}
                    PreTag="div"
                    customStyle={{
                      margin: 0,
                      padding: "16px",
                      background: "#020617",
                    }}
                  >
                    {code}
                  </SyntaxHighlighter>
                </div>
              );
            }

            return (
              <code className="bg-gray-800 text-green-400 px-1.5 py-0.5 rounded">
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}