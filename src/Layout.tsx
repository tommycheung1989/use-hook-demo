export default function Layout({ children }: { children?: JSX.Element }) {
  return (
    <div className="container m-4 border-4">
      <a href="/">back</a>
      {children}
    </div>
  );
}
