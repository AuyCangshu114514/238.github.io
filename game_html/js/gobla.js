function sumP(percentage1, percentage2) {
  // 将百分数转换为小数
  var decimal1 = parseFloat(percentage1) / 100;
  var decimal2 = parseFloat(percentage2) / 100;
  
  // 计算相加结果
  var result = decimal1 + decimal2;
  
  // 将结果转换回百分数
  var percentageResult = (result * 100).toFixed(2) + '%';
  
  return percentageResult;
}

function getLeftValue(element) {
  var computedStyle = window.getComputedStyle(element);
  var leftValue = computedStyle.getPropertyValue('left');
  return leftValue;
}



//存档与读档
function save(data){
	var json_data = JSON.stringify(data)
	localStorage.setItem('save',json_data)
	alert('已存档！')
}

function load_save(){
	var json_data = localStorage.getItem('save')
	if(json_data){
		var data = JSON.parse(json_data)
		console.log(data)
		return data
	}
	else{
		alert('读档失败！错误码:x114514')
	}

}


//从右侧进入
function right_in(id){
	var element = document.getElementById(id);
	var element_x = 100;
	element.style.removeProperty('top')
	element.style.bottom = '-15%'
	element.style.left = '100%';
	element.style.display = 'block'
	var change = setInterval(function(){
		element.style.left = element_x + '%';
		element_x = element_x - 0.4;
		if(element_x <= 70){
			clearInterval(change);
		}
	}, 5);
}
//从左侧进入
function left_in(id){
	var elementa = document.getElementById(id);
	var elementa_x = 0;
	// element.style.removeProperty('top')
	elementa.style.bottom = '-15%'
	elementa.style.left = '0%';
	elementa.style.display = 'block'
	var changea = setInterval(function(){
		elementa.style.left = elementa_x + '%';
		elementa_x = elementa_x + 0.4;
		if(elementa_x >= 30){
			clearInterval(changea);
		}
	}, 5);
}
// 向左离开
function left_out(id){
	var elementa = document.getElementById(id);
	var elementa_x = 30;
	var changea = setInterval(function(){
		elementa.style.left = elementa_x + '%';
		elementa_x = elementa_x - 1;
		if(elementa_x <= -60){
			clearInterval(changea);
			elementa.style.display = 'none';
			}
	}, 5);
}

// 向右离开
function right_out(id){
	var elementa = document.getElementById(id);
	var elementa_x = 70;
	var changea = setInterval(function(){
		elementa.style.left = elementa_x + '%';
		elementa_x = elementa_x + 1;
		if(elementa_x >= 90){
			clearInterval(changea);
			elementa.style.display = 'none';
			}
	}, 5);
}

//从地下进入
function up_in(id){
	var element = document.getElementById(id)
	var element_y = 100
	element.style.top = '100%'
	element.style.display = 'block'
	var change = setInterval(function(){
		element.style.top = element_y + '%';
		element_y = element_y - 0.4;
		if(element_y <= 15){
			clearInterval(change);
		}
	}, 5);
}

//快速从右划过
function fast_right_to_left(id){
	var element = document.getElementById(id);
	var element_x = 100;
	element.style.removeProperty('top')
	element.style.left = '100%';
	element.style.bottom = '-15%'
	
	element.style.display = 'block'
	var change = setInterval(function(){
		element.style.left = element_x + '%';
		element_x = element_x - 2;
		if(element_x <= -50){
			clearInterval(change);
		}
	}, 1);
}

//飞走
function fly_out(id){
	var element = document.getElementById(id)
	var element_y = -15
	element.style.removeProperty('top')
	element.style.bottom = '-15%'
	element.style.display = 'block'
	var v = 0.1
	var a = 0.05
	var t = 0.01
	var v0
	var change = setInterval(function(){
		element.style.bottom = element_y + '%';
		v0 = v
		v = v0 + a * t
		t = t + 0.01
		element_y = element_y + v;
		if(element_y >= 120){
			clearInterval(change);
		}
	}, 5);
}
//向下离去
function down_out(id){
    var element = document.getElementById(id);
    var element_y = 15;
    var change = setInterval(function(){
        element.style.top = element_y + '%';
        element_y = element_y + 0.4;
        if(element_y >= 100){
            element.style.display = 'none';
            clearInterval(change);
        }
    }, 5);
}

//向下飞走
function fly_down(id){
    var element = document.getElementById(id);
    var element_y = 115;
    element.style.top = '115%';
    element.style.display = 'block';
    var v = 0.1;
    var a = 0.05;
    var t = 0.01;
    var v0;
    var change = setInterval(function(){
        element.style.top = element_y + '%';
        v0 = v;
        v = v0 - a * t;
        t = t + 0.01;
        element_y = element_y - v;
        if(element_y <= -15){
            clearInterval(change);
            element.style.display = 'none';
        }
    }, 5);
}

//向左转10圈（1s）
function rotateLeft(id) {
    var element = document.getElementById(id);
    var rotationAngle = 0;
    element.style.transformOrigin = "center";
    element.style.transform = "rotate(0deg)";
    var rotationInterval = setInterval(function() {
        rotationAngle -= 36; // 在1秒内完成10圈旋转，即每次旋转36度
        element.style.transform = "rotate(" + rotationAngle + "deg)";
        if (rotationAngle <= -36000) { // 10圈共3600度
            clearInterval(rotationInterval);
        }
    }, 10000 / 360); // 每1/360秒（即1秒10圈）执行一次旋转
}
