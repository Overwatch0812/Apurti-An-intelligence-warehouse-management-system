"use client";

import { useState, useEffect, useRef } from "react";
import { Cpu, Send, User, Zap, Menu, X } from "lucide-react";
import { Agent } from "../services/agents";

const FuturisticChatFullPage = () => {
  const [messages, setMessages] = useState([{ content: null, isAI: null }]);
  const [input, setInput] = useState("");
  const [isThinking, setIsThinking] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [res, setRes] = useState([]);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]); //This line remains unchanged as it is not the target of the update.

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { content: input, isAI: false };

      // Add user message to the chat
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput("");
      setIsThinking(true);

      try {
        // Call AI Agent in backend
        const aiResponse = await Agent(input);
        // Ensure AI response is in the correct format
        const aiMessage = { content: aiResponse, isAI: true };

        // Append AI response to the chat
        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } catch (error) {
        console.error("Error fetching AI response:", error);
      } finally {
        setIsThinking(false);
      }
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(135deg, #f0f4f8 0%, #d9e2ec 100%)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* Header */}
      <header
        style={{
          background: "#ffffff",
          borderBottom: "1px solid #d9e2ec",
          padding: "1rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
            }}
          >
            {isSidebarOpen ? (
              <X size={24} color="#0694a2" />
            ) : (
              <Menu size={24} color="#0694a2" />
            )}
          </button>
          <h1
            style={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              color: "#0694a2",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Zap
              style={{
                width: "1.5rem",
                height: "1.5rem",
                marginRight: "0.5rem",
                color: "#3c366b",
                animation: "float 3s ease-in-out infinite",
              }}
            />
            AI Assistant
          </h1>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <div
            style={{
              width: "0.75rem",
              height: "0.75rem",
              borderRadius: "50%",
              backgroundColor: "#0694a2",
              animation: "glow 2s infinite",
            }}
          ></div>
          <span style={{ color: "#0694a2", fontSize: "0.875rem" }}>Online</span>
        </div>
      </header>

      {/* Main content area */}
      <div style={{ display: "flex", flexGrow: 1, overflow: "hidden" }}>
        {/* Sidebar */}
        <aside
          style={{
            width: isSidebarOpen ? "250px" : "0",
            background: "#ffffff",
            borderRight: "1px solid #d9e2ec",
            transition: "width 0.3s ease",
            overflow: "hidden",
          }}
        >
          <nav style={{ padding: "1rem" }}>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{ color: "#0694a2", textDecoration: "none" }}
                >
                  Home
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{ color: "#0694a2", textDecoration: "none" }}
                >
                  Chat History
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{ color: "#0694a2", textDecoration: "none" }}
                >
                  Settings
                </a>
              </li>
              <li style={{ marginBottom: "0.5rem" }}>
                <a
                  href="#"
                  style={{ color: "#0694a2", textDecoration: "none" }}
                >
                  Help
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* Chat area */}
        <main
          style={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div style={{ flexGrow: 1, overflowY: "auto", padding: "1rem" }}>
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  justifyContent: msg.isAI ? "flex-start" : "flex-end",
                  marginBottom: "1rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "start",
                    maxWidth: "70%",
                    flexDirection: msg.isAI ? "row" : "row-reverse",
                  }}
                >
                  <div
                    style={{
                      width: "2rem",
                      height: "2rem",
                      borderRadius: "50%",
                      backgroundColor: msg.isAI ? "#0694a2" : "#3c366b",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginRight: msg.isAI ? "0.5rem" : 0,
                      marginLeft: msg.isAI ? 0 : "0.5rem",
                    }}
                  >
                    {msg.isAI ? (
                      <Cpu
                        style={{
                          width: "1rem",
                          height: "1rem",
                          color: "white",
                        }}
                      />
                    ) : (
                      <User
                        style={{
                          width: "1rem",
                          height: "1rem",
                          color: "white",
                        }}
                      />
                    )}
                  </div>
                  <div
                    style={{
                      padding: "0.75rem",
                      borderRadius: "0.5rem",
                      backgroundColor: msg.isAI ? "#e6f6ff" : "#ebf4ff",
                      color: "#1a202c",
                      boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
                    }}
                  >
                    <p>{msg.content}</p>
                  </div>
                </div>
              </div>
            ))}
            {isThinking && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  marginTop: "0.5rem",
                }}
              >
                <div style={{ display: "flex", gap: "0.25rem" }}>
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      style={{
                        width: "0.5rem",
                        height: "0.5rem",
                        borderRadius: "50%",
                        backgroundColor: "#0694a2",
                        animation: `pulse 1s infinite ${i * 0.2}s`,
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input area */}
          <div
            style={{
              background: "#ffffff",
              borderTop: "1px solid #d9e2ec",
              padding: "1rem",
              display: "flex",
              gap: "0.5rem",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
              placeholder="Type your message here..."
              style={{
                flexGrow: 1,
                padding: "0.5rem",
                borderRadius: "0.25rem",
                border: "1px solid #d9e2ec",
                background: "#ffffff",
                color: "#1a202c",
              }}
            />
            <button
              onClick={handleSend}
              style={{
                padding: "0.5rem 1rem",
                borderRadius: "0.25rem",
                backgroundColor: "#0694a2",
                color: "white",
                border: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                transition: "background-color 0.2s",
              }}
            >
              <Send style={{ width: "1rem", height: "1rem" }} />
              Send
            </button>
          </div>
        </main>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        @keyframes glow {
          0%,
          100% {
            box-shadow: 0 0 5px #0694a2, 0 0 10px #0694a2, 0 0 15px #0694a2;
          }
          50% {
            box-shadow: 0 0 10px #0694a2, 0 0 20px #0694a2, 0 0 30px #0694a2;
          }
        }
      `}</style>
    </div>
  );
};

export default FuturisticChatFullPage;
