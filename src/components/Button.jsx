function Button({ children, active}) {
  return (
    <button
      type="button"
      className={`nl-auto px-10 py-1 text-white rounded bg-bg hover:bg-[var(--clr-secondary)] ${active ? 'bg-white' : ''}`}
    >
      {children}
    </button>
  );
}

export default Button;