import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ofertas = [
  { id: 1, titulo: "Combo almoco", status: "Ativa" },
  { id: 2, titulo: "Cafe da tarde", status: "Pausada" },
  { id: 3, titulo: "Flash noite", status: "Agendada" },
];

export default function MerchantOfertas() {
  return (
    <main>
      <div className="container">
        <Card>
          <CardHeader>
            <CardTitle>Gestao de ofertas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid">
              {ofertas.map((oferta) => (
                <div
                  key={oferta.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #eee",
                    padding: "12px 0",
                  }}
                >
                  <div>
                    <strong>{oferta.titulo}</strong>
                    <div className="subtle">Status atual</div>
                  </div>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <Badge variant="secondary">{oferta.status}</Badge>
                    <Button size="sm" variant="outline">
                      <Link href="/merchant/flash">Editar</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
