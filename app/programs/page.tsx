import Link from "next/link";

export default function Programs() {
  return (
    <div className="flex flex-col justify-around h-full text-center box-border px-16">
      <div>
        <h1
          data-testid="no-programs-header"
          className="text-4xl font-semibold py-8"
        >
          Oh no!
        </h1>
        <p data-testid="no-programs-text" className="font-light text-lg">
          It seems you don't have any workout programs!
        </p>
        <p data-testid="no-programs-text" className="text-md py-8">
          Click the button below and let's get started
        </p>
      </div>
      <Link
        className="btn btn-primary rounded-full text-xs"
        href="/programs/create"
        data-testid="create-program"
      >
        Create a new program
      </Link>
    </div>
  );
}
