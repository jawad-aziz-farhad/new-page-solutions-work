export const getPageElement = (element: HTMLElement) => {
    if (element.classList.contains('ion-page')) {
      return element;
    }
  
    const ionPage = element.querySelector(
      ':scope > .ion-page, :scope > ion-nav, :scope > ion-tabs'
    );
    if (ionPage) {
      return ionPage;
    }
    // idk, return the original element so at least something animates
    // and we don't have a null pointer
    return element;
};