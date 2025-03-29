import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderForMeForm from "./OrderForMeForm";
import SendAnonymousForm from "./SendAnonymousForm";
import { Gift } from "lucide-react";
const PaymentTabs = () => {
  return (
    <Tabs defaultValue="account" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="me">Order For Me</TabsTrigger>
        <TabsTrigger
          value="anonymous"
          className="flex items-center justify-center"
        >
          <Gift />
          Send Anonymous
        </TabsTrigger>
      </TabsList>
      <TabsContent value="me">
        <OrderForMeForm />
      </TabsContent>
      <TabsContent value="anonymous">
        <SendAnonymousForm />
      </TabsContent>
    </Tabs>
  );
};

export default PaymentTabs;
