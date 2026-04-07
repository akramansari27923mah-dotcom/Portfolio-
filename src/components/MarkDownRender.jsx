import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useState } from "react";
import { Check, Copy, ChevronDown, ChevronUp } from "lucide-react";

export default function MarkdownRenderer({ content }) {
  return (
    <div className="prose prose-invert max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ inline, className, children }) {
            const match = /language-(\w+)/.exec(className || "");

            if (!inline && match) {
              return (
                <CodeBlock
                  language={match[1]}
                  value={String(children).replace(/\n$/, "")}
                />
              );
            }

            return (
              <code className="bg-gray-800 text-green-300 px-2 py-0.5 rounded-md text-sm font-mono">
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

function CodeBlock({ language, value }) {
  const [copied, setCopied] = useState(false);
  const [expanded, setExpanded] = useState(true);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative my-5 rounded-2xl overflow-hidden border border-gray-700 shadow-xl 
                    transition hover:shadow-2xl animate-fadeIn">
      
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-900 text-xs text-gray-400">
        
        {/* Language Badge */}
        <span className="uppercase tracking-wider bg-gray-800 px-2 py-1 rounded">
          {language}
        </span>

        <div className="flex items-center gap-2">
          
          {/* Expand / Collapse */}
          <button
            onClick={() => setExpanded(!expanded)}
            className="p-1 hover:bg-gray-700 rounded transition"
          >
            {expanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
          </button>

          {/* Copy Button */}
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-1 px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-white transition relative"
          >
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      </div>

      {expanded && (
        <div className="overflow-x-auto relative">
          <SyntaxHighlighter
            language={language}
            style={oneDark}
            showLineNumbers
            wrapLines
            customStyle={{
              margin: 0,
              background: "#0f172a",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "13.5px",
              lineHeight: "1.6",
              padding: "16px",
            }}
            lineNumberStyle={{
              color: "#6b7280",
              marginRight: "12px",
            }}
          >
            {value}
          </SyntaxHighlighter>

          {!expanded && (
            <div className="absolute bottom-0 left-0 w-full h-16 bg-linear-to-t from-black/80 to-transparent" />
          )}
        </div>
      )}
    </div>
  );
}