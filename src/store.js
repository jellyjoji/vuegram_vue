import axios from 'axios';
import {createStore} from 'vuex';

const store = createStore({
	state(){
		return{
			name:'jim',
			age:20,
			likes:30,
			// 좋아요 버튼 토글용 boolean
			likeClicked:false,

			// object 자료형을 {} 안에 가져와서 넣기
			more:{}
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
		// 하트변경(state){
		// 	const heart = state.likes++;
		// 	console.log(heart);
		// }
		
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
		},
		// 받아온 데이터 payload 를 more 안에 넣어주세요
		setMore(state, payload){
			state.more = payload
		}		
	},
	actions:{
		// (파라미터) 에 들어가는 값은 모두 $store 라고 생각하면 된다.
		getData(context){
			axios.get('https://codingapple1.github.io/vue/more0.json')
			// then 으로 응답받은 데이터를 a 인수로 받는다
			.then((a)=>{
				// .data :  a 변수의 'data 속성'을 콘솔에 출력
				console.log(a.data);
				// setMore 작동시켜서 a.data 넣어주세요
				context.commit('setMore',a.data)
			})
		}
	}
})
export default store;