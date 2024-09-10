export default function Footer(props: unknown) {
  const year = new Date().getFullYear();
  return (
    <>
      {props}
      <footer>{`©${year}, Ryan Grange`}</footer>
    </>
  );
}
