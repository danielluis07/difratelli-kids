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
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

type LoginFormValues = {
  email: string;
  password: string;
};

type LoginFormErrors = Partial<Record<keyof LoginFormValues, string>>;

export const LoginForm = () => {
  const [formValues, setFormValues] = useState<LoginFormValues>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<LoginFormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField =
    (field: keyof LoginFormValues) =>
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.currentTarget.value;

      setFormValues((prevValues) => ({ ...prevValues, [field]: value }));

      if (errors[field]) {
        setErrors((prevErrors) => ({ ...prevErrors, [field]: undefined }));
      }
    };

  const validateForm = () => {
    const nextErrors: LoginFormErrors = {};
    const trimmedEmail = formValues.email.trim();

    if (!trimmedEmail) {
      nextErrors.email = "Informe seu email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      nextErrors.email = "Use um email valido.";
    }

    if (!formValues.password) {
      nextErrors.password = "Informe sua senha.";
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
          <CardTitle>Entrar na sua conta</CardTitle>
          <CardDescription>
            Use seu email e senha para acessar a experiencia de demonstracao.
          </CardDescription>
        </div>
      </CardHeader>

      <form onSubmit={handleSubmit} noValidate>
        <CardContent>
          <FieldGroup>
            <Field data-invalid={Boolean(errors.email) || undefined}>
              <FieldLabel htmlFor="login-email">Email</FieldLabel>
              <Input
                id="login-email"
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
              <FieldLabel htmlFor="login-password">Senha</FieldLabel>
              <Input
                id="login-password"
                type="password"
                autoComplete="current-password"
                placeholder="Digite sua senha"
                value={formValues.password}
                onChange={updateField("password")}
                aria-invalid={Boolean(errors.password) || undefined}
                required
              />
              <FieldError>{errors.password}</FieldError>
            </Field>
          </FieldGroup>
        </CardContent>

        <CardFooter className="flex-col items-stretch gap-3 bg-white border-none">
          <Button type="submit" size="pill" disabled={isSubmitting}>
            {isSubmitting && (
              <Loader2Icon data-icon="inline-start" className="animate-spin" />
            )}
            {isSubmitting ? "Entrando..." : "Entrar"}
          </Button>

          <p className="text-center text-sm text-muted-foreground">
            Ainda nao tem conta?{" "}
            <Link
              href="/register"
              className="font-medium text-foreground underline underline-offset-4">
              Criar conta
            </Link>
          </p>
        </CardFooter>
      </form>
    </Card>
  );
};
