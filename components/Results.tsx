import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

interface ResultsProps {
  results: Array<any>;
}

export default function Results({ results }: ResultsProps) {
  return (
    <FlipMove className="px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {results.map((res) => (
        <Thumbnail key={res?.id} result={res} />
      ))}
    </FlipMove>
  );
}
