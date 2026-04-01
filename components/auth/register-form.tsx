"use client";

import type { ChangeEvent, SubmitEvent } from "react";
import { useState } from "react";
import Link from "next/link";
import { Loader2Icon } from "lucide-react";
import { toast } from "sonner";

import { AuthBrand } from "@/components/auth/auth-brand";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type RegisterFormValues = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

type RegisterFormErrors = Partial<Record<keyof RegisterFormValues, string>>;

export const RegisterForm = () => {
  const [formValues, setFormValues] = useState<RegisterFormValues>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<RegisterFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField =
    (field: keyof RegisterFormValues) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value;

      setFormValues((prevValues) => ({ ...prevValues, [field]: value }));

      if (errors[field]) {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
      }
    };

  const validateForm = () => {
    const nextErrors: RegisterFormErrors = {};
    const trimmedName = formValues.fullName.trim();
    const trimmedEmail = formValues.email.trim();

    if (!trimmedName) {
      nextErrors.fullName = "Informe seu nome completo.";
    }

    if (!trimmedEmail) {
      nextErrors.email = "Informe seu email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Use um email valido.";
    }

    if (!formValues.password) {
      nextErrors.password = "Informe sua senha.";
    } else if (formValues.password.length < 6) {
      nextErrors.password = "A senha deve ter no minimo 6 caracteres.";
    }

    if (!formValues.confirmPassword) {
      nextErrors.confirmPassword = "Confirme sua senha.";
    } else if (formValues.confirmPassword !== formValues.password) {
      nextErrors.confirmPassword = "As senhas precisam ser iguais.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      toast.info(
        "Este e apenas um projeto de demonstracao! Obrigado por explorar a Difratelli Kids",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="w-full max-w-md">
      <CardHeader className="flex flex-col gap-4">
        <AuthBrand />

        <div className="flex flex-col gap-1">
          <CardTitle>Criar sua conta</CardTitle>
          <CardDescription>
            Cadastre-se para acompanhar pedidos e salvar seus favoritos.
          </CardDescription>
        </div>
      </CardHeader>

      <form onSubmit={handleSubmit} noValidate>
        <CardContent>
          <FieldGroup>
            <Field data-invalid={Boolean(errors.fullName) || undefined}>
              <FieldLabel htmlFor="register-full-name">
                Nome completo
              </FieldLabel>
              <Input
                id="register-full-name"
                type="text"
                autoComplete="name"
                placeholder="Seu nome"
                value={formValues.fullName}
                onChange={updateField("fullName")}
                aria-invalid={Boolean(errors.fullName) || undefined}
                required
              />
              <FieldError>{errors.fullName}</FieldError>
            </Field>

            <Field data-invalid={Boolean(errors.email) || undefined}>
              <FieldLabel htmlFor="register-email">Email</FieldLabel>
              <Input
                id="register-email"
                type="email"
                autoComplete="email"
                placeholder="voce@exemplo.com"
                value={formValues.email}
                onChange={updateField("email")}
                aria-invalid={Boolean(errors.email) || undefined}
                required
              />
              <FieldError>{errors.email}</FieldError>
            </Field>

            <Field data-invalid={Boolean(errors.password) || undefined}>
              <FieldLabel htmlFor="register-password">Senha</FieldLabel>
              <Input
                id="register-password"
                type="password"
                autoComplete="new-password"
                placeholder="Crie uma senha"
                value={formValues.password}
                onChange={updateField("password")}
                aria-invalid={Boolean(errors.password) || undefined}
                required
              />
              <FieldDescription>Use pelo menos 6 caracteres.</FieldDescription>
              <FieldError>{errors.password}</FieldError>
            </Field>

            <Field data-invalid={Boolean(errors.confirmPassword) || undefined}>
              <FieldLabel htmlFor="register-confirm-password">
                Confirmar senha
              </FieldLabel>
              <Input
                id="register-confirm-password"
                type="password"
                autoComplete="new-password"
                placeholder="Repita sua senha"
                value={formValues.confirmPassword}
                onChange={updateField("confirmPassword")}
                aria-invalid={Boolean(errors.confirmPassword) || undefined}
                required
              />
              <FieldError>{errors.confirmPassword}</FieldError>
            </Field>
          </FieldGroup>
        </CardContent>

        <CardFooter className="flex-col items-stretch gap-3 bg-white border-none">
          <Button type="submit" size="pill" disabled={isSubmitting}>
            {isSubmitting && (
              <Loader2Icon data-icon="inline-start" className="animate-spin" />
            )}
            {isSubmitting ? "Criando conta..." : "Criar conta"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Ja possui conta?{" "}
            <Link
              href="/login"
              className="font-medium text-foreground underline underline-offset-4">
              Fazer login
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};
