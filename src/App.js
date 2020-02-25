import React,{Component} from 'react';
class App extends Component{
    constructor(props) {
        super(props);
        // 데이터를 받아서 저장
        this.state={
            movie:[],
            isShow:false,
            detail:{}
        }
    }
    // JSON을 읽어 온다 ==> state에 저장
    componentDidMount() {

    }
    // state에 저장된 데이터 출력
    // 포스터를 클릭하면 => 데이터를 => MovieDetail 에 전송 (props)
    /*
        function App()

        => App(값)
     */
    render() {

    }
}
class MovieDetail extends Component{
  
}
export default App;
