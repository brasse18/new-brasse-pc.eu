import jwt_decode from 'jwt-decode';

export function setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + "; " + expires + ";SameSite=Strict";
  }

export function getCookie(token: string): string {
    const cookieName = token + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(";");
  
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(cookieName) === 0) {
        return cookie.substring(cookieName.length, cookie.length);
      }
    }
    return "";
  }

  export function deleteCookie(name: string) {
    document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;SameSite=Strict";
  }

  export function getUserNameFromCookie(): string {

    let token: string = getCookie("token");
    const decodedToken = jwt_decode(token);
    //console.log(decodedToken);
    const { name } = decodedToken;

    return name;
  }

  export function getUserImageFromCookie(): string {

    let token: string = getCookie("token");
    const decodedToken = jwt_decode(token);
    //console.log(decodedToken);
    const { picture } = decodedToken;

    return picture;
  }

  export function removeToken() {
    deleteCookie("token");
  }

  export function isCookieExpired(cookieName: string) {
    const cockiDate = getCookieExpirationDate(cookieName);
    console.log("dat: " + cockiDate);
    return false;
  }

  function getCookieExpirationDate(cookieName: string) {
    const cookieValue = document.cookie
      .split('; ')
      .find((row) => row.startsWith(`${cookieName}=`));

      console.log("men duy då kaka: " + cookieValue)
  
    return null;
  }

