const CommentForm = () => {
  return (
    <div className="comment-form-full">
      <form id="blog-form">
        <div className="user-details row">
          <div className="input-box col-md-6">
            <label className="details" htmlFor="f-name">
              First Name
            </label>
            <input
              type="text"
              id="f-name"
              className="text"
              name="f_name"
              placeholder=""
              autoComplete="off"
              required
            />
          </div>
          <div className="input-box col-md-6">
            <label className="details" htmlFor="l-name">
              Last Name
            </label>
            <input
              type="text"
              id="l-name"
              className="text"
              name="l_name"
              placeholder=""
              autoComplete="off"
              required
            />
          </div>
          <div className="input-box col-md-6">
            <label className="details" htmlFor="mail-addr">
              Email
            </label>
            <input
              type="email"
              id="mail-addr"
              className="text"
              name="mail-addr"
              placeholder=""
              autoComplete="off"
              required
            />
          </div>
          <div className="input-box col-md-6">
            <label className="details" htmlFor="phoneNo">
              Phone Number
            </label>
            <input
              type="tel"
              id="phoneNo"
              className="text"
              name="phoneNo"
              placeholder=""
              autoComplete="off"
              required
            />
          </div>
        </div>
        <div className="user-message">
          <label className="details" htmlFor="comment">
            Comment
          </label>
          <textarea
            id="comment"
            name="comment"
            cols={1}
            rows={1}
            placeholder="Write your comment..."
            autoComplete="off"
            required
            defaultValue={""}
          />
        </div>
        <button className="bttn bttn-theme" type="submit">
          POST COMMENTS
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
