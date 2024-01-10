import classes from "./NewPost.module.css";

function NewPost(props) {
    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="body">Text</label>
                <textarea id="body" rows={3} onChange={props.bodyChangeHandler} required />
            </p>
            <p>
                <label htmlFor="name">Your name</label>
                <input id="name" type="text" onChange={props.authorChangeHandler} required />
            </p>
        </form>
    );
}

export default NewPost;