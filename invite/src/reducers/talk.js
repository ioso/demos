let initialStgate = {
    // inviteDate: Math.round(new Date('2019-10-01 12:00:00').getTime()/1000) //1569902400
}

const talk = (state = initialStgate, action) => {
    console.log(11111)
    switch (action.type) {
        case 'HANDLE_CHANGE':
            return { ...state, input: action.input }
            break;
        case 'ADD_TODO':
            if(state.input){
                let {list,input}= state;
                let index=list.length+1;
                list=list.concat({ id: index, title: input, status: 1 })
                return { ...state,list} 
            }else{
                alert('不能为空')
                return state
            }
            break;
        case 'TOGGLE_TODO':
            let {id, status}=action;
            let list=JSON.parse(JSON.stringify(state.list));

            list.find(data=>data.id==id).status=status;
            return {...state,list}
        default:
            return state
    }
}

export default talk