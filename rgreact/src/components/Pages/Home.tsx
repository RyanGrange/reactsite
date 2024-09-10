import VisitorInfo from "../VisitorInfo";

export default function Home(props: unknown) {
  return (
    <>
      <h1>Home Page</h1>
      <VisitorInfo />
      {props}
    </>
  );
}
