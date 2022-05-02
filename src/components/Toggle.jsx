import { createSignal } from "solid-js";

export default function Toggle(props) {
  const [open, setOpen] = createSignal(true);
  return (
    <>
      <div class="toggle" classList={{ open: open() }} $ServerOnly>
        <a onClick={() => setOpen((o) => !o)}>
          {open() ? "[-]" : "[+] comments collapsed"}
        </a>
      </div>
      <ul
        class="comment-children"
        style={{ display: open() ? "block" : "none" }}
        $ServerOnly
      >
        {props.children}
      </ul>
    </>
  );
}
