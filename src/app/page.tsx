import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {
  const projectName = "TaxTally";
  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-8">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">{projectName}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Project landing page.</p>
        </CardContent>
      </Card>
    </div>
  );
}