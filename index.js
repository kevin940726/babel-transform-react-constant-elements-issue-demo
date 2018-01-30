class C {}

function render({ text }) {
  return () => (<Component text={text} />);
}
