function BaseIcon({ children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="w-6 h-6 fill-gray-500 hover:fill-white"
    >
      {children}
    </svg>
  );
}

export function BoardSizeIcon() {
  return (
    <BaseIcon>
      <path fill="none" d="M0 0H24V24H0z" />
      <path d="M20 3c.552 0 1 .448 1 1v16c0 .552-.448 1-1 1H4c-.552 0-1-.448-1-1V4c0-.552.448-1 1-1h16zm-1 2H5v5.999L9 11v2H5v6h14v-6h-4v-2l4-.001V5zm-7 1l3 3h-2v6h2l-3 3-3-3h2V9H9l3-3z" />
    </BaseIcon>
  );
}

export function TextSizeIcon() {
  return (
    <BaseIcon>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M3 4h18v2H3V4zm0 15h14v2H3v-2zm0-5h18v2H3v-2zm0-5h14v2H3V9z" />
    </BaseIcon>
  );
}

export function TextAlignmentIcon() {
  return (
    <BaseIcon>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M11.246 15H4.754l-2 5H.6L7 4h2l6.4 16h-2.154l-2-5zm-.8-2L8 6.885 5.554 13h4.892zM21 12.535V12h2v8h-2v-.535a4 4 0 1 1 0-6.93zM19 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
    </BaseIcon>
  );
}
