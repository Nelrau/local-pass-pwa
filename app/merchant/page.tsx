import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function MerchantDashboard() {
  return (
    <main>
      <div className="container">
        <div style={{ display: "grid", gap: "16px" }}>
          <div>
            <h2 style={{ margin: 0 }}>Dashboard do Lojista</h2>
            <p className="subtle">Controle rapido das ofertas do dia.</p>
          </div>

          <div className="grid grid-2">
            <Card>
              <CardHeader>
                <CardTitle>Ofertas ativas</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: "32px" }}>12</div>
                <Badge variant="secondary">+3 hoje</Badge>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Resgates</CardTitle>
              </CardHeader>
              <CardContent>
                <div style={{ fontSize: "32px" }}>84</div>
                <Badge variant="outline">Ultimas 24h</Badge>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Acoes rapidas</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Button>
                  <Link href="/merchant/flash">Criar flash deal</Link>
                </Button>
                <Button variant="outline">
                  <Link href="/merchant/ofertas">Gerenciar ofertas</Link>
                </Button>
              </div>
              <Separator className="my-4" />
              <p className="subtle">Configure pausas e horarios de pico.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  );
}
