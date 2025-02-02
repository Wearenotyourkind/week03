const htmlCode = '<!DOCTYPE html> <html> <head> <title>자바스크립트 실행 컨텍스트와 스코프</title> <meta charset="utf-8"> </head> <body> //기존 html이 너무 길어서 편집함 <header> <h1>자바스크립트의 실행 컨텍스트와 스코프</h1> </header> <nav> //nav태그는 ol,ul태그와 같이 쓰는 경우가 많음 <ul> <li>실행 컨텍스트</li> <li>스코프</li> </ul> </nav> <main> <div> <section> //section은 말그대로 영역임 <h3>스코프</h3> <p> 현재 코드에서 접근 가능한 유효범위를 뜻한다. 현재 코드가 실행할 때의 컨텍스트가 유효한 범위를 뜻한다. 따라서 자바스크립트의 스코프는 전역 스코프와 함수 스코프로 나뉜다. </p> </section> </div> </main> <footer> © 2019 닷제이에스 </footer> <script> </script> </body> </html>';
let arr = {};
let counter = 0;

console.log(`0:Root, 1:html,2~:etc`);
function html(code){
    let regex = /(?<tagOpen>\<[a-zA-Z]+[^>]+[\>])([^<]*)(?<tagClose>\<\/[a-zA-Z]+\>)/g;
    while(regex.exec(code)[0] !== undefined){
        try {
            arr.push(regex.exec(code)[0]);
            console.log(counter);
            counter++;
        }
        catch(err){
            break;
        }
    }
    console.log(arr);
    console.log(counter);
};
html(htmlCode);

