import { Navigation } from "@/components/shared/navigation";
import { ThreadList } from "@/components/thread/thread-list";
import { useSession } from "@/lib/auth";
import { Navigate, Outlet } from "react-router";

export default function ChatLayout() {
  const { data: session } = useSession();

  if (!session) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex flex-col h-screen">
      <Navigation />
      <main className="flex flex-row flex-1 overflow-hidden">
        <div className="min-w-[320px] max-w-[320px] flex">
          <ThreadList />
        </div>
        <div className="flex-1 overflow-hidden">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
