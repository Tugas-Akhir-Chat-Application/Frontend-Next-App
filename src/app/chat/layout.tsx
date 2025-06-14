"use client";

import type { ReactNode } from "react";
import { Suspense } from "react";
import { Sidebar } from "@/components/chat/sidebar";
import { MessagesList } from "@/components/chat/messages-list";
import FriendsList from "@/components/chat/friends-list";
import { GroupsList } from "@/components/chat/groups-list";
import { usePathname } from "next/navigation";
import { UserInfoProvider } from "@/components/auth/user-info-provider";
import { WebSocketProvider } from "@/hooks/websocket/WebSocketProviderNew";

export default function ChatLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Determine which list component to render based on the current path
  const renderSidebarContent = () => {
    if (pathname?.startsWith("/chat/messages")) {
      return <MessagesList />;
    } else if (pathname?.startsWith("/chat/friends")) {
      return <FriendsList />;
    } else if (pathname?.startsWith("/chat/groups")) {
      return (
        <Suspense
          fallback={<div className="p-4 text-center">Loading groups...</div>}
        >
          <GroupsList />
        </Suspense>
      );
    }

    // Default to MessagesList
    return <MessagesList />;
  };

  return (
    <UserInfoProvider>
      <WebSocketProvider>
        <div className="flex h-screen bg-gray-100">
          <Sidebar />
          <div className="w-72 border-r border-gray-200">
            {renderSidebarContent()}
          </div>
          <main className="flex-1 overflow-hidden">{children}</main>
        </div>
      </WebSocketProvider>
    </UserInfoProvider>
  );
}
