type Words = {
  [key: string]: string;
  //객체의 프로퍼티에 대해서 미리 알진 못하지만 타입을 알 때 유용
};

//사전 클래스
class Dict {
  private words: Words;

  constructor() {
    this.words = {};
  }

  //단어 추가
  //클래스를 타입처럼 사용 가능
  add(word: Word) {
    //단어가 아직 사전에 존재X
    if (!this.words[word.term]) {
      this.words[word.term] = word.def;
    }
  }

  //단어의 정의 출력
  def(term: string) {
    return this.words[term];
  }

  //단어 삭제
  del(term: string) {
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
  constructor(public term: string, public def: string) {} //단어, 정의

  //단어 정의 수정
  editDef(newDef: string) {
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
