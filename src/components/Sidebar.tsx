import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  Brain, 
  MessageSquare, 
  Settings, 
  Bot,
  Database,
  BarChart3,
  FileText
} from "lucide-react";
import { useState } from "react";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", id: "dashboard", active: true },
  { icon: Brain, label: "Knowledge Base", id: "knowledge" },
  { icon: MessageSquare, label: "Conversations", id: "conversations" },
  { icon: BarChart3, label: "Analytics", id: "analytics" },
  { icon: Settings, label: "Settings", id: "settings" },
];

export function Sidebar() {
  const [activeItem, setActiveItem] = useState("dashboard");

  return (
    <div className="w-64 bg-card border-r border-border flex flex-col">
      <div className="p-6 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
            <Bot className="w-6 h-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="font-bold text-lg">RAG Bot</h1>
            <p className="text-sm text-muted-foreground">WhatsApp AI</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4">
        <div className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeItem === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200",
                  isActive
                    ? "bg-primary text-primary-foreground shadow-glow"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent"
                )}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <div className="p-4 border-t border-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-accent">
          <Database className="w-5 h-5 text-success" />
          <div className="flex-1">
            <p className="text-sm font-medium">Connected</p>
            <p className="text-xs text-muted-foreground">OpenAI API</p>
          </div>
        </div>
      </div>
    </div>
  );
}