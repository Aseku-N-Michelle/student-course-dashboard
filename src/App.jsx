import { courses } from "./data";
import CourseCard from "./components/CourseCard";

function App() {
  const completed = courses.filter((c) => c.status === "completed");
  const creditsDone = completed.reduce((sum, c) => sum + c.credits, 0);

  return (
    <main className="container">
      <h1>My Courses</h1>

      {courses.length === 0 ? (
        <p className="empty">No courses yet. Your enrolled courses will appear here.</p>
      ) : (
        <>
          <p className="summary">
            {completed.length} of {courses.length} courses completed · {creditsDone} credits earned
          </p>

          <section className="grid">
            {courses.map((course) => (
              <CourseCard key={course.id} {...course} />
            ))}
          </section>
        </>
      )}
    </main>
  );
}

export default App;