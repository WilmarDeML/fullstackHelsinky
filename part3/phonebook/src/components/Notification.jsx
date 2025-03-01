const Notification = ({ message, err }) => {
  if (!message) {
    return
  }

  return (
    <div className={err ? 'error' : 'notification'}>
      {message}
    </div>
  )
}

export default Notification