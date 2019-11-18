/*
    URL PARSER
 */

console.log(window.location.href);
//window 객체는 DOM 문서를 포함한 브라우처의 창을 나타낸다.
// 그래서 위의 코드는 브라우저의 현재 주소를 콘솔 로그로 보여준다.
/*
    너무 모르겠어서 https://www.regextester.com/93586와
    https://www.zerocho.com/category/ECMAScript/post/5adae68aca91b1001b14dd29를 참고하였다.
    캡쳐링 그룹에(괄호로 묵어준게 캡쳐링 그룹) 이름을 붙일 수 있는데 groups로 저장한다.

    처음엔 생성자 함수를 사용하라고 해서 function을 선언하고 new urlParser를 선언하려고 했으나 prototype을 이용하지 않아서 안됨.
    const urlparser1 = new urlParser(window.location.href);
    urlparser1(`https://github.com/Wearenotyourkind/week03`);
*/

function Url(url1){
    this.url = url1;
}
let UrlParsing1 = new Url(window.location.href);
Url.prototype.urlParser = function() {
    const arr= /(?<protocol>https?:\/\/)?(?<www>www[^\.]?)\.(?<domain1>[\w\d]+)\.(?<domain2>com|org|net|us|uk|edu|kr|co.kr)(?<parameter>\/[^ ]*)?/.exec(this.url);
    console.log(arr.groups);
    return arr;
};
UrlParsing1.urlParser();
/*
    정규표현식은 문자열에서 특정 내용을 찾거나 대체하는데 사용한다.
    생성자 함수를 이용해서 url을 저장한다.
*/



