"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, RotateCcw } from "lucide-react";
import Link from "next/link";

type PersonalityType = "power-lifter" | "cardio-warrior" | "zen-athlete" | "social-butterfly";

interface Question {
  question: string;
  options: { label: string; type: PersonalityType }[];
}

const questions: Question[] = [
  {
    question: "What sounds like the perfect workout?",
    options: [
      { label: "Heavy deadlifts and squats", type: "power-lifter" },
      { label: "A long run or sprint intervals", type: "cardio-warrior" },
      { label: "A yoga flow or stretching session", type: "zen-athlete" },
      { label: "A group fitness class with friends", type: "social-butterfly" },
    ],
  },
  {
    question: "What motivates you most at the gym?",
    options: [
      { label: "Hitting a new personal record", type: "power-lifter" },
      { label: "Beating my best time or distance", type: "cardio-warrior" },
      { label: "Feeling calm and centered after", type: "zen-athlete" },
      { label: "The energy and community vibe", type: "social-butterfly" },
    ],
  },
  {
    question: "Pick your ideal workout playlist:",
    options: [
      { label: "Heavy metal / hard rap", type: "power-lifter" },
      { label: "Upbeat EDM / pop bangers", type: "cardio-warrior" },
      { label: "Lo-fi beats / nature sounds", type: "zen-athlete" },
      { label: "Whatever the class is playing", type: "social-butterfly" },
    ],
  },
  {
    question: "How do you feel about rest days?",
    options: [
      { label: "Hate them — I want to lift every day", type: "power-lifter" },
      { label: "I'll do active recovery like a light jog", type: "cardio-warrior" },
      { label: "Love them — rest is part of the process", type: "zen-athlete" },
      { label: "I'll still hang out at the gym socially", type: "social-butterfly" },
    ],
  },
  {
    question: "What's your fitness goal?",
    options: [
      { label: "Get stronger and build muscle", type: "power-lifter" },
      { label: "Improve endurance and stamina", type: "cardio-warrior" },
      { label: "Better flexibility and mental clarity", type: "zen-athlete" },
      { label: "Stay active and have fun with others", type: "social-butterfly" },
    ],
  },
  {
    question: "Which fitness icon do you relate to most?",
    options: [
      { label: "Arnold Schwarzenegger", type: "power-lifter" },
      { label: "David Goggins", type: "cardio-warrior" },
      { label: "Adriene Mishler (Yoga with Adriene)", type: "zen-athlete" },
      { label: "The energy of a CrossFit box", type: "social-butterfly" },
    ],
  },
];

const results: Record<
  PersonalityType,
  { title: string; emoji: string; description: string; program: string }
> = {
  "power-lifter": {
    title: "The Power Lifter",
    emoji: "🏋️",
    description:
      "You live for the iron. There's nothing more satisfying than loading up the bar and pushing your limits. Strength is your language, and the gym is your playground.",
    program:
      "A strength-focused program with progressive overload, compound lifts, and periodized training cycles to help you hit new PRs every month.",
  },
  "cardio-warrior": {
    title: "The Cardio Warrior",
    emoji: "🏃",
    description:
      "You thrive on endurance and the runner's high. Whether it's sprints, long runs, or HIIT, you love pushing your cardiovascular limits and chasing faster times.",
    program:
      "An endurance-based program mixing HIIT sessions, tempo runs, and interval training to boost your VO2 max and shatter your PRs.",
  },
  "zen-athlete": {
    title: "The Zen Athlete",
    emoji: "🧘",
    description:
      "For you, fitness is about the mind-body connection. You value mobility, flexibility, and the mental clarity that comes from mindful movement.",
    program:
      "A mind-body program combining yoga flows, mobility work, breathwork, and functional training to build strength from the inside out.",
  },
  "social-butterfly": {
    title: "The Social Butterfly",
    emoji: "🦋",
    description:
      "Working out alone? No thanks. You get your energy from the group, the high-fives, and the shared grind. Fitness is better together.",
    program:
      "A group training program with varied class formats, partner workouts, and community challenges to keep you motivated and connected.",
  },
};

export default function QuizComponent() {
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<PersonalityType[]>([]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (optionIndex: number) => {
    setSelectedOption(optionIndex);
  };

  const handleNext = () => {
    if (selectedOption === null) return;

    const newAnswers = [...answers, questions[currentQ].options[selectedOption].type];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQ + 1 < questions.length) {
      setCurrentQ(currentQ + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleBack = () => {
    if (currentQ > 0) {
      setCurrentQ(currentQ - 1);
      setSelectedOption(null);
      setAnswers(answers.slice(0, -1));
    }
  };

  const getResult = (): PersonalityType => {
    const counts: Record<PersonalityType, number> = {
      "power-lifter": 0,
      "cardio-warrior": 0,
      "zen-athlete": 0,
      "social-butterfly": 0,
    };
    answers.forEach((a) => counts[a]++);
    return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0] as PersonalityType;
  };

  const restart = () => {
    setCurrentQ(0);
    setAnswers([]);
    setSelectedOption(null);
    setShowResult(false);
  };

  if (showResult) {
    const result = results[getResult()];
    return (
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-7xl mb-6">{result.emoji}</div>
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
          You&apos;re <span className="text-accent">{result.title}</span>
        </h2>
        <p className="text-muted text-lg leading-relaxed mb-8">
          {result.description}
        </p>

        <div className="bg-card-bg border border-card-border rounded-2xl p-8 mb-8 text-left">
          <h3 className="text-xl font-bold mb-3 text-accent">
            Your Recommended Program
          </h3>
          <p className="text-muted leading-relaxed">{result.program}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/#contact"
            className="bg-accent hover:bg-accent-hover text-background font-bold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Book a Free Consult
          </Link>
          <button
            onClick={restart}
            className="border border-card-border text-muted hover:text-foreground font-bold px-8 py-4 rounded-lg text-lg transition-colors flex items-center justify-center gap-2"
          >
            <RotateCcw className="w-5 h-5" /> Retake Quiz
          </button>
        </div>
      </motion.div>
    );
  }

  const progress = ((currentQ + 1) / questions.length) * 100;

  return (
    <div className="max-w-2xl mx-auto">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex justify-between text-sm text-muted mb-2">
          <span>
            Question {currentQ + 1} of {questions.length}
          </span>
          <span>{Math.round(progress)}%</span>
        </div>
        <div className="h-2 bg-card-border rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-accent rounded-full"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -30 }}
          transition={{ duration: 0.3 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-8">
            {questions[currentQ].question}
          </h2>

          <div className="space-y-4 mb-8">
            {questions[currentQ].options.map((option, i) => (
              <button
                key={i}
                onClick={() => handleSelect(i)}
                className={`w-full text-left p-5 rounded-xl border transition-all ${
                  selectedOption === i
                    ? "border-accent bg-accent/10 text-foreground"
                    : "border-card-border bg-card-bg text-muted hover:border-accent/50 hover:text-foreground"
                }`}
              >
                <span className="text-lg">{option.label}</span>
              </button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="flex justify-between">
        <button
          onClick={handleBack}
          disabled={currentQ === 0}
          className="flex items-center gap-2 text-muted hover:text-foreground transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
        >
          <ArrowLeft className="w-5 h-5" /> Back
        </button>
        <button
          onClick={handleNext}
          disabled={selectedOption === null}
          className="bg-accent hover:bg-accent-hover disabled:opacity-30 disabled:cursor-not-allowed text-background font-bold px-8 py-3 rounded-lg transition-colors flex items-center gap-2"
        >
          {currentQ === questions.length - 1 ? "See Results" : "Next"}{" "}
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
