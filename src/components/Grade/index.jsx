export default function Grade({states}) {
    const [courseId] = states
    return (
        <section className="grade">
            {courseId}
        </section>
    )
}