import { redirect } from "next/navigation";
import QuizComponent from "../components/QuizComponent";
import siteConfig from "../config/site-config";

export const metadata = {
  title: siteConfig.quiz.metaTitle,
  description: siteConfig.quiz.metaDescription,
};

export default function QuizPage() {
  if (!siteConfig.quiz.enabled) {
    redirect("/");
  }

  return (
    <section className="min-h-screen py-24 px-4">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          {siteConfig.quiz.pageHeadingStart}{" "}
          <span className="text-accent">{siteConfig.quiz.pageHeadingAccent}</span>
        </h1>
        <p className="text-muted text-lg">
          {siteConfig.quiz.pageSubtitle}
        </p>
      </div>
      <QuizComponent />
    </section>
  );
}
