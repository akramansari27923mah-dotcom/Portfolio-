import { useEffect, useRef, useState } from "react";
import { RiSendPlaneFill } from "react-icons/ri";
import { GiRobotHelmet } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import sendMessage from "../services/chatApi";
import MarkdownRenderer from "./MarkDownRender";

const Ai_ChatBot = () => {
  const [show, setShow] = useState(false);
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
    <div>
      <button
        onClick={() => setShow(!show)}
        className="cursor-pointer fixed bottom-5 right-5"
      >
        <img
          className=" w-15 h-15 object-cover rounded-full animate__animated hover:-translate-y-2 transition-all duration-300 animate__shakeX"
          src="/message.gif"
        />
      </button>

      {show && (
        <div className="animate__animated  shadow-white rounded-t-lg animate__fadeIn rounded-b-lg md:w-90 w-full md:h-108 h-screen shadow-sm  fixed z-120 md:bottom-25 bottom-0 md:right-20 right-0 bg-white overflow-hidden">
          <div
            className={`flex justify-between items-center bg-black text-white ${loader ? "p-2" : "p-4"} relative`}
          >
            <div className="flex flex-col justify-center items-center">
              <div>
                <h1 className="animate__animated animate__slideInLeft">
                  Akram AI
                </h1>
                <div className="w-3 h-3 rounded-full bg-green-500 border-white border absolute top-3 animate__animated animate__fadeIn animate__infinite  left-22"></div>
              </div>
              {loader && <span className="text-[10px] animate-pulse">Typing...</span>}
            </div>
            <div className="flex items-center gap-3">
              <GiRobotHelmet
                size={25}
                className="animate__animated animate__slideInRight"
              />
              <IoCloseSharp
                size={25}
                className="cursor-pointer"
                onClick={() => setShow(false)}
              />
            </div>
          </div>

          <div
            className="h-160 md:h-83 p-3 overflow-y-scroll hide-scrollbar 
          "
          >
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

            {message.map((msg, i) => {
              const isUser = msg.role === "user";

              return (
                <div
                  key={i}
                  className={`flex text-sm  ${
                    isUser
                      ? "justify-end items-center"
                      : "justify-start items-center"
                  }`}
                >
                  <div
                    className={`max-w-[80%] whitespace-pre-wrap p-2 mb-2 ${
                      isUser
                        ? "bg-black text-white rounded-b-lg rounded-tl-lg"
                        : "bg-black/50 text-white rounded-t-lg rounded-br-lg"
                    }`}
                  >
                    <MarkdownRenderer content={msg.content} />
                  </div>
                </div>
              );
            })}

            {loader && (
              <div className="flex gap-2">
                <span className="animate-bounce">●</span>
                <span className="animate-bounce transition-all duration-300 delay-100">
                  ●
                </span>
                <span className="animate-bounce transition-all duration-300 delay-200">
                  ●
                </span>
              </div>
            )}

            <div ref={messageEndRef}></div>
          </div>

          <div className="flex items-center  w-full md:w-90 gap-2 p-2 justify-between bg-black fixed bottom-0 md:bottom-24 md:rounded-b-lg">
            <input
              type="text"
              value={inputValue}
              onKeyDown={handelKeyPress}
              placeholder="ask anythink about me..."
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full outline-none border rounded-md p-2.5 bg-white animate__animated animate__slideInUp text-sm"
            />

            <button
              onClick={hendelSend}
              disabled={!inputValue.trim() || loader}
              className="py-2 rounded-md px-3 disabled:cursor-not-allowed animate__animated animate__slideInUp bg-white disabled:opacity-80 opacity-100 text-black cursor-pointer"
            >
              {loader ? (
                <div className=" animate-spin w-5 h-5 rounded-full border-2 bg-white border-t-white border-black"></div>
              ) : (
                <RiSendPlaneFill size={25} />
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Ai_ChatBot;
