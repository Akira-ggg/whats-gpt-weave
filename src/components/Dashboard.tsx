import { 
  MessageSquare, 
  Users, 
  Brain, 
  TrendingUp,
  Activity,
  Clock,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { MetricCard } from "./MetricCard";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Dashboard() {
  const recentConversations = [
    {
      id: "1",
      user: "+55 11 99999-9999",
      message: "Como posso cancelar meu pedido?",
      status: "resolved",
      timestamp: "2 min ago",
      confidence: 0.95
    },
    {
      id: "2", 
      user: "+55 11 88888-8888",
      message: "Qual o prazo de entrega para São Paulo?",
      status: "active",
      timestamp: "5 min ago",
      confidence: 0.87
    },
    {
      id: "3",
      user: "+55 11 77777-7777", 
      message: "Preciso alterar meu endereço de entrega",
      status: "pending",
      timestamp: "12 min ago",
      confidence: 0.72
    },
  ];

  const knowledgeStats = [
    { category: "Políticas", documents: 45, lastUpdated: "2 hours ago" },
    { category: "Produtos", documents: 128, lastUpdated: "1 day ago" },
    { category: "Suporte", documents: 67, lastUpdated: "3 hours ago" },
    { category: "FAQ", documents: 89, lastUpdated: "1 hour ago" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Monitor your WhatsApp RAG chatbot performance</p>
        </div>
        <Button className="bg-gradient-primary hover:shadow-glow transition-all duration-200">
          <Activity className="w-4 h-4 mr-2" />
          View Live Chat
        </Button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Conversations"
          value="1,248"
          change="+12% from last week"
          changeType="positive"
          icon={MessageSquare}
          iconColor="text-info"
        />
        <MetricCard
          title="Active Users"
          value="342"
          change="+8% from last week"
          changeType="positive"
          icon={Users}
          iconColor="text-success"
        />
        <MetricCard
          title="Knowledge Base"
          value="329"
          change="5 docs added today"
          changeType="neutral"
          icon={Brain}
          iconColor="text-warning"
        />
        <MetricCard
          title="Success Rate"
          value="94.2%"
          change="+2.1% from last week"
          changeType="positive"
          icon={TrendingUp}
          iconColor="text-success"
        />
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Conversations */}
        <Card className="p-6 bg-gradient-secondary border-border/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Recent Conversations</h3>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          <div className="space-y-4">
            {recentConversations.map((conv) => (
              <div key={conv.id} className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/30">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-medium text-sm">{conv.user}</p>
                    <Badge variant={
                      conv.status === "resolved" ? "default" : 
                      conv.status === "active" ? "secondary" : "outline"
                    } className="text-xs">
                      {conv.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">{conv.message}</p>
                  <div className="flex items-center gap-4 mt-2">
                    <span className="text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {conv.timestamp}
                    </span>
                    <span className="text-xs text-success">
                      {Math.round(conv.confidence * 100)}% confidence
                    </span>
                  </div>
                </div>
                {conv.status === "resolved" ? (
                  <CheckCircle className="w-5 h-5 text-success" />
                ) : conv.status === "pending" ? (
                  <AlertCircle className="w-5 h-5 text-warning" />
                ) : (
                  <Activity className="w-5 h-5 text-info animate-pulse" />
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Knowledge Base Status */}
        <Card className="p-6 bg-gradient-secondary border-border/50">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold">Knowledge Base</h3>
            <Button variant="outline" size="sm">Manage</Button>
          </div>
          <div className="space-y-4">
            {knowledgeStats.map((stat) => (
              <div key={stat.category} className="flex items-center justify-between p-4 rounded-lg bg-background/50 border border-border/30">
                <div>
                  <p className="font-medium">{stat.category}</p>
                  <p className="text-sm text-muted-foreground">{stat.documents} documents</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-success">{stat.documents}</p>
                  <p className="text-xs text-muted-foreground">{stat.lastUpdated}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 p-4 rounded-lg bg-accent/50 border border-border/30">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-medium text-success">Vector Database</p>
                <p className="text-sm text-muted-foreground">Ready for queries</p>
              </div>
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}