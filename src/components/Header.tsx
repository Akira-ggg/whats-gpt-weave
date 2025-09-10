import { Bell, Search, User, LogOut } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useAuth } from "@/contexts/AuthContext";
import { useToast } from "@/hooks/use-toast";

export function Header() {
  const { user, signOut } = useAuth();
  const { toast } = useToast();

  const handleSignOut = async () => {
    try {
      await signOut();
      toast({
        title: "Logout realizado",
        description: "Você foi desconectado com sucesso",
      });
    } catch (error) {
      toast({
        title: "Erro",
        description: "Erro ao fazer logout",
        variant: "destructive",
      });
    }
  };

  return (
    <header className="h-16 border-b border-border bg-card px-6 flex items-center justify-between">
      <div className="flex items-center gap-4 flex-1">
        <div className="relative w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input 
            placeholder="Search conversations, documents..." 
            className="pl-10 bg-background"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full border-2 border-card"></span>
        </Button>
        
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-sm font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">{user?.email || 'admin@company.com'}</p>
          </div>
          <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
            <User className="w-4 h-4 text-white" />
          </div>
          <Button variant="ghost" size="icon" onClick={handleSignOut} title="Sair">
            <LogOut className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </header>
  );
}