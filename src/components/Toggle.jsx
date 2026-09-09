function Toggle({ active, onChange }) {
   const toggleClass = active ? "bg-bg" : "bg-white";   
   return (
    <input
      type="checkbox"
      checked={active}
      className={`h-8 w-16 cursor-pointer rounded-full ${toggleClass}`}
      onChange={onChange}
    />

  );
}

export default Toggle;