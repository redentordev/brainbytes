"use client";

import ChatLayout from "@/layouts/chat-layout";
import ChatThreadPage from "@/pages/chat-thread-page";
import LoginPage from "@/pages/login-page";
import NewChatPage from "@/pages/new-chat-page";
import NotFoundPage from "@/pages/not-found-page";
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
