import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div>
        <h1>Hello Metabolic</h1>
        <p className="text-[1.8rem]">Click here to go to the Register Page</p>
        <Link
          href="/register"
          className="text-[1.6rem] text-green-800 font-bold hover:text-green-600"
        >
          Register
        </Link>
      </div>
    </div>
  );
}
