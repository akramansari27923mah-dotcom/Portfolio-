import { useEffect, useRef, useState } from 'react'
import { RiSendPlaneFill } from "react-icons/ri";
import { GiRobotHelmet } from "react-icons/gi";
import sendMessage from '../services/chatApi';
import MarkdownRenderer from './MarkDownRender';

const Ai_ChatBot = () => {
  const [show, setShow] = useState(false)
  const [message, setMessage] = useState([])
  const [loader, setLoader] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const messageEndRef = useRef(null)

  const autoSrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }

  useEffect(() => {
    autoSrollToBottom()
  }, [message])


  const hendelSend = async () => {
    if (!inputValue.trim()) return

    setLoader(true)

    const newMessage = [...message, { role: 'user', content: inputValue }]
    setMessage(newMessage)

    try {
      const data = await sendMessage(inputValue, newMessage)

      setMessage((prev) => [...prev, {
        role: 'assistant',
        content: data.reply
      }])
    }
    catch (err) {
      console.error(err);
      setMessage((prev) => [
        ...prev,
        { role: "assistant", content: "❌ Error: Server down ya API fail ho gaya" },
      ]);
    }
    finally {
      setLoader(false)
      setInputValue('')
    }
  }

  const handelKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftkey) {
      e.preventDefault()
      hendelSend()
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
              message.length === 0 && (
                <div className='flex justify-center items-center flex-col mt-20'>
                  <img src="/ai.png" className='w-30 animate__animated animate__swing' alt="" />
                  <h1 className='animate__animated animate__flipInY'>Hey there ! Welcome to my portfolio</h1>
                </div>
              )
            }


            {
              message.map((msg, i) => {
                const isUser = msg.role === 'user'

                return (
                  <div key={i} className={`flex text-sm  ${isUser ? 'justify-end items-center' : 'justify-start items-center'
                    }`}>
                    <div className={`max-w-[80%] whitespace-pre-wrap p-2 mb-2 ${isUser ? 'bg-black text-white rounded-b-lg rounded-tl-lg' : 'bg-black/50 text-white rounded-t-lg rounded-br-lg'
                      }`}>
                      <MarkdownRenderer content={msg.content} />

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
              onClick={hendelSend}
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