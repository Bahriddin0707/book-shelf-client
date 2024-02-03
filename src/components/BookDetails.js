import { useState, useEffect } from "react";
import { useBooksContext } from "../hooks/useBooksContext";
import toast from "react-hot-toast";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";

// date-fns
import { formatDistanceToNow, format } from "date-fns";

function BookDetails({ book }) {
  const { dispatch } = useBooksContext();
  const { user } = useAuthContext();

  const notify = (deletedBook) =>
    toast.success(`${deletedBook.cover} book Deleted`);

  const handleDelete = async (id) => {
    if (!user) {
      return;
    }

    const response = await fetch(`http://localhost:4000/api/books/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    const data = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_BOOK", payload: data.deletedBook });
      notify(data.deletedBook);
    }
  };

  const handleEdit = async () => {
    if (!user) {
      return;
    }
  };

  return (
    <div className="book-details">
      <h4>{book.cover}</h4>
      <p>
        <strong>Pages: </strong>
        {book.pages}
      </p>
      <p>
        <strong>Published: </strong>
        {book.published}
      </p>

      <p>
        <strong>Isbn: </strong>
        {book._id}
      </p>
      <p>
        {format(new Date(book.createdAt), "MMMM do yyyy, h:mm:ss a", {
          addSuffix: true,
        })}
        <i className="time-to-now">
          (
          {formatDistanceToNow(new Date(book.createdAt), {
            addSuffix: true,
          })}
          )
        </i>
      </p>

      <span onClick={() => handleDelete(book._id)} className="delete-btn">
        <DeleteIcon />
      </span>

      <Link
        to={`update/${book._id}`}
        onClick={() => handleEdit(book._id)}
        className="edit-btn"
      >
        <EditIcon />
      </Link>
    </div>
  );
}

export default BookDetails;
