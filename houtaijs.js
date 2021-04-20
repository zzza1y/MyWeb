window.onsubmit = function()
			{
			var password = 2021;
			var input1 = document.getElementById("password1");
				if(input1.value == password)
				{
					alert("登录成功");
					document.getElementById("forms").action="houtai.html";
				}
			else{
				alert("密码错误，登录失败");
				}
			}