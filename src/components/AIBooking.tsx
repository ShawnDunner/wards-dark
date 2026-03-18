import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { AudioWaveform, CalendarClock } from "lucide-react";
import { Link } from "react-router-dom";

const AIBooking = () => {
  return (
    <section id="booking" className="relative px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container relative z-10 mx-auto max-w-3xl">
        <Card className="border-border bg-card p-8 shadow-purple md:p-10">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-secondary">
            <CalendarClock className="h-7 w-7 text-secondary-foreground" />
          </div>

          <div className="text-center">
            <h2 className="mb-3 text-4xl font-bold leading-tight">
              Book with our <span className="text-primary">24/7 booking system</span>
            </h2>
            <p className="mx-auto max-w-xl text-lg text-muted-foreground">
              Our intelligent booking system is available 24/7 to book your service appointment.
            </p>
          </div>

          <Card className="mx-auto mt-7 max-w-xl border-border bg-muted/50 p-5">
            <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold">
              <AudioWaveform className="h-5 w-5 text-primary" />
              What can our booking system do
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                Check available time slots
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-primary" />
                Book your vehicle service
              </li>
            </ul>
          </Card>

          <div className="mt-7 text-center">
            <Link to="/book">
              <Button size="lg" className="min-w-52 bg-primary text-primary-foreground hover:bg-primary/90">
                Book now
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AIBooking;
