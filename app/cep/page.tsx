import Link from "next/link";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function CepPage() {
  return (
    <main>
      <div className="container">
        <Card>
          <CardHeader>
            <CardTitle>Verificacao de CEP</CardTitle>
            <CardDescription>
              Validamos sua residencia por 365 dias.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: "grid", gap: "12px" }}>
              <Input placeholder="Digite seu CEP" />
              <Button>
                <Link href="/ofertas">Validar CEP</Link>
              </Button>
            </div>
            <div style={{ marginTop: "16px" }}>
              <Alert>
                <AlertTitle>Trava ativa</AlertTitle>
                <AlertDescription>
                  Seu CEP ficara bloqueado por 365 dias apos a validacao.
                </AlertDescription>
              </Alert>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
