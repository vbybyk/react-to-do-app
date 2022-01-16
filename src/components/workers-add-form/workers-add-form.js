import './workers-add-form.css';

const WorkersAddForm = () => {
  return (
        <div className="app-add-form">
            <h3>Добавьте нового сотрудника</h3>
            <form
                className="add-form d-flex">
                <input type="text"
                    className="form-control new-post-label"
                    placeholder="Type a name" />
                <input type="number"
                    className="form-control new-post-label"
                    placeholder="Salary?" />

                <button type="submit"
                        className="btn btn-outline-light">Add</button>
            </form>
        </div>
    )
}

export default WorkersAddForm;