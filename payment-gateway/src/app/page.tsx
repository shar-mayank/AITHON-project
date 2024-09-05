  // "use client";
  // import { useScroll, useTransform } from "framer-motion";
  // import React from "react";
  // import { GoogleGeminiEffect } from "../components/ui/google-gemini-effect";

  // export function GoogleGeminiEffectDemo() {
  //   const ref = React.useRef(null);
  //   const { scrollYProgress } = useScroll({
  //     target: ref,
  //     offset: ["start start", "end start"],
  //   });

  //   const pathLengthFirst = useTransform(scrollYProgress, [0, 0.8], [0.2, 1.2]);
  //   const pathLengthSecond = useTransform(scrollYProgress, [0, 0.8], [0.15, 1.2]);
  //   const pathLengthThird = useTransform(scrollYProgress, [0, 0.8], [0.1, 1.2]);
  //   const pathLengthFourth = useTransform(scrollYProgress, [0, 0.8], [0.05, 1.2]);
  //   const pathLengthFifth = useTransform(scrollYProgress, [0, 0.8], [0, 1.2]);

  //   return (
  //     <div
  //       className="h-[400vh] bg-black w-full dark:border dark:border-white/[0.1] rounded-md relative pt-40 overflow-clip"
  //       ref={ref}
  //     >
  //       <GoogleGeminiEffect
  //         pathLengths={[
  //           pathLengthFirst,
  //           pathLengthSecond,
  //           pathLengthThird,
  //           pathLengthFourth,
  //           pathLengthFifth,
  //         ]}
  //       />
  //     </div>
  //   );
  // }
 "use client";

import React, { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function PaymentMethod() {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);

  const handlePaymentMethodClick = (method: string) => {
    setSelectedPaymentMethod(method);
  };

  return (
    <main className="flex min-h-screen items-center justify-center p-24">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Payment Method</CardTitle>
          <p className="text-sm text-muted-foreground">
            Add a new payment method to your account.
          </p>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between space-x-4 mb-6">
            {/* Credit Card Button with Larger Icon and Text */}
            <Button
              variant="outline"
              className="w-1/3 h-32 flex flex-col items-center justify-center space-y-2" // Increased height to fit both icon and text
              onClick={() => handlePaymentMethodClick("card")}
            >
              <img src="/credit-card.svg" alt="Credit Card" className="h-12" /> {/* Increased icon size */}
              <span className="text-center text-base">Card</span> {/* Adjusted text size */}
            </Button>

            {/* Google Pay Button with Logo */}
            <Button
              variant="outline"
              className="w-1/3 h-32 flex flex-col items-center justify-center space-y-2"
              onClick={() => handlePaymentMethodClick("google")}
            >
              <img src="/google-pay-primary-logo-svg.svg" alt="Google Pay" className="h-12" />
              <span className="text-center text-base">Google Pay</span> {/* Added text */}
            </Button>

            {/* Apple Pay Button with Logo */}
            <Button
              variant="outline"
              className="w-1/3 h-32 flex flex-col items-center justify-center space-y-2"
              onClick={() => handlePaymentMethodClick("apple")}
            >
              <img src="/apple-pay-logo-svg.svg" alt="Apple Pay" className="h-12" />
              <span className="text-center text-base">Apple Pay</span> {/* Added text */}
            </Button>
          </div>

          {selectedPaymentMethod === "card" && (
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="First Last" />
              </div>  
              <div className="space-y-2">
                <Label htmlFor="card-number">Card number</Label>
                <Input id="card-number" placeholder="1234 5678 9123 0000" />
              </div>

              <div className="flex space-x-2">
                <div className="flex-1">
                  <Label htmlFor="month">Expires</Label>
                  <Select>
                    <SelectTrigger id="month" className="w-full">
                      <SelectValue placeholder="Month" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="01">January</SelectItem>
                      <SelectItem value="02">February</SelectItem>
                      <SelectItem value="03">March</SelectItem>
                      <SelectItem value="04">April</SelectItem>
                      <SelectItem value="05">May</SelectItem>
                      <SelectItem value="06">June</SelectItem>
                      <SelectItem value="07">July</SelectItem>
                      <SelectItem value="08">August</SelectItem>
                      <SelectItem value="09">September</SelectItem>
                      <SelectItem value="10">October</SelectItem>
                      <SelectItem value="11">November</SelectItem>
                      <SelectItem value="12">December</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex-1">
                  <Label htmlFor="year">Year</Label>
                  <Select>
                    <SelectTrigger id="year" className="w-full">
                      <SelectValue placeholder="Year" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="2024">2024</SelectItem>
                      <SelectItem value="2025">2025</SelectItem>
                      <SelectItem value="2026">2026</SelectItem>
                      <SelectItem value="2027">2027</SelectItem>
                      <SelectItem value="2028">2028</SelectItem>
                      <SelectItem value="2029">2029</SelectItem>
                      <SelectItem value="2030">2030</SelectItem>
                      <SelectItem value="2031">2031</SelectItem>
                      <SelectItem value="2032">2032</SelectItem>
                      <SelectItem value="2033">2033</SelectItem>
                      <SelectItem value="2034">2034</SelectItem>
                      <SelectItem value="2035">2035</SelectItem>
                      <SelectItem value="2036">2036</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="cvc">CVV</Label>
                  <Input id="cvc" placeholder="CVV" />
                </div>
              </div>
            </div>
          )}

          {selectedPaymentMethod === "google" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="google-email">UPI ID</Label>
                <Input id="google-email" placeholder="example@okicici" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="google-phone">Phone Number (optional)</Label>
                <Input id="google-phone" placeholder="123-456-7890" />
              </div>
            </div>
          )}

          {selectedPaymentMethod === "apple" && (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="apple-email-or-phone">Apple Pay ID</Label>
                <Input id="apple-email-or-phone" placeholder="example#1234" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="apple-password">Password</Label>
                <Input id="apple-password" type="password" placeholder="Your wallet password" />
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          <Button className="w-full">Continue</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
