export function getHeaderNavHeight() {
  const headerNavId = 'header-nav';
  const headerNavElement = document.getElementById(headerNavId);
  if (headerNavElement)
    return headerNavElement.clientHeight;

  return 0;
}
