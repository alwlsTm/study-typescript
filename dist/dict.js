"use strict";
//사전 클래스
class Dict {
    constructor() {
        this.words = {};
    }
    //단어 추가
    //클래스를 타입처럼 사용 가능
    add(word) {
        //단어가 아직 사전에 존재X
        if (!this.words[word.term]) {
            this.words[word.term] = word.def;
        }
    }
    //단어의 정의 출력
    def(term) {
        return this.words[term];
    }
    //단어 삭제
    del(term) {
        delete this.words[term];
    }
    //사전 전체 출력
    all() {
        for (let key in this.words) {
            console.log(`${key}: ${this.words[key]}`);
        }
    }
    //사전 초기화
    clear() {
        this.words = {};
    }
}
//각각의 단어 클래스 (form 같은 용도)
class Word {
    constructor(term, def) {
        this.term = term;
        this.def = def;
    } //단어, 정의
    //단어 정의 수정
    editDef(newDef) {
        this.def = newDef;
    }
}
//출력
const kimchi = new Word("kimchi", "한국의 음식");
const spaghetti = new Word("spaghetti", "이탈리아의 음식");
const sushi = new Word("sushi", "일본의 음식");
const malatang = new Word("malatang", "중국의 음식");
kimchi.editDef("한국의 정통 발효 음식");
const dict = new Dict();
dict.add(kimchi);
dict.add(spaghetti);
dict.add(sushi);
dict.add(malatang);
dict.def("kimchi"); //"한국의 정통 발효 음식"
dict.def("spaghetti"); //"이탈리아의 음식"
dict.def("sushi"); //"일본의 음식"
dict.def("malatang"); //"중국의 음식"
dict.del("sushi");
dict.del("malatang");
dict.all();
// kimchi: 한국의 정통 발효 음식
// spaghetti: 이탈리아의 음식
