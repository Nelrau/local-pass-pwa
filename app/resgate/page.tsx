import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";

export default function ResgatePage() {
  return (
    <main>
      <div className="container">
        <Card>
          <CardHeader>
            <CardTitle>Resgate ativo</CardTitle>
          </CardHeader>
          <CardContent>
            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Badge>Timer 5:00</Badge>
              <div className="pulse-dot" />
              <span className="subtle">Anti-fraude em andamento</span>
            </div>
            <div style={{ marginTop: "12px" }}>
              <Progress value={60} />
            </div>
            <div style={{ marginTop: "10px" }} className="timer-bar">
              <div className="timer-bar__fill" />
            </div>
            <Separator className="my-4" />
            <div style={{ display: "grid", gap: "8px" }}>
              <div className="subtle">Oferta</div>
              <strong>Padaria do Bairro - 40% em paes</strong>
              <div className="subtle">Apresente este codigo ao lojista</div>
              <div style={{ fontSize: "28px", letterSpacing: "2px" }}>LP-9K2F</div>
            </div>
            <div style={{ marginTop: "16px" }}>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Button variant="destructive">Cancelar resgate</Button>
                <Button variant="outline">
                  <Link href="/checkout">Acesso visitante</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
