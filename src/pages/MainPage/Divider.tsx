import "./Divider.css";

export default function Divider({ text }: { text: string }) {
  return (
    <div className="divider d-flex justify-content-center align-items-center text-light p-5 mt-5 mb-5">
      <p className="text-center m-5" style={{ whiteSpace: "pre-wrap" }}>
        {text}
      </p>
    </div>
  );
}
