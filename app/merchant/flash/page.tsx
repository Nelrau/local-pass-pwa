import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";

export default function FlashDealPage() {
  return (
    <main>
      <div className="container">
        <Card>
          <CardHeader>
            <CardTitle>Criar Flash Deal</CardTitle>
            <CardDescription>Oferta valida por 12 horas.</CardDescription>
          </CardHeader>
          <CardContent>
            <div style={{ display: "grid", gap: "12px" }}>
              <Input placeholder="Nome da oferta" />
              <Input placeholder="Descricao curta" />
              <Input placeholder="Desconto (%)" />
              <Input placeholder="Validade (ex: 12h)" />

              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Switch />
                <span>Pausar todas as ofertas</span>
              </div>

              <Button>Criar flash deal</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
