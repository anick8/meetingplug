export default function Check({ children }: { children: React.ReactNode }) {
  return (
    <div className="check">
      <span className="mark">✓</span>
      {children}
    </div>
  );
}
