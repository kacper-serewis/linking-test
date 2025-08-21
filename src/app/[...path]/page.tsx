import { headers } from "next/headers";

export default async function Page() {
  const headerList = await headers();
  const pathname = headerList.get("x-current-path");
  console.log(headerList);
  return (
    <section
      style={{
        flex: 1,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100dvh",
      }}
    >
      <h1>In-app link</h1>
      <code>{pathname}</code>
      <p>Ben je niet doorgestuurd naar de app?</p>
    </section>
  );
}
