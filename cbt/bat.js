function Relativity(pwd, destination) {
	let arr1 = pwd.split("/").filter(e => (e ? true : false));
	let arr2 = destination.split("/").filter(e => (e ? true : false));
	let match = 0;
	let small = arr1.length > arr2.length ? arr2 : arr1;
	for (let i = 0; i < small.length; i++) {
		if (arr1[i] == arr2[i]) {
			match++;
		} else {
			match = i;
			break;
		}
	}
	let result = "";
	for (let i = 0; i < match; i++) {
		result += "../";
	}
	result += arr2.splice(match, arr2.length - match).join("/");
	return result;
}

console.log(Relativity("/root/main/all", "/root/call/me"));
