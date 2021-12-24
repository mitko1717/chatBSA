export default function EditForm({
  currentMessage,
  setIsEditing,
  onEditInputChange,
  onEditFormSubmit,
}) {
  return (
    <form className="editing" onSubmit={onEditFormSubmit}>
      <input
        name="update"
        type="text"
        placeholder="update"
        value={currentMessage.text}
        onChange={onEditInputChange}
      />
      <button type="submit" onClick={onEditFormSubmit}>
        Update
      </button>
      <button onClick={() => setIsEditing(false)}>Cancel</button>
    </form>
  );
}
