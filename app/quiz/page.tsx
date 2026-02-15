import QuizComponent from "../components/QuizComponent";

export const metadata = {
  title: "Fitness Personality Quiz | Coach Demo",
  description: "Discover your fitness personality and get a training program recommendation tailored to your style.",
};

export default function QuizPage() {
  return (
    <section className="min-h-screen py-24 px-4">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          What&apos;s Your <span className="text-accent">Fitness Personality?</span>
        </h1>
        <p className="text-muted text-lg">
          Answer 6 quick questions to discover your training style and get a
          personalized program recommendation.
        </p>
      </div>
      <QuizComponent />
    </section>
  );
}
