"use client";
import React from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

import { usePayment } from "@/hooks/usePayment";
import PaymentTabs from "./PaymentTabs";

const PaymentOptions = () => {
  const { isOpen, onClose, onOpen } = usePayment();

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => (open ? onOpen() : onClose())}
    >
      <DialogContent>
        <DialogTitle className="mb-8">Payment Options</DialogTitle>
        <div className="w-full">
          <PaymentTabs />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PaymentOptions;
