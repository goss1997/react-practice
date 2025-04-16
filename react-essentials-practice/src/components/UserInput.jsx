export default function UserInput({ type, onChange }) {
  function handleChange(event) {
    onChange(type, event.target.value);
  }

  return (
    <div>
      <label>{type}</label>
      <input type={type === 'EXPECTED RETURN' ? 'text' : 'number'} onChange={handleChange} />
    </div>
  );
}
