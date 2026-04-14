import HeroVideo from "@/components/HeroVideo";

const Index = () => {
  return (
    <main>
      <HeroVideo />
      <section className="relative z-10 bg-background py-32 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Continue Below</h2>
          <p className="text-muted-foreground">The rest of your content lives here.</p>
        </div>
      </section>
    </main>
  );
};

export default Index;
