import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const mockOrders = [
  { id: "ORD-1247", shake: "Whey Protein", amount: 120, payment: "Success", dispense: "Success", time: "2 mins ago" },
  { id: "ORD-1246", shake: "Mass Gainer", amount: 180, payment: "Success", dispense: "Success", time: "5 mins ago" },
  { id: "ORD-1245", shake: "Diet Shake", amount: 100, payment: "Success", dispense: "Success", time: "8 mins ago" },
  { id: "ORD-1244", shake: "Whey Protein", amount: 160, payment: "Success", dispense: "Failed", time: "12 mins ago" },
  { id: "ORD-1243", shake: "Mass Gainer", amount: 220, payment: "Failed", dispense: "Pending", time: "15 mins ago" },
  { id: "ORD-1242", shake: "Whey Protein", amount: 120, payment: "Success", dispense: "Success", time: "18 mins ago" },
  { id: "ORD-1241", shake: "Diet Shake", amount: 100, payment: "Success", dispense: "Success", time: "22 mins ago" },
];

const Orders = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold text-foreground mb-2">Orders</h1>
        <p className="text-muted-foreground">View and manage all orders</p>
      </div>

      <Card className="bg-card border-2 border-border">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              <TableHead className="text-foreground font-bold">Order ID</TableHead>
              <TableHead className="text-foreground font-bold">Shake</TableHead>
              <TableHead className="text-foreground font-bold">Amount</TableHead>
              <TableHead className="text-foreground font-bold">Payment</TableHead>
              <TableHead className="text-foreground font-bold">Dispense</TableHead>
              <TableHead className="text-foreground font-bold">Time</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockOrders.map((order) => (
              <TableRow key={order.id} className="border-border">
                <TableCell className="font-mono text-foreground">{order.id}</TableCell>
                <TableCell className="text-foreground">{order.shake}</TableCell>
                <TableCell className="text-foreground">₹{order.amount}</TableCell>
                <TableCell>
                  <Badge variant={order.payment === "Success" ? "default" : "destructive"}>
                    {order.payment}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      order.dispense === "Success"
                        ? "default"
                        : order.dispense === "Failed"
                        ? "destructive"
                        : "secondary"
                    }
                  >
                    {order.dispense}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{order.time}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

export default Orders;
