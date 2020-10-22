import React from "react";

// function Detail(props) {
//     console.log(props);
//     return <span>hello</span>
// }

class Detail extends React.Component {
    componentDidMount() {
        const {location,history} = this.props;
        console.log(this.props);
        if(location.state === undefined) {
            history.push("/"); // state를 가져오지 못했다면 걍 홈으로 리다이랙트 시켜버린다. 우리는 이제 home에 있는 무비 디테일을 클릭해야만 정보들을 가져올 수 있기 때문에 글로 이동하게 만든다.
        }
    }
    render() {
        const {location} = this.props;
        if(location.state) {
            return <span>{location.state.title}</span>
        }else {
            return null;
        }
}
}
export default Detail;