export const SvgSelector = ({ name }) => {
  switch (name) {
    case "star":
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
          <path d="M14.5006 23.4328L7.29544 27.8528C7.12695 27.9563 6.93189 28.0072 6.73479 27.9992C6.53768 27.9911 6.34734 27.9245 6.18769 27.8076C6.02805 27.6907 5.90625 27.5288 5.83759 27.3423C5.76894 27.1557 5.75651 26.9529 5.80186 26.7592L7.74351 18.4801L1.3478 12.9342C1.1983 12.8044 1.09017 12.6329 1.03701 12.4414C0.983854 12.2498 0.988038 12.0466 1.04904 11.8574C1.11004 11.6683 1.22513 11.5015 1.37985 11.3781C1.53456 11.2547 1.72199 11.1802 1.91856 11.164L10.3239 10.4686L13.5778 2.61983C13.6539 2.43623 13.7821 2.27942 13.9463 2.16914C14.1105 2.05885 14.3033 2 14.5006 2C14.6979 2 14.8908 2.05885 15.055 2.16914C15.2192 2.27942 15.3474 2.43623 15.4234 2.61983L18.6773 10.4686L27.0827 11.164C27.2791 11.1805 27.4664 11.2551 27.6209 11.3786C27.7754 11.5021 27.8903 11.6689 27.9512 11.858C28.012 12.0471 28.0161 12.2502 27.9629 12.4417C27.9097 12.6331 27.8015 12.8045 27.6521 12.9342L21.2577 18.4801L23.1994 26.7592C23.2447 26.9529 23.2323 27.1557 23.1636 27.3423C23.095 27.5288 22.9732 27.6907 22.8135 27.8076C22.6539 27.9245 22.4635 27.9911 22.2664 27.9992C22.0693 28.0072 21.8743 27.9563 21.7058 27.8528L14.5006 23.4328Z" />
        </svg>
      );
    case "noImage":
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
          <path d="M28.125 3.20072L26.7993 1.875L1.875 26.7993L3.20072 28.125L5.07572 26.25H24.375C24.8721 26.2493 25.3486 26.0516 25.7001 25.7001C26.0516 25.3486 26.2493 24.8721 26.25 24.375V5.07572L28.125 3.20072ZM24.375 24.375H6.95072L14.2566 17.0691L16.4867 19.2991C16.8383 19.6507 17.3152 19.8483 17.8125 19.8483C18.3098 19.8483 18.7867 19.6507 19.1383 19.2991L20.625 17.8125L24.375 21.56V24.375ZM24.375 18.9077L21.9508 16.4834C21.5992 16.1318 21.1223 15.9342 20.625 15.9342C20.1277 15.9342 19.6508 16.1318 19.2992 16.4834L17.8125 17.9702L15.5841 15.7417L24.375 6.95072V18.9077Z" />
          <path d="M5.625 20.625V17.8125L10.3125 13.1282L11.6 14.4157L12.9274 13.0882L11.6383 11.7991C11.2867 11.4475 10.8098 11.2499 10.3125 11.2499C9.81523 11.2499 9.33832 11.4475 8.98669 11.7991L5.625 15.1609V5.625H20.625V3.75H5.625C5.12787 3.7505 4.65125 3.9482 4.29972 4.29972C3.9482 4.65125 3.7505 5.12787 3.75 5.625V20.625H5.625Z" />
        </svg>
      );
    case "desc":
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
          <path d="M9.27119 28L2 21.8627L3.4322 20.1888L8.16949 24.206V2H10.3729V24.206L15.3305 20.1888L16.7627 21.8627L9.27119 28ZM21.3898 17.6223H13.678V15.3906H21.3898V17.6223ZM23.5932 13.1588H13.678V10.927H23.5932V13.1588ZM25.7966 8.69528H13.678V6.46352H25.7966V8.69528ZM28 4.23176H13.678V2H28V4.23176Z" />
        </svg>
      );
    case "asc":
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
          <path d="M28 28H13.678V25.7682H28V28ZM10.3729 28H8.16949V5.79399L3.4322 9.81116L2 8.13734L9.27119 2L16.4322 8.13734L15 9.81116L10.3729 5.79399V28ZM25.7966 23.5365H13.678V21.3047H25.7966V23.5365ZM23.5932 19.073H13.678V16.8412H23.5932V19.073ZM21.3898 14.6094H13.678V12.3777H21.3898V14.6094Z" />
        </svg>
      );
    case "search":
      return (
        <svg width="30" height="30" viewBox="0 0 30 30" fill="currentColor">
          <path d="M12.8999 2.53068C11.7979 2.63178 10.582 2.91221 9.65823 3.27825C5.86792 4.78016 3.23617 8.09598 2.61685 12.1499C2.49588 12.9418 2.49588 14.558 2.61685 15.3499C3.3778 20.331 7.16875 24.1219 12.1499 24.8829C12.9407 25.0037 14.5575 25.0039 15.3499 24.8832C17.2105 24.5998 19.0551 23.8361 20.4691 22.7637L20.7632 22.5406L23.1691 24.9424C24.9846 26.755 25.6301 27.3693 25.7999 27.446C26.254 27.6513 26.7114 27.541 27.1262 27.1262C27.541 26.7114 27.6513 26.254 27.446 25.7999C27.3693 25.6301 26.755 24.9846 24.9424 23.1691L22.5406 20.7632L22.7637 20.4691C23.5918 19.3772 24.2604 17.9838 24.6201 16.5999C24.8947 15.5435 24.9708 14.9258 24.9708 13.7499C24.9708 12.574 24.8947 11.9563 24.6201 10.8999C23.4921 6.56077 19.8546 3.29666 15.3999 2.62612C14.8855 2.54868 13.3447 2.48985 12.8999 2.53068ZM15.1749 5.11755C16.5515 5.37067 17.7777 5.87872 18.8472 6.63911C19.4528 7.06968 20.4301 8.04697 20.8606 8.6526C21.4755 9.51742 21.9678 10.5832 22.2221 11.5999C22.4322 12.4398 22.4731 12.7906 22.4731 13.7499C22.4731 14.7092 22.4322 15.0599 22.2221 15.8999C21.4491 18.9907 18.9907 21.4491 15.8999 22.2221C15.0599 22.4322 14.7092 22.4731 13.7499 22.4731C12.2126 22.4731 11.0433 22.1905 9.69989 21.4944C8.88862 21.074 8.27437 20.619 7.57758 19.9222C6.22672 18.5713 5.44248 17.0336 5.09275 15.0499C5.00579 14.5566 5.00579 12.9431 5.09275 12.4499C5.34599 11.0135 5.8627 9.74463 6.6391 8.6526C7.06968 8.04697 8.04697 7.06968 8.65259 6.63911C9.51663 6.02482 10.5806 5.5332 11.5999 5.27718C12.0128 5.1735 12.2746 5.12617 12.9749 5.02878C13.2832 4.98588 14.7895 5.04667 15.1749 5.11755Z" />
        </svg>
      );
    default:
      return <svg />;
  }
};
