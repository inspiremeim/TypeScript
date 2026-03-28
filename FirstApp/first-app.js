var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var totalCount = 45645;
var isValid = false;
var userName = "Rahul";
var userId = "abc123";
userId = 1231;
var productId = "abc123";
productId = 1231;
var orderDetail;
orderDetail = {
    id: 2342,
    isDispatch: false,
    typ: "Offline",
};
var pDetails;
pDetails = {
    id: 2342,
    isDispatch: false,
    typ: "Offline",
};
var outDoorGames;
outDoorGames = ["Cricket", "Football", "Baseball", "Golf", 2342243, true];
outDoorGames = [1, 2, 3, 4];
var inDoorGames;
inDoorGames = ["Cricket", "Football", "Baseball", "Golf", 2342243, true];
inDoorGames = [1, 2, 3, 4];
function addNumber(a, b) {
    console.log(a + b);
    return a + b;
}
function mergeString(a, b, doProcessing) {
    doProcessing(a, b);
}
// interface interSchoolCompition {
//   feesPaidBySchool: number;
//   whoIsTheMainPlayer: string;
// }
var RayanInternationSchool;
RayanInternationSchool = {
    schooldId: 45,
    schoolName: "Rayan",
    isSchoolWonBefore: false,
};
var AllSchools = /** @class */ (function () {
    function AllSchools(id, name, wonBefore) {
        this.schooldId = id;
        this.schoolName = name;
        this.isSchoolWonBefore = wonBefore;
    }
    return AllSchools;
}());
var AllSchools2 = /** @class */ (function () {
    function AllSchools2() {
    }
    return AllSchools2;
}());
var AllSchools3 = /** @class */ (function () {
    function AllSchools3() {
        this.schooldId = 0;
        this.schoolName = "";
        this.isSchoolWonBefore = false;
    }
    return AllSchools3;
}());
function getSchoolCompitionDetails(schoolDetails) { }
getSchoolCompitionDetails(new AllSchools2());
var ads;
ads = {
    permissions: ["add", "edit"],
    userName: "Rahul",
};
var admin;
admin = {
    permissions: ["add", "edit"],
    userName: "Rahul",
};
var specificValues;
specificValues = "Balance";
function specFun(action, role) {
    if (role === "Equity" && typeof action === "string") {
        console.log("Role is Equity");
    }
}
function specFun_Extension(action) {
    if ("permissions" in action) {
        console.log("Yes permissions condition checked");
    }
}
var vals;
vals = ["Equity", "Balance"];
var ClothOnlineStore = {
    id: [],
    add: function (data) {
        this.id.push(data);
    },
};
var ShoesOnlineStore = {
    id: [],
    add: function (data) {
        this.id.push(data);
    },
};
function CheckValidType(a, b) {
    return __assign(__assign({}, a), b);
}
var CallCVT = CheckValidType({ age: 54 }, { area: "Delhi" });
console.log(CallCVT);
