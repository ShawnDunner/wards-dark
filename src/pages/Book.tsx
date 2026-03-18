import BookingForm from "@/components/BookingForm";
import Footer from "@/components/Footer";

const Book = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="px-4 py-16">
        <div className="container mx-auto max-w-5xl">
          <BookingForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Book;
