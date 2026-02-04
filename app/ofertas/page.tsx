import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ofertas = [
  { id: 1, titulo: "Cafe com 30%", bairro: "Centro", distancia: "0,6 km" },
  { id: 2, titulo: "Mercado: 2 por 1", bairro: "Vila Nova", distancia: "1,2 km" },
  { id: 3, titulo: "Academia: 50% off", bairro: "Jardins", distancia: "2,1 km" },
];

export default function OfertasPage() {
  return (
    <main>
      <div className="container">
        <div style={{ display: "grid", gap: "16px" }}>
          <div>
            <h2 style={{ margin: 0 }}>Feed de ofertas</h2>
            <p className="subtle">Filtre por proximidade ou bairro.</p>
          </div>

          <Input placeholder="Buscar por bairro ou loja" />

          <Tabs>
            <TabsList>
              <TabsTrigger active>Mais perto</TabsTrigger>
              <TabsTrigger>Meu bairro</TabsTrigger>
              <TabsTrigger>Favoritos</TabsTrigger>
            </TabsList>
            <TabsContent>
              <div className="grid grid-2">
                {ofertas.map((oferta) => (
                  <Card key={oferta.id}>
                    <CardHeader>
                      <CardTitle>{oferta.titulo}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div style={{ display: "flex", gap: "8px", marginBottom: "12px" }}>
                        <Badge variant="secondary">{oferta.bairro}</Badge>
                        <Badge variant="outline">{oferta.distancia}</Badge>
                      </div>
                      <Button size="sm">
                        <Link href="/resgate">Resgatar</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  );
}
