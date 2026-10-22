function CourseCard({ title, instructor, credits, progress, status }) {
  const isCompleted = status === "completed";

  return (
    <article className={`card ${isCompleted ? "card--done" : "card--active"}`}>
      <h3>{title}</h3>
      <p className="meta">{instructor} · {credits} credits</p>

      {isCompleted ? (
        <p className="badge badge--done">Completed</p>
      ) : (
        <>
          <p className="badge badge--active">In progress: {progress}%</p>
          <div className="bar" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
            <div className="bar__fill" style={{ width: `${progress}%` }} />
          </div>
        </>
      )}
    </article>
  );
}

export default CourseCard;