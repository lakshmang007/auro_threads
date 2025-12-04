import { useState } from "react";
import { Package, ShoppingBag, Users, DollarSign, Plus, Edit, Trash2, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { products, mockOrders, categories } from "@/lib/mockData";
import { useToast } from "@/hooks/use-toast";

// todo: remove mock functionality
const stats = [
  { title: "Total Revenue", value: "$12,459", icon: DollarSign, change: "+12.5%", color: "text-green-400" },
  { title: "Orders", value: "156", icon: ShoppingBag, change: "+8.2%", color: "text-neon-pink" },
  { title: "Products", value: "24", icon: Package, change: "+3", color: "text-neon-cyan" },
  { title: "Customers", value: "1,245", icon: Users, change: "+18.7%", color: "text-neon-purple" },
];

export default function AdminDashboard() {
  const { toast } = useToast();
  const [productList, setProductList] = useState(products);
  const [orderList, setOrderList] = useState(mockOrders);
  const [editingProduct, setEditingProduct] = useState<typeof products[0] | null>(null);

  const handleDeleteProduct = (id: string) => {
    setProductList((prev) => prev.filter((p) => p.id !== id));
    toast({
      title: "Product deleted",
      description: "The product has been removed.",
    });
  };

  const handleUpdateOrderStatus = (orderId: string, status: string) => {
    setOrderList((prev) =>
      prev.map((o) => (o.id === orderId ? { ...o, status } : o))
    );
    toast({
      title: "Order updated",
      description: `Order ${orderId} status changed to ${status}.`,
    });
  };

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
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-black">Admin Dashboard</h1>
          <p className="text-muted-foreground">Manage your store</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-neon-pink to-neon-purple" data-testid="button-add-product">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-card border-border max-w-2xl">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
            </DialogHeader>
            <div className="grid grid-cols-2 gap-4 py-4">
              <div className="space-y-2">
                <Label>Product Name</Label>
                <Input className="bg-secondary/50" data-testid="input-product-name" />
              </div>
              <div className="space-y-2">
                <Label>Price</Label>
                <Input type="number" className="bg-secondary/50" data-testid="input-product-price" />
              </div>
              <div className="space-y-2">
                <Label>Category</Label>
                <Select>
                  <SelectTrigger className="bg-secondary/50">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.slice(1).map((cat) => (
                      <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Stock</Label>
                <Input type="number" className="bg-secondary/50" data-testid="input-product-stock" />
              </div>
              <div className="col-span-2 space-y-2">
                <Label>Description</Label>
                <Input className="bg-secondary/50" data-testid="input-product-description" />
              </div>
            </div>
            <div className="flex justify-end gap-2">
              <Button variant="outline">Cancel</Button>
              <Button
                className="bg-neon-pink"
                onClick={() => toast({ title: "Product added", description: "New product has been created." })}
                data-testid="button-save-product"
              >
                Save Product
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.title}</p>
                  <p className="text-2xl font-black mt-1">{stat.value}</p>
                  <p className={`text-xs mt-1 ${stat.color}`}>{stat.change} from last month</p>
                </div>
                <div className={`w-12 h-12 rounded-xl bg-secondary/50 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-6 h-6" />
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Tabs defaultValue="products" className="space-y-4">
        <TabsList className="bg-secondary/50">
          <TabsTrigger value="products">Products</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
        </TabsList>

        <TabsContent value="products">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Products</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Product</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Price</TableHead>
                    <TableHead>Stock</TableHead>
                    <TableHead>Rating</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {productList.map((product) => (
                    <TableRow key={product.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-12 rounded overflow-hidden bg-secondary">
                            <img src={product.images[0]} alt="" className="w-full h-full object-cover" />
                          </div>
                          <span className="font-medium">{product.name}</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary">{product.category}</Badge>
                      </TableCell>
                      <TableCell className="text-neon-cyan font-bold">${product.price}</TableCell>
                      <TableCell>
                        <Badge
                          className={
                            product.stock > 20
                              ? "bg-green-500/20 text-green-400 border-0"
                              : product.stock > 5
                              ? "bg-yellow-500/20 text-yellow-400 border-0"
                              : "bg-red-500/20 text-red-400 border-0"
                          }
                        >
                          {product.stock}
                        </Badge>
                      </TableCell>
                      <TableCell>{product.rating}</TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-1">
                          <Button variant="ghost" size="icon" data-testid={`button-view-${product.id}`}>
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="icon" data-testid={`button-edit-${product.id}`}>
                            <Edit className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-destructive hover:text-destructive"
                            onClick={() => handleDeleteProduct(product.id)}
                            data-testid={`button-delete-${product.id}`}
                          >
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="orders">
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Order ID</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Items</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orderList.map((order) => (
                    <TableRow key={order.id}>
                      <TableCell className="font-mono">{order.id}</TableCell>
                      <TableCell>{order.date}</TableCell>
                      <TableCell>{order.items.length} items</TableCell>
                      <TableCell className="text-neon-cyan font-bold">${order.total.toFixed(2)}</TableCell>
                      <TableCell>{getStatusBadge(order.status)}</TableCell>
                      <TableCell className="text-right">
                        <Select
                          value={order.status}
                          onValueChange={(value) => handleUpdateOrderStatus(order.id, value)}
                        >
                          <SelectTrigger className="w-[130px] bg-secondary/50" data-testid={`select-status-${order.id}`}>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Pending">Pending</SelectItem>
                            <SelectItem value="Shipped">Shipped</SelectItem>
                            <SelectItem value="Delivered">Delivered</SelectItem>
                          </SelectContent>
                        </Select>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
