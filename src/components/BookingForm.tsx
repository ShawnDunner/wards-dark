import { Button } from "@/components/ui/button";

const fieldClassName =
  "w-full rounded-md border border-foreground/40 bg-secondary/55 px-3 py-2 text-foreground placeholder:text-foreground/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary";

type BookingFormProps = {
  title?: string;
};

const BookingForm = ({ title = "Book a Service" }: BookingFormProps) => {
  return (
    <div className="rounded-xl border border-foreground/50 bg-background/90 p-6 md:p-8 shadow-purple">
      <div className="mb-8 text-center">
        <h2 className="mb-3 text-4xl font-bold">{title}</h2>
        <p className="text-foreground/90">
          Fill in the form below and we will be in touch to confirm your booking.
        </p>
        <p className="mt-2 text-foreground/85">
          Prefer to call? Reach us on{" "}
          <a href="tel:0738692222" className="text-primary underline underline-offset-2">
            07 3869 2222
          </a>
          .
        </p>
      </div>

      <div className="mb-6 rounded-xl border border-foreground/60 bg-secondary/80 p-4 md:p-5">
        <h3 className="mb-2 text-center text-2xl font-semibold">Check Booking Availability</h3>
        <p className="mb-4 text-center text-foreground/90">
          Select a preferred date and we will check whether the workshop has capacity.
        </p>
        <div className="grid items-end gap-3 md:grid-cols-[1fr_auto]">
          <label className="block">
            <span className="mb-1 block text-sm font-medium">Preferred Date</span>
            <input type="text" placeholder="dd/mm/yyyy" className={fieldClassName} />
          </label>
          <Button type="button" className="h-10 bg-primary text-primary-foreground hover:bg-primary/90">
            Check Date
          </Button>
        </div>
      </div>

      <form className="space-y-4">
        <label className="block">
          <span className="mb-1 block text-sm font-medium">Full Name</span>
          <input type="text" className={fieldClassName} />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Phone Number</span>
          <input type="tel" className={fieldClassName} />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Email Address</span>
          <input type="email" className={fieldClassName} />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Registration</span>
          <input type="text" className={fieldClassName} />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Service Required</span>
          <input type="text" className={fieldClassName} />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-medium">Additional Notes</span>
          <textarea rows={4} className={fieldClassName} />
        </label>

        <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
          Request Booking
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
