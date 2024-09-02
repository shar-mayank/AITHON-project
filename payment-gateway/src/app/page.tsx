import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <p className="text-sm text-muted-foreground">
            Add a new payment method to your account.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-4">
            <Button variant="outline" className="w-full">Card</Button>
            <Button variant="outline" className="w-full">Paytm</Button>
            <Button variant="outline" className="w-full">Google Pay</Button>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" placeholder="First Last" />

            <Label htmlFor="card-number">Card number</Label>
            <Input id="card-number" placeholder="1234 5678 9123 0000" />

            <div className="flex space-x-2">
              <div>
                <Label htmlFor="month">Expires</Label>
                <Select>
                  <SelectTrigger id="month" className="w-[100px]">
                    <SelectValue placeholder="Month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="01">January</SelectItem>
                    <SelectItem value="02">February</SelectItem>
                    <SelectItem value="03">March</SelectItem>
                    {/* Add more months */}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="year" className="sr-only">
                  Year
                </Label>
                <Select>
                  <SelectTrigger id="year" className="w-[80px]">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2025">2025</SelectItem>
                    <SelectItem value="2026">2026</SelectItem>
                    {/* Add more years */}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="CVC" />
              </div>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Continue</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
