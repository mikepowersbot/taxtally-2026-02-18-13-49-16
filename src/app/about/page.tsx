import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  const projectName = "TaxTally";
  const generationDate = "2/18/2026, 2:00:00 PM";

  return (
    <div className="min-h-screen flex items-center justify-center bg-muted/30 p-8">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-3xl">About {projectName}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <section>
            <h2 className="text-xl font-semibold mb-2">Project Description</h2>
            <p className="text-muted-foreground leading-relaxed">
              {projectName} is a modern web application designed to simplify tax management
              and tracking for individuals and businesses. Our platform provides intuitive
              tools for organizing financial records, calculating tax obligations, and
              generating comprehensive reports.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed">
              We believe tax management shouldn&apos;t be complicated. Our mission is to
              empower users with clear, accurate, and efficient solutions that save time
              and reduce stress during tax season and throughout the year.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Real-time tax calculations</li>
              <li>Secure data storage</li>
              <li>Multi-currency support</li>
              <li>Automated report generation</li>
              <li>User-friendly interface</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-2">Technical Details</h2>
            <p className="text-muted-foreground leading-relaxed">
              This page was generated on {generationDate}. The application is built with
              modern web technologies including Next.js, TypeScript, and Tailwind CSS,
              ensuring a fast, responsive, and accessible user experience.
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}