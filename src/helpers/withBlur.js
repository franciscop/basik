// Wrap the event and automatically blur it if we suspect
// it was triggered from the mouse, where we don't want
// to persist the focus. Keyboard events do persist it
export default function withAutoBlur(onClick) {
  return (e) => {
    const isKeyboard =
      !e.detail && !e.clientX && !e.clientY && !e.pageX && !e.pageY;
    if (!isKeyboard) {
      e.target.blur();
    }
    if (onClick) {
      onClick(e);
    }
  };
}
