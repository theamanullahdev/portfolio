import Image from "next/image";

export default function Home() {
  return (
    <div className="snap-y snap-mandatory h-screen overflow-scroll bg-background text-foreground dark:bg-background dark:text-foreground">
      {/* Home Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
        <p className="text-lg max-w-lg text-center">
          I build modern websites and dApps on any blockchain. Lets create
          something amazing together!
        </p>
      </section>

      {/* About Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold mb-4">About Me</h2>
        <p className="text-lg max-w-lg text-center">
          I am a versatile developer who can build any website, specializing in
          dApps on any blockchain. I bring ideas to life with modern and
          efficient solutions.
        </p>
      </section>

      {/* Projects Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold mb-4">Projects</h2>
        <p className="text-lg max-w-lg text-center">
          Check out some of the awesome websites and dApps Ive built!
        </p>
      </section>

      {/* Contact Section */}
      <section className="snap-start h-screen flex flex-col items-center justify-center">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-lg max-w-lg text-center">
          Lets collaborate or just say hi!
        </p>
      </section>
    </div>
  );
}
