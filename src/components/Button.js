export function Button({ onHandleClick, children }) {
  return (
    <button className="button" onClick={onHandleClick}>
      {children}
    </button>
  );
}
