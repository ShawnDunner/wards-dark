import BookingForm from "@/components/BookingForm";

const AIBooking = () => {
  return (
    <section id="booking" className="relative px-4 py-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
      <div className="container relative z-10 mx-auto max-w-5xl">
        <BookingForm />
      </div>
    </section>
  );
};

export default AIBooking;
