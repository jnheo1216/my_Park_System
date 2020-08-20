
function detail_ajax(area_num) {
//    alert(area_num)
    // javascript의 객체는 => {key : value, key : value, ...} 형태
    $.ajax({
        async : true,    // 비동기 방식의 호출(default)
        url : "http://openapi.seoul.go.kr:8088/6a6250617970617232376c4f505871/json/SearchParkInfoService/1/132/" + area_num,  // 호출할 url
        data : {
        },   // 서버 프로그램에게 넘겨줄 데이터들
        type : "GET",
        timeout : 5000,   // 주어진 시간안에 결과가 안오면 query가 실패한 것으로 간주
        dataType : "json",   // 서버로 부터 받을 데이터 타입
        success : function(result) {
            console.log('성공')
//            alert('성공')
            park_list = result.SearchParkInfoService.row[0]
            $("#myParkname").html(park_list.P_PARK)
            $("#myParkaddr").html(park_list.P_ADDR)
            $("#myParkcontents").html(park_list.P_LIST_CONTENT)
            $("#myParkequip").html(park_list.MAIN_EQUIP)
            $(".mainImg").attr("src", park_list.P_IMG)
//            var img = $("<img />").attr("src", park_list.P_IMG)
//            $("tbody").append(img)



        },
        error : function(error) {
            alert("서버호출 실패")
        }
    })

}

