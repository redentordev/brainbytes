"use client";

import ChatLayout from "@/layouts/chat-layout";
import ChatThreadPage from "@/views/chat-thread-page";
import LoginPage from "@/views/login-page";
import NewChatPage from "@/views/new-chat-page";
import NotFoundPage from "@/views/not-found-page";
import { BrowserRouter, Routes, Route, Navigate } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/chat" element={<ChatLayout />}>
          <Route index element={<NewChatPage />} />
          <Route path="/chat/:threadId" element={<ChatThreadPage />} />
        </Route>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
