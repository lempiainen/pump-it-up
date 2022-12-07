import Link from "next/link";
export default function Home() {
  return (
    <div className="flex flex-col justify-around h-full text-center box-border px-16">
      <div>
        <h1
          data-testid="welcome-header"
          className="text-4xl font-semibold py-8"
        >
          Hello there!
        </h1>
        <p data-testid="welcome-text" className="font-light text-lg">
          Lets get started and create a workout program for you.
        </p>
      </div>
      <Link
        className="btn btn-primary rounded-full text-xs"
        href="/workouts"
        data-testid="welcome-start-program"
      >
        Start a new workout program
      </Link>
    </div>
  );
}
