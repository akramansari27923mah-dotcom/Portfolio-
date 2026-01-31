import { FaRobot } from "react-icons/fa";
import Model from '../data/Model.json'
import { LuSend } from "react-icons/lu";
import { IoCloseCircle } from "react-icons/io5";

import { useState, useEffect, useRef } from "react";
const Ai_ChatBot = () => {

    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState('');
    const [isLoader, setIsLoader] = useState(false);
    const [aiReady, setAiReady] = useState(false);
    const [selectedModel, setSelectedModel] = useState('gpt-4o');
    const messageEndRef = useRef(null);
    const [openAic, setOpenAic] = useState(false)

    useEffect(() => {
        const checkReady = setInterval(() => {
            if (window.puter?.ai?.chat) {
                setAiReady(true)
                clearInterval(checkReady)
            }
        }, 300);

        return () => clearInterval(checkReady)
    }, [])

    useEffect(() => {
        messageEndRef.current?.scrollIntoView({
            behavior: 'smooth'
        })
    }, [messages])

    const addMessage = (content, isUser) => {
        setMessages((prev) => [...prev, {
            content,
            isUser,
            id: Date.now()
        }])
    }

    const sendMessage = async () => {
        const message = inputValue.trim()

        if (!message || !aiReady) return;

        addMessage(message, true)
        setInputValue('')
        setIsLoader(true)

        try {
            const conversation = [
                {
                    role: 'system',
                    content: `
                            You are a smart, friendly, and professional AI assistant.
                            Always give clear, accurate, and helpful answers.
                            Explain things step by step in simple language.
                            If the user is a beginner, keep explanations easy.
                            If you don't know something, say it honestly.
                        `
                },
                ...messages.map((msg) => ({
                    role: msg.isUser ? 'user' : 'assistant',
                    content: msg.content
                })),

                {
                    role: 'user',
                    content: message
                }
            ];

            const respond = await window.puter.ai.chat(conversation, {
                model: selectedModel
            });

            const reply = typeof respond === 'string' ?
                respond : respond?.message?.content || 'No reply message'

            addMessage(reply, false)
        }
        catch (err) {
            console.log(err.message || 'Somthing went wronge');
            setError(err.message)
        }
        finally {
            setIsLoader(false)
        }
    };

    const handelKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            sendMessage()
        }
    };

    const handelModelChange = (e) => {
        const newModel = e.target.value
        setSelectedModel(newModel)

        const model = Model.find((m) => m.id === newModel)
        addMessage(`🔄 Switch to ${model.name} ${model.provider}`, false)
    };

    const currentModel = Model.find((m) => m.id === selectedModel) || Model[0];

    return (

        <div>
            <button
                onClick={() => setOpenAic(true)}
                className="fixed z-99 bottom-5 right-5 animate__animated animate__tada animate__infinite animate__slow flex flex-col justify-center items-center">
                <FaRobot size={30} className="text-white cursor-pointer" />
                <span className="text-white">
                    Ai ChatBot
                </span>
            </button>
            {
                openAic &&

                <div className='fixed z-100 top-0 animate__animated animate__slideInRight flex justify-center items-center w-full flex-col right-0 h-screen md:w-md shadow bg-gray-200'>

                    <button
                        onClick={() => setOpenAic(false)}
                        className="absolute top-0 left-0 cursor-pointer hover:text-red-600 transition-all duration-300 hover:scale-105">
                        <IoCloseCircle size={40} />
                    </button>
                    <div className="flex items-center gap-2 mb-5 text-2xl font-bold">
                        <FaRobot size={30} />
                        <h1>
                            Ai ChatBot
                        </h1>
                    </div>

                    <div className="flex items-center flex-col gap-4 w-full">
                        <div className="flex items-center md:flex-row flex-col gap-2">

                            <div className={`px-4 py-2 rounded-full text-sm ${aiReady ? 'text-green-600 bg-green-600/60 border border-green-600/50 ' : 'text-red-600 bg-red-600/60 border border-red-600/50'
                                }`}>
                                {
                                    aiReady ? '🟢 Ai Ready' : '🔴 Watting for Ai...'
                                }

                            </div>
                            <div>
                                <span className="text-sm font-bold mr-2">models: </span>

                                <select
                                    value={selectedModel}
                                    disabled={!aiReady || isLoader}
                                    onChange={handelModelChange}
                                    className="bg-black/30 px-4 py-2 w-50  rounded-md disabled:opacity-70 opacity-100 cursor-pointer outline-none  text-white text-sm font-semibold"
                                >

                                    {
                                        Model.map((modl) => (
                                            <option
                                                value={modl.id}
                                                key={modl.id}
                                            >
                                                {modl.name}
                                                ({modl.provider})
                                            </option>
                                        ))
                                    }
                                </select>
                            </div>
                        </div>


                        <div className="w-full p-3 rounded-sm">
                            <div className="p-2 rounded-sm text-sm bg-black/50 flex justify-center items-center text-white">
                                <span>
                                    Currently using : {currentModel.name} ({currentModel.provider})
                                </span>
                            </div>

                            <div className="h-96 shadow-md hide-scrollbar overflow-y-scroll flex p-2 flex-col rounded-sm mt-4 bg-black/80 backdrop-blur-lg">
                                {
                                    messages.length === 0 && (
                                        <div className="flex text-sm text-white justify-center mt-40 flex-col items-center">

                                            <span className="mb-1 text-lg font-semibold">
                                               👋 Welcome to my portfolio
                                            </span>
                                            👋 Start to conversation by typing a message bellow
                                            <br />

                                            <span className="text-xs text-gray-400 mt-1">
                                                Try different Ai models to see how they respond!
                                            </span>
                                        </div>
                                    )
                                }


                                {
                                    messages.map((msg) => (
                                        <div key={msg.id}
                                            className={`px-4 py-2 rounded-2xl  text-wrap mb-3  ${msg.isUser ? ' text-right text-white ' : 'bg-black/40 text-white tracking-wide max-w-[80%] '
                                                }`}>

                                            <div className="whitespace-pre-wrap text-sm ">
                                                {msg.content}
                                            </div>
                                        </div>
                                    ))
                                }


                                {
                                    isLoader && (
                                        <div className="px-4 py-2 text-white rounded-2xl bg-amber-500/70 ">
                                            <div className="flex gap-2 items-center animate-pulse">
                                                <div className="animate-spin border rounded-full border-t-white border-white/30 w-6 h-6"></div>
                                                <div>
                                                    {currentModel.name} is thinking...
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }

                                <div ref={messageEndRef}></div>
                            </div>

                            <div className="flex flex-col gap-4 sm:flex-row mt-4">
                                <input
                                    onChange={(e) => setInputValue(e.target.value)}
                                    value={inputValue}
                                    onKeyDown={handelKeyPress}
                                    disabled={!aiReady || isLoader}
                                    placeholder={aiReady ? `ask ${currentModel.name} anything...` : 'Wating for ai...'}
                                    className="outline-none flex-1 py-2 px-4 text-white w-full rounded-full bg-black/50 disabled:opacity-80 opacity-100 text-sm"
                                    type="text" />

                                <button
                                    onClick={sendMessage}
                                    disabled={!aiReady || isLoader || !inputValue.trim()}
                                    className="px-4 py-2 rounded-lg cursor-pointer bg-indigo-600 shadow text-white disabled:opacity-80 opacity-100 disabled:cursor-not-allowed ">
                                    {
                                        isLoader ? (
                                            <div className="flex gap-2 items-center">
                                                <div className="animate-spin border rounded-full border-t-white border-white/30 w-6 h-6"></div>
                                                Sending...
                                            </div>
                                        )
                                            :
                                            (
                                                <div className="flex items-center justify-center gap-2">
                                                    <LuSend />
                                                    Send
                                                </div>
                                            )
                                    }
                                </button>
                            </div>

                        </div>

                    </div>
                </div>
            }

        </div>
    )
}

export default Ai_ChatBot