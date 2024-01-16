import {createStore} from 'vuex'

const store = createStore({
	state(){
		return{
			name:'jim',
			age:20,
			likes:30,
			// 좋아요 버튼 토글용 boolean
			likeClicked:false
			}
		},
	mutations:{	
		이름변경(state){
			// state 는 this 와 같은 역할
			const id=state.name='jo';
			console.log(id);
		},
		// payload 는 전달된 데이터
		나이변경(state,payload){
			// 전달받은 payload 데이터 10 을 사용 가능
			const sum=state.age+=payload;
			console.log(sum);
		},
		// likes 하트 토글버튼 만들기 : 조건식 적용
		하트변경(state){
			// 좋아요가 눌렸는지 여부 상태 체크 == false
			if(state.likeClicked==false){
			const heart = state.likes++;
			console.log(heart);
			// 토글이 되도록 boolean 상태를  = true 로 변경
			state.likeClicked=true;				
		}
			else{
				const unHeart = state.likes--;
				console.log(unHeart);
				state.likeClicked=false;				
					
			}
		}
		// 하트변경(state){
		// 	const heart = state.likes++;
		// 	console.log(heart);
		// }
		
	}
})
export default store;