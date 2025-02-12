import { Link } from "react-router"

function App() {
  return (
    <div className="space-y-3 py-3 h-[90dvh] w-[90dvh] overflow-auto">
      <h1 className="font-mono text-6xl text-center tracking-tighter">
        React Virtualization.
      </h1>
      <br />
      <ul className="list-disc">
        <li>
          <Link to="basic">Basic One</Link>
        </li>
        <li>
          <Link to="page-level">Page Level</Link>
        </li>
        <li>
          <Link to="dynamic-size">Dynamic Size</Link>
        </li>
        <li>
          <Link to="tanstack-query">Tanstack Query</Link>
        </li>
        <li>
          <Link to="tailwind-v4">Tailwind v4</Link>
        </li>
      </ul>
    </div>
  )
}

export default App
