import './App.css';
import { useState } from "react"
import ReactMarkdown from "react-markdown"

function App() {
  const [markdown, setMarkdown] = useState("# markdown preview")
  return (
    <div className="">
      <section className="container">
        <div className="flex space-x-20 p-7 mt-9">
          <textarea className="p-8 drop-shadow-lg border-lime-900 rounded-md focus:outline-none focus:border-blue w-1/2 h-[32rem] tracking-widest text-xl" value={markdown} onChange={(e) => setMarkdown(e.target.value)} name="text" />
          <div className="markdown--showcase mt-3 capitalize text-5xl font-bold tracking-wide text-blue">
            <ReactMarkdown>{markdown}</ReactMarkdown>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
