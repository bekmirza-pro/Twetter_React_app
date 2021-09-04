function Todo({ id, title, removeTodo }) {
	return (
		<li>
			<span>{title}</span>
			<button data-id={id} onClick={(evt) => removeTodo(evt)}>
				X
			</button>
		</li>
	);
}

export default Todo;
