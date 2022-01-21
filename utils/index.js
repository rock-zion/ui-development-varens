export function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function isMobile() {
  if (typeof window !== 'undefined') {
    let screenWidth = window?.matchMedia(
      'only screen and (min-width: 1200px)'
    ).matches;
    if (screenWidth) {
      return false;
    } else {
      return true;
    }
  }
}
