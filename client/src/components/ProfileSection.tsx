import { User, Package, Heart, Settings, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useAuth } from "@/contexts/AuthContext";
import { useWishlist } from "@/contexts/WishlistContext";
import { mockOrders } from "@/lib/mockData";
import { Link } from "wouter";

export default function ProfileSection() {
  const { user, logout } = useAuth();
  const { items: wishlistItems } = useWishlist();

  if (!user) {
    return (
      <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center py-12">
        <CardContent>
          <p className="text-muted-foreground mb-4">Please log in to view your profile</p>
          <Link href="/login">
            <Button data-testid="button-login-prompt">Login</Button>
          </Link>
        </CardContent>
      </Card>
    );
  }

  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return <Badge className="bg-yellow-500/20 text-yellow-400 border-0">Pending</Badge>;
      case "shipped":
        return <Badge className="bg-blue-500/20 text-blue-400 border-0">Shipped</Badge>;
      case "delivered":
        return <Badge className="bg-green-500/20 text-green-400 border-0">Delivered</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <Avatar className="w-24 h-24 border-4 border-neon-purple">
              <AvatarFallback className="bg-gradient-to-br from-neon-pink to-neon-purple text-3xl font-bold text-white">
                {user.name.charAt(0).toUpperCase()}
              </AvatarFallback>
            </Avatar>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-2xl font-black" data-testid="text-user-name">{user.name}</h2>
              <p className="text-muted-foreground" data-testid="text-user-email">{user.email}</p>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-3">
                <Badge variant="secondary" className="bg-neon-purple/20 text-neon-purple border-0">
                  {user.role === "admin" ? "Admin" : "Member"}
                </Badge>
                <Badge variant="secondary">
                  {mockOrders.length} Orders
                </Badge>
                <Badge variant="secondary">
                  {wishlistItems.length} Wishlist Items
                </Badge>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" data-testid="button-settings">
                <Settings className="w-4 h-4" />
              </Button>
              <Button variant="outline" onClick={logout} data-testid="button-logout">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="orders" className="space-y-4">
        <TabsList className="bg-secondary/50">
          <TabsTrigger value="orders" className="gap-2">
            <Package className="w-4 h-4" />
            Orders
          </TabsTrigger>
          <TabsTrigger value="wishlist" className="gap-2">
            <Heart className="w-4 h-4" />
            Wishlist
          </TabsTrigger>
          <TabsTrigger value="account" className="gap-2">
            <User className="w-4 h-4" />
            Account
          </TabsTrigger>
        </TabsList>

        <TabsContent value="orders" className="space-y-4">
          {mockOrders.length === 0 ? (
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center py-12">
              <CardContent>
                <Package className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">No orders yet</p>
                <Link href="/shop">
                  <Button className="mt-4">Start Shopping</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            mockOrders.map((order) => (
              <Card key={order.id} className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader className="pb-3">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div>
                      <CardTitle className="text-lg font-mono">{order.id}</CardTitle>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    {getStatusBadge(order.status)}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center text-sm">
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <span className="text-muted-foreground ml-2">
                            {item.size} / {item.color} x{item.quantity}
                          </span>
                        </div>
                        <span className="text-neon-cyan font-bold">${item.price.toFixed(2)}</span>
                      </div>
                    ))}
                    <div className="border-t border-border pt-3 flex justify-between font-bold">
                      <span>Total</span>
                      <span className="text-neon-pink">${order.total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </TabsContent>

        <TabsContent value="wishlist">
          {wishlistItems.length === 0 ? (
            <Card className="bg-card/50 backdrop-blur-sm border-border/50 text-center py-12">
              <CardContent>
                <Heart className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                <p className="text-muted-foreground">Your wishlist is empty</p>
                <Link href="/shop">
                  <Button className="mt-4">Explore Products</Button>
                </Link>
              </CardContent>
            </Card>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {wishlistItems.map((item) => (
                <Card key={item.id} className="bg-card/50 backdrop-blur-sm border-border/50">
                  <CardContent className="p-4 flex gap-4">
                    <div className="w-20 h-24 rounded overflow-hidden bg-secondary shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">{item.category}</p>
                      <p className="text-lg font-bold text-neon-cyan mt-1">${item.price.toFixed(2)}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </TabsContent>

        <TabsContent value="account">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Name</label>
                  <p className="font-medium">{user.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Email</label>
                  <p className="font-medium">{user.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Account Type</label>
                  <p className="font-medium capitalize">{user.role}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-muted-foreground">Member Since</label>
                  <p className="font-medium">November 2024</p>
                </div>
              </div>
              <div className="pt-4 flex gap-2">
                <Button variant="outline" data-testid="button-edit-profile">Edit Profile</Button>
                <Button variant="outline" data-testid="button-change-password">Change Password</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
