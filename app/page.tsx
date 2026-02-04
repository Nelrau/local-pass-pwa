import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function HomePage() {
  return (
    <main>
      <div className="container">
        <div className="grid grid-2">
          <section className="hero-card">
            <div className="pill">
              <span>Local Pass</span>
              <Badge variant="secondary">PWA</Badge>
            </div>
            <h1 style={{ fontSize: "36px", margin: "16px 0 8px" }}>
              Descontos hiper-locais, validos para quem mora perto.
            </h1>
            <p className="subtle">
              Valide seu CEP e desbloqueie ofertas exclusivas do seu bairro.
            </p>
            <div style={{ display: "flex", gap: "12px", marginTop: "16px" }}>
              <Button>
                <Link href="/cep">Entrar</Link>
              </Button>
              <Button variant="outline">
                <Link href="/merchant">Sou Lojista</Link>
              </Button>
            </div>
          </section>

          <Card>
            <CardHeader>
              <CardTitle>Login rapido</CardTitle>
              <CardDescription>Use seu telefone ou email.</CardDescription>
            </CardHeader>
            <CardContent>
              <div style={{ display: "grid", gap: "12px" }}>
                <Input placeholder="Email" />
                <Input placeholder="Telefone" />
                <Button>
                  <Link href="/cep">Continuar</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
