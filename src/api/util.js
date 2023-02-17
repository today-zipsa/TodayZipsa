export { util };

const util = {
  /**
   * loading bar
   * @param boolean gbn 
   * 사용 전 작업
   * 1. 화면에 <div id="loading_bar"></div> 추가
   * 2. common.css파일 import
   */
  loadingBar: function(gbn){
    const loadingBarEl = document.querySelector('#loading_bar');
    loadingBarEl.innerHTML = '';

    if(gbn){
      const lb_modal = document.createElement('div');
      const lb_backgrd = document.createElement('div');
      const lb_content = document.createElement('div');
      const barEl = document.createElement('div');
    
      lb_modal.classList.add('lb_modal');
      lb_backgrd.classList.add('lb_background');
      lb_content.classList.add('lb_content');
      barEl.classList.add('loading-bar');
    
      lb_content.append(barEl);
      lb_modal.append(lb_backgrd, lb_content);
      loadingBarEl.append(lb_modal);
    }
  },

  /**
   * 숫자 천단위 콤마 표시
   * @param Number value 
   * @returns String
   */
  setLocalString: function(value){
    let strValue = '';
    const formatValue = value.toLocaleString('ko-KR');
    strValue = formatValue;
    return strValue;
  },

  /**
   * 문자를 숫자로 변경
   * @param String str 
   * @returns Number
   */
  strToNum: function(str){
    str = "" + str.replace(/,/gi, '');
    str = str.replace(/(^\s*)|(\s*$)/g, "");
    return (new Number(str));
  },

}
