"use client";

import {
  CreditCardIcon,
  QrCodeIcon,
  LandmarkIcon,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

interface PaymentFormProps {
  paymentMethod: string;
  onPaymentMethodChange: (value: string) => void;
}

export function PaymentForm({
  paymentMethod,
  onPaymentMethodChange,
}: PaymentFormProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">Pagamento</h2>

      <RadioGroup
        value={paymentMethod}
        onValueChange={onPaymentMethodChange}
        className="mt-4 grid gap-2"
      >
        <label
          htmlFor="credit"
          className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/70 bg-card/60 p-3 transition-colors has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/5"
        >
          <RadioGroupItem value="credit" id="credit" />
          <CreditCardIcon className="size-4 text-muted-foreground" />
          <p className="text-sm font-medium text-foreground">
            Cartão de Crédito
          </p>
        </label>

        <label
          htmlFor="pix"
          className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/70 bg-card/60 p-3 transition-colors has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/5"
        >
          <RadioGroupItem value="pix" id="pix" />
          <QrCodeIcon className="size-4 text-muted-foreground" />
          <p className="text-sm font-medium text-foreground">PIX</p>
        </label>

        <label
          htmlFor="boleto"
          className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/70 bg-card/60 p-3 transition-colors has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/5"
        >
          <RadioGroupItem value="boleto" id="boleto" />
          <LandmarkIcon className="size-4 text-muted-foreground" />
          <p className="text-sm font-medium text-foreground">Boleto Bancário</p>
        </label>
      </RadioGroup>

      {paymentMethod === "credit" && (
        <div className="mt-4 grid gap-4 rounded-xl border border-border/70 bg-card/60 p-4">
          <div className="space-y-1.5">
            <Label htmlFor="cardName">Nome no Cartão</Label>
            <Input
              id="cardName"
              placeholder="João da Silva"
              className="h-10"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="cardNumber">Número do Cartão</Label>
            <Input
              id="cardNumber"
              placeholder="0000 0000 0000 0000"
              className="h-10"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <Label htmlFor="cardExpiry">Validade</Label>
              <Input
                id="cardExpiry"
                placeholder="MM/AA"
                className="h-10"
              />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="cardCvv">CVV</Label>
              <Input
                id="cardCvv"
                placeholder="123"
                className="h-10"
              />
            </div>
          </div>
        </div>
      )}

      {paymentMethod === "pix" && (
        <div className="mt-4 rounded-xl border border-border/70 bg-card/60 p-4">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <QrCodeIcon className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Pagamento via PIX
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                Após confirmar o pedido, um QR Code será gerado para
                pagamento instantâneo. O pedido será confirmado em poucos
                segundos.
              </p>
            </div>
          </div>
        </div>
      )}

      {paymentMethod === "boleto" && (
        <div className="mt-4 rounded-xl border border-border/70 bg-card/60 p-4">
          <div className="flex items-start gap-3">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <LandmarkIcon className="size-5 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium text-foreground">
                Boleto Bancário
              </p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                O boleto será gerado após a confirmação. O prazo de
                compensação é de até 3 dias úteis. O pedido será reservado
                durante esse período.
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
