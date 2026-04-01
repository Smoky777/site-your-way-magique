import PageLayout from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Lock } from "lucide-react";

const ClientPortal = () => {
  return (
    <PageLayout>
      <section className="py-24 min-h-[80vh] flex items-center">
        <div className="container mx-auto px-6">
          <Card className="max-w-md mx-auto bg-card border-border animate-on-scroll">
            <CardHeader className="text-center pb-2">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                <Lock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-serif text-2xl text-foreground">Client Portal</CardTitle>
              <p className="text-muted-foreground text-sm mt-2">Access your portfolio and reports</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Email</label>
                <Input type="email" placeholder="your@email.com" className="bg-secondary border-border" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1.5 block">Password</label>
                <Input type="password" placeholder="••••••••" className="bg-secondary border-border" />
              </div>
              <Button className="w-full bg-gradient-gold text-primary-foreground hover:opacity-90">
                Sign In
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Contact your relationship manager for access credentials.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </PageLayout>
  );
};

export default ClientPortal;
