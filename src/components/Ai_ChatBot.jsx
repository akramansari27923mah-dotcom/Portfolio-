import { useEffect, useRef, useState } from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import { GiRobotHelmet } from "react-icons/gi";


const Ai_ChatBot = () => {
  const GROQ_API_KEY = import.meta.env.VITE_GROQ_API_KEY
  const [show, setShow] = useState(false)
  const [messages, setMessages] = useState([])
  const [loader, setLoader] = useState(false)
  const [error, setError] = useState('')
  const [inputValue, setInputValue] = useState('')
  const messageEndRef = useRef(null)

  const autoSrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    autoSrollToBottom()
  }, [messages])


  const sendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage = {
      role: 'user',
      content: inputValue
    }

    const newMessage = [...messages, userMessage]
    setMessages(newMessage)
    setInputValue('')
    setError('')
    setLoader(true)

    try {
      const res = await fetch(
        'https://api.groq.com/openai/v1/chat/completions',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${GROQ_API_KEY
              }`
          },

          body: JSON.stringify({
            model: 'llama-3.1-8b-instant',
            messages: [
              {
                role: 'system',
                content: `
                     You are a personal AI assistant for Akram Ansari’s portfolio website.

First, introduce Akram briefly when a user starts the conversation.

About Akram Ansari:
- He is a front-end web developer.
- He uses HTML, CSS, JavaScript.
- He works with React.js and Tailwind CSS.
- He is passionate about web development and learning new technologies.
- He wants to become a professional web developer and work on real-world projects.

Your behavior rules:
- Speak in simple, clear English.
- Be friendly and professional.
- Give answers in clean, well-structured format.
- If the user asks about skills, explain them clearly.
- If the user asks about projects, guide them politely.
- If the user asks something outside Akram’s profile, answer normally like a helpful AI.
- Do not use unnecessary emojis.
- Keep responses short and meaningful unless detailed explanation is requested.

Start every new chat by introducing Akram in 2–3 lines, then ask how you can help the user.

PROJECT LIST:
1. AI Text Summarizer (React, Tailwind CSS, Puter.js)
2. AI Text to Speech (React, Tailwind CSS, Puter.js)
3. CRUD App (React, Tailwind CSS)
4. CRUD App with Firebase (React, Tailwind CSS, Firebase)
5. Todo List (HTML, CSS, JavaScript)
6. Color Picker (React, Tailwind CSS)
7. Card Generator (HTML, CSS, JavaScript)
8. Weather App (HTML, CSS, JavaScript)
9. Amazon Clone (HTML, CSS)
10. Toaster Notification App (HTML, CSS, JavaScript)
11. Movie4U Website (HTML, CSS)
12. ChatGPT UI Clone (HTML, Tailwind CSS)
                `
              },
              ...newMessage.slice(-10)
            ]
          })
        }
      );

      if (!res.ok) {
        const errData = await res.json()
        console.error(errData)
        throw new Error(errData.error?.message || 'Groq Api Error');

      }

      const data = await res.json()

      const aiMessages = {
        role: 'assistant',
        content: data.choices[0].message.content
      }

      setMessages((prev) => [...prev, aiMessages])
    }
    catch (err) {
      setError(err.message)
      setLoader(false)
    }
    finally {
      setLoader(false)
    }

  };

  const handelKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftkey) {
      e.preventDefault()
      sendMessage()
    }
  }


  return (
    <div>
      <button onClick={() => setShow(!show)} className='cursor-pointer'>
        <img
          className='fixed bottom-2 right-0 w-40 animate__animated animate__shakeX'
          src="/ai.png" />
      </button>

      {
        show &&
        <div className='animate__animated shadow-white rounded-t-lg animate__fadeIn rounded-b-lg w-90 shadow-sm  fixed z-120 bottom-25 right-20 bg-white overflow-hidden'>
          <div className='flex justify-between items-center bg-black text-white p-4'>
            <h1 className='animate__animated animate__slideInLeft'>AI CHATBOAT</h1>
            <GiRobotHelmet size={25} className='animate__animated animate__slideInRight' />
          </div>

          <div className='h-80 p-3 overflow-y-scroll hide-scrollbar'>
            {
              messages.length === 0 && (
                <div className='flex justify-center items-center flex-col mt-20'>
                  <img src="/ai.png" className='w-30 animate__animated animate__swing' alt="" />
                  <h1 className='animate__animated animate__flipInY'>Hey there ! Welcome to my portfolio</h1>
                </div>
              )
            }


            {
              messages.map((msg, i) => {
                const isUser = msg.role === 'user'

                return (
                  <div key={i} className={`flex text-sm  ${isUser ? 'justify-end items-center' : 'justify-start items-center'
                    }`}>
                    <div className={`max-w-[80%] whitespace-pre-wrap p-2 mb-2 ${isUser ? 'bg-black text-white rounded-b-lg rounded-tl-lg' : 'bg-black/50 text-white rounded-t-lg rounded-br-lg'
                      }`}>
                      {msg.content}
                    </div>
                  </div>
                )
              })
            }


            {
              loader &&
              (
                <div className='flex gap-2 items-center w-fit bg-gray-200 p-2 rounded-lg'>
                  <div className='w-5 h-5 bg-gray-200 rounded-full animate-spin border border-t-white border-black'></div>
                  <span>Thinking...</span>
                </div>
              )
            }


            <div ref={messageEndRef}></div>
          </div>

          <div className='flex items-center gap-2 p-2 justify-between bg-black'>
            <input type="text"
              value={inputValue}
              onKeyDown={handelKeyPress}
              placeholder='ask anythink...'
              onChange={(e) => setInputValue(e.target.value)}
              className='w-full outline-none border rounded-md p-2 bg-white animate__animated animate__slideInUp'
            />

            <button
              onClick={sendMessage}
              disabled={!inputValue.trim()}
              className='py-2 rounded-md px-3 animate__animated animate__slideInUp bg-white disabled:opacity-80 opacity-100 text-black cursor-pointer'>

              {
                loader ? (
                  <div className=' animate-spin w-5 h-5 rounded-full border-2 bg-black/30 border-t-white border-black'>
                  </div>
                )
                  :

                  <RiSendPlaneFill size={25} />
              }

            </button>

          </div>
        </div>
      }
    </div>
  )
}

export default Ai_ChatBot