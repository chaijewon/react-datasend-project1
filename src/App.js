import React,{Component,Fragment} from 'react';
import axios from 'axios'
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
       // JSON을 읽는다 => state
        //var _this=this;
        /*
            const html=function(res){
            }

            => const html=(res)=>{
               }

               Arrow (화살표 함수)
         */
        axios.get("http://localhost:3000/yearly.json").
        then((response)=>{
            // response => config,header,data
            this.setState({movie:response.data});
        });
        /*
              movie.jsp?page=1&no=2
              axios.get("http://localhost:3000/movie",{
                 params:{
                     page:1,
                     no:2
                 }
              })
         */
    }
    // state에 저장된 데이터 출력
    // 포스터를 클릭하면 => 데이터를 => MovieDetail 에 전송 (props)
    /*
        function App()

        => App(값)

        success: 녹색
        info : 하늘색
        danger : 빨간색
        primary : 파랑색
        default : 회색
        active : 진한 회색
     */
    render() {
        const html=this.state.movie.map((m)=>
            <div className={"col-sm-4"}>
                <div className="panel panel-primary">
                    <div className="panel-heading">{m.title.substring(0,18)}</div>
                    <div className="panel-body">
                        <img src={m.poster} width={"100%"}/>
                    </div>
                </div>
            </div>
        )
       return (
           <Fragment>{/* 임시 최상위 태그를 만들때 사용*/}
            <h1 style={{"textAlign":"center"}}>박스오피스</h1>
            <div className={"row"}>
                <div className={"col-sm-8"}>
                    {html}
                </div>
                <div className={"col-sm-4"}>
                  <MovieDetail/>
                </div>
            </div>
           </Fragment>
       )
    }

}
// App =====> MovieDetail (포스터를 클릭하면 => 영화한개 대한 모든정보를 props)
class MovieDetail extends Component{
    render() {
        return (
            <table className={"table table-hover"}>
                <tr>
                    <td className={"text-center"} width={"30%"} rowSpan={"7"}>
                        <img src={this.props.m.poster} width={"100%"}/>
                    </td>
                    <td colSpan={"2"} width={"70%"} className={"text-center success"}>
                        {this.props.m.title}
                    </td>
                </tr>
                <tr>
                  <th width={"20%"} className={"text-right"}>감독</th>
                  <td width={"50%"}>{this.props.m.director}</td>
                </tr>
                <tr>
                    <th width={"20%"} className={"text-right"}>출연</th>
                    <td width={"50%"}>{this.props.m.actor}</td>
                </tr>
                <tr>
                    <th width={"20%"} className={"text-right"}>장르</th>
                    <td width={"50%"}>{this.props.m.genre}</td>
                </tr>
                <tr>
                    <th width={"20%"} className={"text-right"}>등급</th>
                    <td width={"50%"}>{this.props.m.grade}</td>
                </tr>
                <tr>
                    <th width={"20%"} className={"text-right"}>평점</th>
                    <td width={"50%"}>{this.props.m.score}</td>
                </tr>
                <tr>
                    <th width={"20%"} className={"text-right"}>개봉일</th>
                    <td width={"50%"}>{this.props.m.regdate}</td>
                </tr>
                <tr>
                    <td colSpan={"3"}>
                        {this.props.m.story}
                    </td>
                </tr>
            </table>
        )
    }
}
export default App;
