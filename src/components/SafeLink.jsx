export default function SafeLink({ external, ...props }) {
  const isExternal = external ?? /^https?:\/\//i.test(props.href || '')
  if (isExternal) {
    return (
      <a
        {...props}
        target="_blank"
        rel="noopener noreferrer"
      />
    )
  }
  return <a {...props} />
}