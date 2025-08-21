import Link from "next/link";

export default function Index() {
  return (
    <div
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
        gap: "1rem",
      }}
    >
      <Link href={"/explore"}>Explore</Link>
      <Link href={"/home"}>Home</Link>
      <Link href={"https://linking-test-flax.vercel.app/explore"}>
        Explore ext
      </Link>
      <Link href={"https://linking-test-flax.vercel.app/home"}>Home ext</Link>
    </div>
  );
}
