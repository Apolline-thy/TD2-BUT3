function Button({ children, className }) {
  return (
    <button
      className={
        "${className} nl-auto px-10 py-1 text-white bg-clr-primary rounded hover:bg-clr-secondary "
      }
    >
      {children}
    </button>
  );
}

export default Button;