import { useEffect } from "react";
import { useBooksContext } from "../hooks/useBooksContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { useSearchContext } from "../hooks/useSearchContext";

// Components
import BookDetails from "../components/BookDetails";
import BookOverview from "../components/BookOverview";

function Home() {
  const { books, dispatch } = useBooksContext();
  const { user } = useAuthContext();
  const { training } = useSearchContext();

  useEffect(() => {
    const fetchWorkouts = async () => {
      if (!user) {
        return;
      }

      try {
        const response = await fetch("http://localhost:4000/api/books/", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch books");
        }

        const data = await response.json();
        dispatch({ type: "SET_BOOKS", payload: data.books });
        dispatch({ type: "SEARCH_BOOK", payload: training });
      } catch (error) {
        console.error("Error fetching books:", error.message);
      }
    };

    fetchWorkouts();
  }, [dispatch, user, training]);

  return (
    <div className="home">
      <BookOverview />
      <div className="books">
        {books &&
          books.map((book) => {
            return <BookDetails book={book} key={book._id} />;
          })}
      </div>
    </div>
  );
}

export default Home;
