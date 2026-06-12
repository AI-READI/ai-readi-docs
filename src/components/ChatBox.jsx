/* eslint-disable react/no-array-index-key */
import { useState, useRef, useEffect } from 'react';
import MessageContent from './messageContent';
import chat, { cancelRequest } from '../../api/chat';

const suggestedQuestions = [
  'How do I download the dataset?',
  'What is AI-READI dataset',
  'What is the dataset license?',
];

function ChatBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(() => {
    try {
      const saved = localStorage.getItem('chat-messages');
      return saved
        ? JSON.parse(saved)
        : [{ role: 'assistant', content: 'Hi! Ask me anything about the AI-READI dataset.' }];
    } catch {
      return [{ role: 'assistant', content: 'Hi! Ask me anything about the AI-READI dataset.' }];
    }
  });
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    localStorage.setItem('chat-messages', JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  async function sendMessage(textForSuggestion) {
    const trimmed = (textForSuggestion ?? input).trim();
    if (!trimmed || isLoading) return;

    setMessages((prev) => [...prev, { role: 'user', content: trimmed }]);
    setInput('');
    setIsLoading(true);

    setMessages((prev) => [...prev, { role: 'assistant', content: '' }]);

    const final = await chat(trimmed, (partial) => {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: 'assistant', content: partial };
        return copy;
      });
    });
    if (final === null) {
      setMessages((prev) => prev.slice(0, -1));
    } else {
      setMessages((prev) => {
        const copy = [...prev];
        copy[copy.length - 1] = { role: 'assistant', content: final };
        return copy;
      });
    }
    setIsLoading(false);
  }

  async function handleKeyDown(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      await sendMessage();
    }
  }

  function handleSuggestionClick(q) {
    setInput(q);
    setTimeout(() => sendMessage(), 50);
  }

  return (
    /* eslint-disable react/react-in-jsx-scope, react/prop-types, react/button-has-type */
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? 'Close chat' : 'Open chat'}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full bg-blue-600 text-white border-none cursor-pointer shadow-lg transition-transform hover:scale-105"
      >
        {isOpen ? (
          <svg
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <>
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
              />
            </svg>
            <span className="text-sm font-medium whitespace-nowrap">Ask about AI-READI</span>
          </>
        )}
      </button>

      {/* Chat Panel */}
      <div
        className={`fixed bottom-24 right-6 z-50 flex flex-col overflow-hidden rounded-2xl border border-gray-200 shadow-2xl transition-all duration-300 w-[500px] max-w-[calc(150vw-2rem)] h-[720px] max-h-[calc(100vh-10rem)] bg-white ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-5 py-4 bg-sky-600 text-white">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
            <svg
              width="20"
              height="20"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
              />
            </svg>
          </div>
          <div>
            <div className="text-sm font-semibold leading-tight">AI-READI Docs Assistant</div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="ml-auto rounded-lg p-1.5 hover:bg-white/20 bg-transparent border-none text-white cursor-pointer"
            aria-label="Close chat"
          >
            <svg
              width="16"
              height="16"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-4 scroll-smooth">
          <div className="flex flex-col gap-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    msg.role === 'user'
                      ? 'bg-sky-600 text-white rounded-br-sm'
                      : 'bg-gray-100 text-gray-800 rounded-bl-sm'
                  }`}
                >
                  <MessageContent content={msg.content} />
                </div>
              </div>
            ))}

            {messages.length === 1 && !isLoading && (
              <div className="mt-2 flex flex-col gap-2">
                <p className="text-md font-medium text-gray-500 m-0">Try asking:</p>
                {suggestedQuestions.map((q, i) => (
                  <button
                    key={`${q}-${i}`}
                    onClick={() => handleSuggestionClick(q)}
                    className="rounded-xl border border-gray-200 px-3 py-2 text-left text-md bg-transparent text-gray-800 cursor-pointer transition-colors hover:bg-sky-600 hover:text-white hover:border-transparent"
                  >
                    {q}
                  </button>
                ))}
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input */}
        <div className="border-t border-gray-200 px-4 py-3">
          <div className="flex items-center gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about the AI-READI dataset..."
              disabled={isLoading}
              className="flex-1 rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-sky-600 bg-white text-gray-800"
            />
            <button
              onClick={() => (isLoading ? cancelRequest() : sendMessage())}
              disabled={!isLoading && !input.trim()}
              className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-sky-600 text-white border-none cursor-pointer disabled:opacity-40"
              aria-label={isLoading ? 'Cancel request' : 'Send message'}
            >
              {isLoading ? (
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <rect x="6" y="6" width="12" height="12" rx="2" />
                </svg>
              ) : (
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              )}
            </button>
          </div>
          <p className="mt-2 text-center text-[10px] text-gray-400 m-0">
            Answers are based on AIREADI documentationbut AI can make mistakes. Please double-check
            responses.
          </p>
        </div>
      </div>
    </>
  );
}

export default ChatBox;
