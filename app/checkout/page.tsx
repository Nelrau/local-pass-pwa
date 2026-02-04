import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function CheckoutPage() {
  return (
    <main>
      <div className="container">
        <Card>
          <CardHeader>
            <CardTitle>Acesso visitante</CardTitle>
            <CardDescription>R$ 5 por dia, acesso instantaneo.</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: "grid", gap: "12px" }}>
              <Input placeholder="Nome completo" />
              <Input placeholder="Email" />
              <Input placeholder="Cartao" />
              <Button>
                <Link href="/ofertas">Pagar e liberar</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
