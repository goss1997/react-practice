export default function UserInput({ type, onChange, value }) {
  function handleChange(event) {
    onChange(type, event.target.value);
  }

  return (
    <div>
      <label>{type}</label>
      <input type='number' onChange={handleChange} defaultValue={value} />
    </div>
  );
}
