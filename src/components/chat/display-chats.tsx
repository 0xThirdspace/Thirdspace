import {
  EmojiSVG,
  SearchSVG,
  AttachSVG,
  SendChatText,
  ReceiveChatText,
} from "../shared";
import Image from "next/image";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BackButton } from "../Sidebar/creator-mobile";
import React, { useEffect, useRef, useState } from "react";

type Message = {
  text: string;
  sender: string;
  timestamp: string;
};

const DisplayChats = (props: { onclick?: any }) => {
  const [messages, setMessages] = useState<Message[] | []>([]);
  const [messageInput, setMessageInput] = useState<string>("");
  const chatBoxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = () => {
    if (messageInput.trim() === "") return;

    const newMessage: Message = {
      text: messageInput,
      sender: "Me",
      timestamp: new Date().toLocaleTimeString(),
    };

    setMessages([...messages, newMessage]);
    setMessageInput("");
  };

  return (
    <div className="w-screen lg:w-[70%] xl:w-[64%] 2xl:w-[72%] overflow-y-auto no-scrollbar">
      {/* chat contact */}
      <div className="w-screen lg:w-[70%]  xl:w-[64%] 2xl:w-[72%]  pl-7 pr-10 py-2 absolute top-0 flex justify-between">
        <div className="flex gap-3 items-center">
          <div onClick={props.onclick}>
            <BackButton />
          </div>
          <Image
            src="/images/user-avatar.png"
            alt={"avatar"}
            width={48}
            height={48}
          />
          <p>Victor</p>
        </div>
        <div className="flex gap-3 items-center">
          <SearchSVG />
          <BsThreeDotsVertical height={24} width={24} />
        </div>
      </div>

      {/* chats */}
      <div
        ref={chatBoxRef}
        className="lg:w-[70%] xl:w-[64%] 2xl:w-[72%] h-[79%] flex flex-col absolute top-20 pl-2 sm:pl-7 pr-2 sm:pr-10 overflow-y-auto no-scrollbar"
      >
        <>
          <div className="bg-[#242424] text-[#999999] mx-auto py-1 px-3 rounded-md">
            Yesterday
          </div>

          <div className="py-5 h-auto flex flex-col gap-[6px]">
            <SendChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
            <ReceiveChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
            <ReceiveChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />

            <SendChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
            <SendChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
          </div>
        </>
        <>
          <div className="bg-[#242424] text-[#999999] mx-auto py-1 px-3 rounded-md">
            Today
          </div>

          <div className="py-5 h-auto flex flex-col gap-[6px]">
            <ReceiveChatText
              text="What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?,What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?"
              time="3:45PM"
            />

            <ReceiveChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
            <SendChatText
              text="What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?,What did the cow say to the chicken?, What did the cow say to the chicken?, What did the cow say to the chicken?"
              time="3:45PM"
            />
            <SendChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
            <ReceiveChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />
            <ReceiveChatText
              text="What did the cow say to the chicken?"
              time="3:45PM"
            />

            {messages.map((message, index) => {
              return (
                <SendChatText
                  key={index}
                  text={message.text}
                  time={message.timestamp}
                />
              );
            })}
          </div>
        </>
      </div>

      {/* //chat input */}
      <div className="absolute bottom-2 w-screen lg:w-[70%] xl:w-[64%] 2xl:w-[72%] pl-7 pr-10">
        <div
          className={`flex items-center rounded-full w-[100%] h-auto px-6 py-3 gap-3 text-[#999999] border-zinc-200 border-[1px]`}
        >
          <EmojiSVG />
          <AttachSVG />
          <input
            type="text"
            placeholder="Write your message here"
            className="bg-inherit focus:outline-none mx-3 "
            value={messageInput}
            onChange={(e) => setMessageInput(e.target.value)}
            onKeyUp={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <Image
            alt="send"
            width={40}
            height={20}
            src="/images/send.png"
            onClick={handleSendMessage}
          />
        </div>
      </div>
    </div>
  );
};

export default DisplayChats;
