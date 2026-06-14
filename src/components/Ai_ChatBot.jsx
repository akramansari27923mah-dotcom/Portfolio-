import { useEffect, useRef, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { GiRobotHelmet } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import sendMessage from "../services/chatApi";
import ChatMarkdownSupport from "./MarkDownRender";
import { ChevronRight, LoaderCircle, Send, Trash } from "lucide-react";

const Ai_ChatBot = () => {
  const [showChat, setShowChat] = useState(false);
  const [message, setMessage] = useState([]);
  const [loader, setLoader] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const messageEndRef = useRef(null);

  const autoSrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    autoSrollToBottom();
  }, [message]);

  const hendelSend = async () => {
    if (!inputValue.trim()) return;

    setInputValue("");
    setLoader(true);

    const newMessage = [...message, { role: "user", content: inputValue }];
    setMessage(newMessage);

    try {
      const data = await sendMessage(inputValue, newMessage);
      console.log(data);

      setMessage((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.reply,
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessage((prev) => [
        ...prev,
        {
          role: "assistant",
          content: "❌ Error: Server down ya API fail ho gaya",
        },
      ]);
    } finally {
      setLoader(false);
      setInputValue("");
    }
  };

  const handelKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftkey) {
      e.preventDefault();
      hendelSend();
    }
  };

  const handelButton = (type) => {
    if (type === "about") {
      setInputValue("Tell me about akram ansari");
      hendelSend();
      return;
    }
    if (type === "project") {
      setInputValue("How many projects has Akram Ansari made?");
      hendelSend();
      return;
    }

    if (type === "contact") {
      setInputValue("How i can connect with Akram Ansari");
      hendelSend();
      return;
    }
  };

  return (
      <>
        {!showChat && (
          <div
            className="fixed bottom-5 right-5 z-50"
            onClick={() => setShowChat(true)}
          >
            <img
              src="/robot.png"
              width={60}
              height={60}
              alt="robot"
              className="rounded-full border border-gray-300 shadow-xl cursor-pointer hover:scale-110 transition-all duration-300"
            />
          </div>
        )}

        <div
          className={`fixed top-0 right-0 z-100 h-screen bg-white shadow-2xl border-l border-gray-200 transition-transform duration-300
      ${showChat ? "translate-x-0" : "translate-x-full"}
      w-full md:w-105`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 border-b border-gray-300 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-linear-to-br from-black/70 via-black/50 to-black/70 flex justify-center items-center text-white font-bold text-xl shadow-lg">
                  A
                </div>

                <div>
                  <h2 className="font-semibold text-lg">Akram AI</h2>

                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>

                    <p className="text-xs text-gray-500">
                      {loader ? "Typing..." : "Online • Always here to help"}
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowChat(false)}
                  className="p-2 rounded-lg border border-gray-200 hover:bg-gray-100 cursor-pointer"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 hide-scrollbar space-y-4 bg-gray-50">

               {message.length === 0 && (
              <div className="flex justify-center items-center flex-col mt-10 px-4">
                <div
                  className="bg-white/80 backdrop-blur-lg border border-gray-200
                  p-6 rounded-2xl shadow-xl max-w-md w-full text-center
                  hover:scale-[1.02] transition-all duration-300"
                >
                  <p className="text-2xl font-semibold text-gray-800">
                    Hey there! 👋
                  </p>

                  <p className="text-lg text-gray-700 mt-2">
                    Welcome to my portfolio
                  </p>

                  <p className="text-sm text-gray-500 mt-2">
                    Ask me anything about my work, projects, or skills 😄
                  </p>

                  <div className="flex justify-center gap-2 mt-4 flex-wrap">
                    <button
                      onClick={() => handelButton("about")}
                      className="px-3 py-1 bg-blue-500 text-white rounded-full text-sm hover:bg-blue-600 transition"
                    >
                      About Me
                    </button>
                    <button
                      onClick={() => handelButton("project")}
                      className="px-3 py-1 bg-purple-500 text-white rounded-full text-sm hover:bg-purple-600 transition"
                    >
                      Projects
                    </button>
                    <button
                      onClick={() => handelButton("contact")}
                      className="px-3 py-1 bg-indigo-500 text-white rounded-full text-sm hover:bg-indigo-600 transition"
                    >
                      Contact
                    </button>
                  </div>
                </div>
              </div>
            )}


              {message.map((msg, ind) => (
                <div
                  key={ind}
                  className={`flex ${
                    msg?.role === "user" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`max-w-[85%] px-4 py-1 rounded-2xl text-sm md:text-base whitespace-pre-wrap shadow-sm
                ${
                  msg?.role === "user"
                    ? "bg-gray-900 text-white rounded-br-md"
                    : "bg-white text-gray-800 rounded-bl-md"
                }`}
                  >
                    <ChatMarkdownSupport
                      content={
                        typeof msg?.content === "string"
                          ? msg?.content
                          : JSON.stringify(msg?.content)
                      }
                    />
                  </div>
                </div>
              ))}

              {loader && (
                <div className="flex items-center gap-2 text-gray-500">
                  <LoaderCircle className="animate-spin" size={18} />
                  <span>Typing...</span>
                </div>
              )}

              <div ref={messageEndRef}></div>
            </div>

          
            <div className="border-t bg-white border-gray-300 p-3">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handelKeyPress}
                  placeholder="Ask about Akram Ansari..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-xl outline-none focus:right-1 focus:border-gray-500"
                />

                <button
                  onClick={hendelSend}
                  disabled={!inputValue.trim()}
                  className="h-12 w-12 rounded-xl bg-linear-to-br from-black/70 via-black/50 to-black/70 text-white flex items-center justify-center shadow-lg hover:scale-105 transition disabled:opacity-50 cursor-pointer"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
  );
};

export default Ai_ChatBot;
