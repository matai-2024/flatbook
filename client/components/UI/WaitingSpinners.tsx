interface Props {
  loadingText: string
  testId: string
}

export function GlobalSpinner() {
  return <span className="loading loading-bars loading-lg"></span>
}

export function LocalSpinner(props: Props) {
  return (
    <>
      <span className="loading loading-spinner loading-md"></span>
      <p data-testid={props.testId}>{props.loadingText}</p>
    </>
  )
}
