"use client";

import { TruckIcon } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group";

interface ShippingFormProps {
  shippingMethod: string;
  onShippingMethodChange: (value: string) => void;
}

export function ShippingForm({
  shippingMethod,
  onShippingMethodChange,
}: ShippingFormProps) {
  return (
    <section>
      <h2 className="text-lg font-semibold text-foreground">
        Endereço de Entrega
      </h2>

      <div className="mt-4 grid gap-4">
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-1.5">
            <Label htmlFor="firstName">Nome</Label>
            <Input id="firstName" placeholder="João" className="h-10" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="lastName">Sobrenome</Label>
            <Input id="lastName" placeholder="Silva" className="h-10" />
          </div>
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="email">E-mail</Label>
          <Input
            id="email"
            type="email"
            placeholder="joao@exemplo.com"
            className="h-10"
          />
        </div>

        <div className="space-y-1.5">
          <Label htmlFor="phone">Telefone</Label>
          <Input
            id="phone"
            type="tel"
            placeholder="(11) 99999-9999"
            className="h-10"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-[1fr_auto]">
          <div className="space-y-1.5">
            <Label htmlFor="address">Endereço</Label>
            <Input
              id="address"
              placeholder="Rua das Flores, 123"
              className="h-10"
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="complement">Complemento</Label>
            <Input
              id="complement"
              placeholder="Apto 4B"
              className="h-10"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          <div className="space-y-1.5">
            <Label htmlFor="city">Cidade</Label>
            <Input id="city" placeholder="São Paulo" className="h-10" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="state">Estado</Label>
            <Input id="state" placeholder="SP" className="h-10" />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="zip">CEP</Label>
            <Input id="zip" placeholder="01234-567" className="h-10" />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <h3 className="flex items-center gap-2 text-sm font-semibold text-foreground">
          <TruckIcon className="size-4" />
          Método de Envio
        </h3>

        <RadioGroup
          value={shippingMethod}
          onValueChange={onShippingMethodChange}
          className="mt-3 grid gap-2"
        >
          <label
            htmlFor="standard"
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/70 bg-card/60 p-3 transition-colors has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/5"
          >
            <RadioGroupItem value="standard" id="standard" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                Envio Padrão
              </p>
              <p className="text-xs text-muted-foreground">
                5-7 dias úteis
              </p>
            </div>
            <p className="text-sm font-semibold text-foreground">
              R$ 14,90
            </p>
          </label>

          <label
            htmlFor="express"
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/70 bg-card/60 p-3 transition-colors has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/5"
          >
            <RadioGroupItem value="express" id="express" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                Envio Expresso
              </p>
              <p className="text-xs text-muted-foreground">
                2-3 dias úteis
              </p>
            </div>
            <p className="text-sm font-semibold text-foreground">
              R$ 29,90
            </p>
          </label>

          <label
            htmlFor="free"
            className="flex cursor-pointer items-center gap-3 rounded-xl border border-border/70 bg-card/60 p-3 transition-colors has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/5"
          >
            <RadioGroupItem value="free" id="free" />
            <div className="flex-1">
              <p className="text-sm font-medium text-foreground">
                Frete Grátis
              </p>
              <p className="text-xs text-muted-foreground">
                10-15 dias úteis
              </p>
            </div>
            <p className="text-sm font-semibold text-green-600">Grátis</p>
          </label>
        </RadioGroup>
      </div>
    </section>
  );
}
